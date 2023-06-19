export declare enum WorkflowStage {
    SIGNUP = "sign_up",
    LOGIN = "login_email",
    PROJECT = "project_email",
    EXPORT = "export_email"
}
export type Reminders = {
    pending: boolean;
    delay: number;
    template: string;
};
export type WorflowState = {
    [key in WorkflowStage]: {
        last_access: string;
        status: 'pending' | 'passed';
        next_stage: undefined | WorkflowStage;
        reminders: Reminders[];
    };
};
export declare enum EVENT_TYPE {
    CREATE = "create_notification",
    UPDATE_DATA = "update_data",
    SIGNUP = "signup",
    LOGGED_IN = "logged_in",
    CREATE_PROJECT = "created_project",
    EXPORT_PROJECT = "export_project",
    DELETE_USER = "delete_user",
    RENDER_JOB_FINISH = "render_job_finish",
    CONTENT_READY = "content_ready"
}
export type NotificationEvent = {
    event: EVENT_TYPE;
    userId: string;
    userEmail: string;
    displayName: string;
    newUser: boolean;
    fileName?: string;
    filesCount?: number;
    packId?: string;
    eventName?: string;
    packName?: string;
    packImage?: string;
};
