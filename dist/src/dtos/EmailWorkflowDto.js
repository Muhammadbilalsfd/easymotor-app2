"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_TYPE = exports.WorkflowStage = void 0;
var WorkflowStage;
(function (WorkflowStage) {
    WorkflowStage["SIGNUP"] = "sign_up";
    WorkflowStage["LOGIN"] = "login_email";
    WorkflowStage["PROJECT"] = "project_email";
    WorkflowStage["EXPORT"] = "export_email";
})(WorkflowStage || (exports.WorkflowStage = WorkflowStage = {}));
var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["CREATE"] = "create_notification";
    EVENT_TYPE["UPDATE_DATA"] = "update_data";
    EVENT_TYPE["SIGNUP"] = "signup";
    EVENT_TYPE["LOGGED_IN"] = "logged_in";
    EVENT_TYPE["CREATE_PROJECT"] = "created_project";
    EVENT_TYPE["EXPORT_PROJECT"] = "export_project";
    EVENT_TYPE["DELETE_USER"] = "delete_user";
    EVENT_TYPE["RENDER_JOB_FINISH"] = "render_job_finish";
    EVENT_TYPE["CONTENT_READY"] = "content_ready";
})(EVENT_TYPE || (exports.EVENT_TYPE = EVENT_TYPE = {}));
//# sourceMappingURL=EmailWorkflowDto.js.map