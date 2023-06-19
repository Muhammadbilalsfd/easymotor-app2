// import { NotificationEvent, CommentsEmailObject, CommentsNotificationDto } from '@/dtos';
// import { NotificationWorkflow, User } from '@/entity';
// import { CopyObjectCommandOutput } from '@aws-sdk/client-s3';
// import { createClient } from 'redis';
import { Product } from '@/entity';
import { QueryRunner } from 'typeorm';

// export type RedisClient = ReturnType<typeof createClient>;

export type HealthStatus = {
	isHealthy: boolean;
	status: string;
	databaseConnection: boolean;
	jwtAuthReady: boolean;
}

export interface IHealthService {
	isDbConnected: boolean;
	isJwtAuthReady: boolean;
	getHealthStatus(): Promise<HealthStatus>;
}

export interface IProductService {
	save(product: Product): Promise<any>;
	findAll(): Promise<any>;
}

export interface IUserService {
	save(product: Product): Promise<any>;
	findAll(): Promise<any>
}

// export interface ISesService {
// 	sendEmail(email:string, subject: string, body: string): Promise<void>;
// 	sendCommentNotification(
// 		toEmail: string,
// 		emailSubject: string,
// 		projectId: string,
// 		emailBodyHeader: string,
// 		emailBodyContent: CommentsEmailObject[],
// 		highlightInfo: string
// 	): Promise<void>;
// }

// export interface IRedisService {
// 	getProjectOfflineUsers(projectId: string, userIds: string[]): Promise<string[]>;
// }

// export interface IS3Service {
// 	getPresignedUrl(s3Key: string, bucket: string, attachmentFilename?: string, expiresInSeconds?: number): Promise<string>;
// 	copyFile(srcS3Key: string, srcBucket: string, targetS3Key: string, targetBucket: string): Promise<CopyObjectCommandOutput>;
// }

// export interface IUserNotificationService {
// 	createNotification(notificationObject: NotificationEvent): Promise<void>;
// 	sendNotifications(): Promise<void>;
// 	handleUserFlow(notification: NotificationWorkflow): Promise<void>;
// 	sendPixrenderNotification(email: string, displayName: string, fileName: string | undefined, fileCount: number ): Promise<void>;
// 	sendEventReadyNotification(email: string, displayName: string, eventName: string , packName: string, packId: string, packImage: string): Promise<void>;
// }
// export interface ICommentNotificationService {
// 	createNotification(notificationObject: CommentsNotificationDto): Promise<void>;
// 	deleteNotificationByUserId(userId: string, queryRunner: QueryRunner): Promise<void> ;		
// 	sendNotifications(): Promise<void>;
// }
// export interface IPermissionService {
// 	getProjectUsers(projectId:string): Promise<string[]>;
// 	getAccessTime(projectId:string, userId:string): Promise<any>;
// 	getProjectData(projectId:string): Promise<any>;
// }