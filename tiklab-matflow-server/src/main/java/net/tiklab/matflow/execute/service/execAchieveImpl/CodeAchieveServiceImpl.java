package net.tiklab.matflow.execute.service.execAchieveImpl;



import net.tiklab.core.exception.ApplicationException;
import net.tiklab.matflow.definition.model.Pipeline;
import net.tiklab.matflow.execute.model.PipelineExecLog;
import net.tiklab.matflow.execute.service.execAchieveService.ConfigCommonService;
import net.tiklab.matflow.orther.service.PipelineFileService;
import net.tiklab.matflow.definition.model.PipelineCode;
import net.tiklab.matflow.definition.service.PipelineCodeServiceImpl;
import net.tiklab.matflow.execute.model.PipelineExecHistory;
import net.tiklab.matflow.execute.service.PipelineExecServiceImpl;
import net.tiklab.matflow.execute.service.execAchieveService.CodeAchieveService;
import net.tiklab.matflow.execute.model.PipelineProcess;
import net.tiklab.matflow.setting.model.Proof;
import net.tiklab.rpc.annotation.Exporter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Timestamp;
import java.util.List;

/**
 * 源码管理执行方法
 */

@Service
@Exporter
public class CodeAchieveServiceImpl implements CodeAchieveService {

    @Autowired
    ConfigCommonService configCommonService;

    @Autowired
    PipelineFileService pipelineFileService;

    private static final Logger logger = LoggerFactory.getLogger(PipelineCodeServiceImpl.class);

    // git克隆
    public String clone(PipelineProcess pipelineProcess, PipelineCode pipelineCode){

        Pipeline pipeline = pipelineProcess.getPipeline();
        PipelineExecLog pipelineExecLog = pipelineProcess.getPipelineExecLog();

        List<PipelineExecHistory> list = PipelineExecServiceImpl.pipelineExecHistoryList;

        //开始时间
        long beginTime = new Timestamp(System.currentTimeMillis()).getTime();

        configCommonService.execHistory(list,pipeline.getPipelineId(),"流水线开始执行",pipelineExecLog);

        //代码保存路径
        String codeDir = pipelineFileService.getFileAddress() + pipeline.getPipelineName();
        File file = new File(codeDir);

        //删除旧的代码
        pipelineFileService.deleteFile(file);
        
        configCommonService.execHistory(list,pipeline.getPipelineId(),"分配源码空间。",pipelineExecLog);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        configCommonService.execHistory(list,pipeline.getPipelineId(),"空间分配成功。",pipelineExecLog);

        //获取凭证
        Proof proof = pipelineCode.getProof();
        pipelineProcess.setProof(proof);

        if (proof == null){
            configCommonService.updateTime(pipelineProcess,beginTime);
            configCommonService.updateState(pipelineProcess,false, list);
            return "凭证为空。";
        }
        //分支
        String codeBranch = pipelineCode.getCodeBranch();
        //更新日志
        String s = "开始拉取代码 : " + "\n"
                + "FileAddress : " + file + "\n"
                + "Uri : " + pipelineCode.getCodeAddress() + "\n"
                + "Branch : " + codeBranch + "\n"
                + "proofType : " +proof.getProofType();

        configCommonService.execHistory(list,pipeline.getPipelineId(),"\n"+s,pipelineExecLog);

        try {
            Process process = codeStart(proof, pipelineCode,pipeline.getPipelineName());
            configCommonService.log(process.getInputStream(), pipelineProcess, list);
            configCommonService.updateState(pipelineProcess,false, list);
        } catch (IOException e) {
            configCommonService.updateState(pipelineProcess,false, list);
            configCommonService.updateTime(pipelineProcess,beginTime);
            return "系统执行命令错误 \n" + e;
        }catch (URISyntaxException e){
            configCommonService.updateTime(pipelineProcess,beginTime);
            configCommonService.updateState(pipelineProcess,false, list);
            return "git地址错误 \n" + e;
        }catch (ApplicationException e){
            configCommonService.updateTime(pipelineProcess,beginTime);
            configCommonService.updateState(pipelineProcess,false, list);
            return "" + e;
        }

        configCommonService.execHistory(list,pipeline.getPipelineId(),"代码拉取成功\n",pipelineExecLog);

        configCommonService.updateTime(pipelineProcess,beginTime);
        configCommonService.updateState(pipelineProcess,true, list);
        return null;
    }

