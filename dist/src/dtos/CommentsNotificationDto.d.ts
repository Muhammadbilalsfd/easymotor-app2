export type CommentDto = {
    commentId: string;
    comment: string;
    parentCommentId: string;
    parentSequenceId: number;
    sequenceId: number;
};
export declare enum CommentsNotificationType {
    THREAD = "Thread",
    REPLY = "Reply",
    MENTION = "Mention"
}
export type CommentsNotificationDto = {
    projectId: string;
    userId: string;
    comment: CommentDto;
    notificationType: CommentsNotificationType;
    action: 'add' | 'edit' | 'delete';
    recipients: string[];
};
export declare enum CommentsObjectType {
    THREAD = "Thread",
    REPLY = "Reply"
}
export type CommentsEmailObject = {
    userId: string;
    commentData: string;
    commentType: CommentsObjectType;
    displayName?: string;
    userEmail?: string;
    userAvatar?: string;
    replies?: CommentsEmailObject[];
};
export type CommentsEmailObjectList = {
    [commentId: string]: CommentsEmailObject;
};
export declare enum HighlightItemType {
    PARENT = "parent",
    CHILD = "child",
    BOTH = "both"
}
export type HighlightInfoValue = {
    type: HighlightItemType;
    replies?: number[];
};
export type HighlightInfo = {
    [sequenceNumber: string]: HighlightInfoValue;
};
export type CommentsEmailBody = {
    userId: string;
    projectId: string;
    emailTo?: string;
    emailSubject?: string;
    type?: CommentsNotificationType | 'Conversation';
    emailBodyHeader?: string;
    highlightInfo: HighlightInfo;
    emailBodyContent: CommentsEmailObjectList;
};
