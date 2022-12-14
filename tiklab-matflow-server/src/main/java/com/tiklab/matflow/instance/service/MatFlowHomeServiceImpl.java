package com.tiklab.matflow.instance.service;


import com.tiklab.matflow.definition.model.MatFlow;
import com.tiklab.matflow.definition.model.MatFlowStatus;
import com.tiklab.matflow.definition.service.MatFlowService;
import com.tiklab.matflow.instance.model.*;
import com.tiklab.matflow.setting.proof.model.Proof;
import com.tiklab.matflow.setting.proof.service.ProofService;
import com.tiklab.rpc.annotation.Exporter;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@Service
@Exporter
public class MatFlowHomeServiceImpl implements MatFlowHomeService {

    @Autowired
    MatFlowOpenService matFlowOpenService;

    @Autowired
    MatFlowFollowService matFlowFollowService;

    @Autowired
    MatFlowService matFlowService;

    @Autowired
    MatFlowActionService matFlowActionService;

    @Autowired
    ProofService proofService;


    private static final Logger logger = LoggerFactory.getLogger(MatFlowHomeServiceImpl.class);


    //查询用户最近打开的流水线
    @Override
    public List<MatFlowOpen> findAllOpen(String userId){
        StringBuilder s = matFlowService.findUserMatFlowId(userId);
        if (s.toString().equals("")){
            return null;
        }
        List<MatFlowOpen> allOpen = matFlowOpenService.findAllOpen(userId,s);
        if (allOpen == null){
            return null;
        }
        allOpen.sort(Comparator.comparing(MatFlowOpen::getNumber,Comparator.reverseOrder()));
        if (allOpen.size() <= 5){
            return allOpen;
        }
        return allOpen.subList(0, 5);
    }

    //获取收藏列表
    @Override
    public List<MatFlowStatus> findAllFollow(String userId){
        StringBuilder s = matFlowService.findUserMatFlowId(userId);
        if (s.toString().equals("")){
            return null;
        }
        List<MatFlow> allFollow = matFlowFollowService.findAllFollow(userId, s);
        return matFlowService.findAllStatus(allFollow);
    }

    //更新收藏信息
    @Override
    public String updateFollow(MatFlowFollow matFlowFollow){
      return  matFlowFollowService.updateFollow(matFlowFollow);
    }

    //获取用户流水线
    @Override
    public List<MatFlowStatus> findUserMatFlow(String userId){
        StringBuilder s = matFlowService.findUserMatFlowId(userId);
        if (s.toString().equals("")){
            return null;
        }
        List<MatFlow> userMatFlow = matFlowFollowService.findUserMatFlow(userId,s);
        return matFlowService.findAllStatus(userMatFlow);
    }

    //近七天构建状态
    @Override
    public List<MatFlowExecState> runState(String userId){
        List<MatFlowExecState> list = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        int i = -6;
        List<MatFlowExecHistory> allUserHistory = matFlowService.findAllUserHistory(userId);
        if (allUserHistory == null){
            return null;
        }
        while (i <= 0){
            Date lastTime = DateUtils.addDays(new Date(), i);
            MatFlowExecState matFlowExecState = new MatFlowExecState();
            matFlowExecState.setTime(formatter.format(lastTime));
            for (MatFlowExecHistory matFlowExecHistory : allUserHistory) {
                try {
                    Date time = formatter.parse(matFlowExecHistory.getCreateTime());
                    if (!formatter.format(lastTime).equals(formatter.format(time))){
                      continue;
                    }
                    switch (matFlowExecHistory.getRunStatus()) {
                        case 30 -> matFlowExecState.setSuccessNumber(matFlowExecState.getSuccessNumber() + 1);
                        case 20 -> matFlowExecState.setRemoveNumber(matFlowExecState.getRemoveNumber() + 1);
                        case 1 -> matFlowExecState.setErrorNumber(matFlowExecState.getErrorNumber() + 1);
                    }
                } catch (ParseException e) {
                    logger.info("获取历史创建时间时日期转换异常。");
                    throw new RuntimeException(e);
                }
            }

            if (matFlowExecState.getTime() != null){
                matFlowExecState.setTime(matFlowExecState.getTime().substring(5));
                list.add(matFlowExecState);
            }
            i++;
        }
        return list;
    }

    //获取用户动态
    @Override
    public MatFlowActionQuery findUserAction(MatFlowActionQuery matFlowActionQuery){
        MatFlowActionQuery query = new MatFlowActionQuery();
        List<MatFlow> userMatFlow = matFlowService.findUserMatFlow(matFlowActionQuery.getUserId());
        if (userMatFlow == null){
            return null;
        }
        matFlowActionQuery.setMatFlowList(userMatFlow);
        //获取流水线动态
        List<MatFlowAction> list = matFlowActionService.findUserAction(matFlowActionQuery);
        query.setPageSize(matFlowActionQuery.getPageSize());
        query.setPage(matFlowActionQuery.getPage());
        query.setListSize(list.size());
        query.setPageNumber(1);
        if (list.size() < 10){
            query.setDataList(list);
            return query;
        }
        //默认0-10
        if (matFlowActionQuery.getPage()+ matFlowActionQuery.getPageSize() == 11){
            query.setDataList(list.subList(0, 10));
            return query;
        }
        int page = (matFlowActionQuery.getPage() - 1) * matFlowActionQuery.getPageSize();
        int pageSize = matFlowActionQuery.getPage()  * matFlowActionQuery.getPageSize();
        if (page > list.size()){
            return null;
        }
        if (pageSize > list.size()){
            pageSize = list.size();
        }
        query.setDataList(list.subList(page, pageSize));
        query.setPageNumber(list.size()/pageSize + 1);
        query.setListSize(list.size());
        return query;
    }

    @Override
    public List<Proof> findMatFlowProof(@NotNull String userId, String matFlowId, int type){
        StringBuilder userMatFlowId = matFlowService.findUserMatFlowId(userId);
        return proofService.findMatFlowProof(userId, matFlowId, type, userMatFlowId);
    }














}
