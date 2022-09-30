package net.tiklab.pipeline.orther.service;

import net.tiklab.pipeline.execute.model.FileTree;
import net.tiklab.pipeline.execute.model.GitCommit;

import java.util.List;

public interface PipelineWorkSpaceService {

    /**
     * 获取文件树
     * @param pipelineId 流水线id
     * @return 文件树
     */
    List<FileTree> fileTree(String userId , String pipelineId);

    /**
     * 读取文件内容
     * @param path 文件地址
     * @return 文件内容
     */
    List<String> readFile(String path);

    /**
     * 获取提交信息
     * @param pipelineId 流水线id
     * @return 提交信息
     */
    List<List<GitCommit>> getSubmitMassage(String pipelineId);


}
