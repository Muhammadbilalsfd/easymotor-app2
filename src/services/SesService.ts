// import { injectable } from 'inversify';
// import { SendEmailCommand, SendEmailCommandOutput, SESClient } from '@aws-sdk/client-ses';
// import { ISesService } from './interfaces';
// import { nullOrEmpty } from '@/utils/StringUtils';
// import { CommentsEmailObject } from '@/dtos';
// import { emailNotificationTemplate } from '@/configs/templates';

// @injectable()
// export class SesService implements ISesService {
// 	constructor(private readonly _client = new SESClient({ region: 'eu-west-1', apiVersion: '2010-12-01' })) {}

// 	async sendEmail(email:string, subject: string, body: string): Promise<void> {
		
// 		if (nullOrEmpty(body) || nullOrEmpty(subject)) return;

// 		const params = {
// 			Destination: {
// 				ToAddresses: [email],
// 			},
// 			Message: {
// 				Body: {
// 					Html: { Data: body },
// 				},
// 				Subject: { Data: subject },
// 			},
// 			Source: "PixCap <no-reply@pixcap.com>",
// 		};
// 		const command = new SendEmailCommand(params);
// 		await this._client.send(command);
// 	}
// 	async sendCommentNotification(
// 		toEmail: string,
// 		emailSubject: string,
// 		projectId: string,
// 		emailBodyHeader: string,
// 		emailBodyContent: CommentsEmailObject[],
// 		highlightInfo: string
// 	): Promise<void> {
// 		const params = {
// 			Destination: {
// 				ToAddresses: [toEmail],
// 			},
// 			Message: {
// 				Body: {
// 					Html: {
// 						Data: emailNotificationTemplate(projectId, emailBodyHeader, emailBodyContent, highlightInfo),
// 					},
// 				},
// 				Subject: { Data: emailSubject },
// 			},
// 			Source: "PixCap <no-reply@pixcap.com>",
// 		};

// 		const command = new SendEmailCommand(params);
// 		await this._client.send(command);
// 	}
// }
