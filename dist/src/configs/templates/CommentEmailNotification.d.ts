import { CommentsEmailObject } from '@/dtos';
export declare function emailNotificationTemplate(projectId: string, emailBodyHeader: string, emailBodyContent: CommentsEmailObject[], highlightInfo: string): string;
