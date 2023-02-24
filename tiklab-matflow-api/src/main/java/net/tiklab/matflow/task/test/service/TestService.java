package net.tiklab.matflow.task.test.service;

import net.tiklab.join.annotation.FindAll;
import net.tiklab.join.annotation.FindList;
import net.tiklab.join.annotation.FindOne;
import net.tiklab.join.annotation.JoinProvider;
import net.tiklab.matflow.pipeline.execute.model.PipelineProcess;
import net.tiklab.matflow.task.test.model.PipelineTest;

import java.util.List;

public interface TestService {

    /**
     * 测试
     * @param pipelineProcess 配置信息
     * @return 执行状态
     */
    boolean test(PipelineProcess pipelineProcess, String configId ,int taskType);

    @JoinProvider(model = PipelineTest.class)
    interface PipelineTestService {
        /**
         * 创建
         * @param pipelineTest test信息
         * @return testId
         */
        String createTest(PipelineTest pipelineTest);

        /**
         * 删除
         * @param testId testId
         */
        void deleteTest(String testId);


        /**
         * 根据配置id删除任务
         * @param configId 配置id
         */
        void deleteTestConfig(String configId);

        /**
         * 根据配置id查询任务
         * @param configId 配置id
         * @return 任务
         */
        PipelineTest findOneTestConfig(String configId);

        /**
         * 更新
         * @param pipelineTest 更新信息
         */
        void updateTest(PipelineTest pipelineTest);

        /**
         * 查询单个信息
         * @param testId testId
         * @return test信息
         */
        @FindOne
        PipelineTest findOneTest(String testId);

        /**
         * 查询所有信息
         * @return test信息集合
         */
        @FindAll
        List<PipelineTest> findAllTest();

        @FindList
        List<PipelineTest> findAllTestList(List<String> idList);
    }
}