    /**
     * 执行命令
     * @param proof 凭证
     * @param pipelineCode 配置信息
     * @return 命令执行实例
     * @throws IOException 命令错误
     * @throws URISyntaxException git地址错误
     * @throws ApplicationException 不存在配置
     */
    private Process codeStart(Proof proof, PipelineCode pipelineCode,String pipelineName) throws IOException, URISyntaxException ,ApplicationException{
        if (pipelineCode == null){
            return null;
        }

        //系统类型
        int systemType = configCommonService.getSystemType();
        //源码存放位置
        String fileAddress = pipelineFileService.getFileAddress()+pipelineName;

        switch (pipelineCode.getType()) {
            case 1, 2, 3, 4 -> {
                //git server地址
                String gitAddress = configCommonService.getScm(1);
                if (gitAddress == null) {
                    throw new ApplicationException("不存在Git配置");
                }
                if (proof.getProofType().equals("SSH")) {
                    return null;
                } else {
                    String gitOrder = gitOrder(pipelineCode, fileAddress, systemType);
                    return configCommonService.process(gitAddress, gitOrder);
                }
            }
            case 5 -> {
                //svn server地址
                String svnAddress = configCommonService.getScm(5);
                if (svnAddress == null) {
                    throw new ApplicationException("不存在Svn配置");
                }
                if (proof.getProofType().equals("SSH")) {
                    return null;
                } else {
                    String gitOrder = svnOrder(pipelineCode, fileAddress, systemType);
                    return configCommonService.process(svnAddress, gitOrder);
                }
            }
        }
        return null;
    }

    /**
     * 组装http git命令
     * @param pipelineCode 源码信息
     * @param codeDir 存放位置
     * @return 执行命令
     * @throws URISyntaxException url格式不正确
     * @throws MalformedURLException 不是https或者http
     */
    private String gitOrder(PipelineCode pipelineCode,String codeDir,int systemType) throws URISyntaxException, MalformedURLException {

        //凭证
        Proof proof = pipelineCode.getProof();
        String username= proof.getProofUsername();
        String password = proof.getProofPassword();

        //地址信息
        StringBuilder url = new StringBuilder(pipelineCode.getCodeAddress());
        String branch = pipelineCode.getCodeBranch();

        String up=username.replace("@", "%40")+":"+password+"@";
        //获取url类型
        URL urls = new URL(url.toString());
        String urlType = urls.toURI().getScheme();

        //根据不同类型拼出不同地址
        if (urlType.equals("http")){
            url.insert(7, up);
        }else {
            url.insert(8, up);
        }
        //判断是否存在分支
        String order;
        if (branch == null || branch.equals("")){
            order = url+" "+codeDir;
        }else {
            order =" -b "+branch+" "+ url+" "+codeDir;
        }

        //根据不同系统更新命令
        if (systemType == 1){
            order=".\\git.exe clone"+" " + order;
        }else {
            order="./git clone"+" " + order;
        }
        return order;
    }

    /**
     * 组装svn命令
     * @param pipelineCode 源码信息
     * @param codeDir 存放位置
     * @return 执行命令
     */
    private String svnOrder(PipelineCode pipelineCode,String codeDir,int systemType){
        //凭证
        Proof proof = pipelineCode.getProof();
        String username= proof.getProofUsername();
        String password = proof.getProofPassword();

        //地址信息
        StringBuilder url = new StringBuilder(pipelineCode.getCodeAddress());
        String branch = pipelineCode.getCodeBranch();

        String up=username.replace("@", "%40")+":"+password+"@";

        url.insert(6, up);

        //判断是否存在分支
        String order;
        if (branch == null || branch.equals("")){
            order = url+" "+codeDir;
        }else {
            order =" -b "+branch+" "+ url+" "+codeDir;
        }
        //根据不同系统更新命令
        if (systemType == 1){
            order=".\\svn.exe checkout"+" "+order;
        }else {
            order="./svn checkout"+" "+order;
        }
        return order;
    }


}