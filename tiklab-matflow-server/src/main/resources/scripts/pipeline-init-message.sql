INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`, `content`, `link`, `bgroup`) VALUES ('MES_TEM_PIPELINE_CREATE',  'PIPELINE', 'site', '流水线创建信息', '<span style=\"color: #5d70ea\">${userName}</span>\n<span style=\"padding: 0 5px\">创建</span>\n<span style=\"color: #5d70ea\">${pipelineName}</span>', '/index/task/${pipelineId}/survey', 'matflow');
INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`,  `content`,  `link`, `bgroup`) VALUES ('MES_TEM_PIPELINE_DELETE',  'PIPELINE', 'site', '流水线删除信息','<span style=\"color: #5d70ea\">${userName}</span>\n<span style=\"padding: 0 5px\">删除流水线</span>\n<span style=\"color: #5d70ea\">${pipelineName}</span>', '/index/task/${pipelineId}/survey', 'matflow');
INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`,`content`,  `link`, `bgroup`) VALUES ('MES_TEM_PIPELINE_EXEC',  'PIPELINERUN', 'site', '流水线执行信息',  '<span  style=\"color: #5d70ea\">${userName}</span>\n<span style=\"padding: 0 5px\">执行</span>\n<span style=\"color: #5d70ea\">${pipelineName}</span>', '/index/task/${pipelineId}/structure', 'matflow');
INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`, `content`,  `link`, `bgroup`) VALUES ('MES_TEM_PIPELINE_RUN',  '07d0194bd6e2a8eb730f1240d050c964', 'site', '流水线运行信息',  '<span style=\"color: #5d70ea\">${pipelineName}</span>\n<span style=\"padding-left: 5px\">执行${message}</span>\n', '/index/task/${pipelineId}/structure', 'matflow');


INSERT INTO `pcs_mec_message_type` (`id`, `name`, `description`, `bgroup`) VALUES ('MES_PIPELINE_CREATE', '流水线创建消息', '流水线创建消息', 'matflow');
INSERT INTO `pcs_mec_message_type` (`id`, `name`, `description`, `bgroup`) VALUES ('MES_PIPELINE_DELETE', '流水线删除消息', '流水线删除消息', 'matflow');
INSERT INTO `pcs_mec_message_type` (`id`, `name`, `description`, `bgroup`) VALUES ('MES_PIPELINE_RUN', '流水线运行消息', '流水线运行消息', 'matflow');
INSERT INTO `pcs_mec_message_type` (`id`, `name`, `description`, `bgroup`) VALUES ('MES_PIPELINE_UPDATE', '流水线更新消息', '流水线更新消息', 'matflow');


INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`, `content`, `link`, `bgroup`) VALUES ('0eb63efc2afb2c42922a5f4eb40322ee', 'MES_PIPELINE_DELETE', 'site', '流水线', '<span style=\"color: #5d70ea\">${userName}</span>\n<span style=\"padding: 0 5px\">删除流水线</span>\n<span style=\"color: #5d70ea\">${pipelineName}</span>', '/index/task/${pipelineId}/survey', 'matflow');
INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`, `content`, `link`, `bgroup`) VALUES ('4875a1e398934a21c9d05a552e71a88c', 'MES_PIPELINE_RUN', 'site', '运行', '<span style=\"color: #5d70ea\">${pipelineName}</span>\n<span style=\"padding-left: 5px\">执行${message}</span>', '/index/task/${pipelineId}/structure', 'matflow');
INSERT INTO `pcs_mec_message_template` (`id`, `msg_type_id`, `msg_send_type_id`, `title`, `content`, `link`, `bgroup`) VALUES ('c87c723ac6c75958290f37405804cd7b', 'MES_PIPELINE_CREATE', 'site', '流水线', '<span style=\"color: #5d70ea\">${userName}</span>\n<span style=\"padding: 0 5px\">创建</span>\n<span style=\"color: #5d70ea\">${pipelineName}</span>', '/index/task/${pipelineId}/survey', 'matflow');


INSERT INTO `pcs_mec_message_notice_connect` (`id`, `message_notice_id`, `type`, `type_value`) VALUES ('5b1d3e89ac4f374e620e691983761919', '1f9b3e1aecc3a622b28313a19d26edab', 7, '1');
INSERT INTO `pcs_mec_message_notice_connect` (`id`, `message_notice_id`, `type`, `type_value`) VALUES ('a0342fa4091519fe404aff5d9b0730a2', '1f9b3e1aecc3a622b28313a19d26edab', 6, '111111');


INSERT INTO `pcs_mec_message_notice` (`id`, `message_type_id`, `type`, `bgroup`, `message_send_type_id`) VALUES ('MES_PLAN', 'MES_PIPELINE_CREATE', 1, 'matflow', 'dingding,email,qywechat,site');

INSERT INTO `pcs_mec_message_notice_connect` (`id`, `message_notice_id`, `type`, `type_value`) VALUES ('aeb9636adf41fbf64780e0c981495aab', 'MES_PLAN', 7, '1');

















