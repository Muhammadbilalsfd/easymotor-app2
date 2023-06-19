// import { injectable } from 'inversify';
// import {
// 	CopyObjectCommand,
// 	CopyObjectCommandInput,
// 	CopyObjectCommandOutput,
// 	GetObjectCommand,
// 	GetObjectCommandInput,
// 	S3Client,
// } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
// import { IS3Service } from './interfaces';
// import { logger } from '@/common/Logger';
// import { AWS_REGION } from '@/configs';

// @injectable()
// export class S3Service implements IS3Service {
// 	private _client: S3Client;

// 	constructor() {
// 		this._client = new S3Client({ apiVersion: '2006-03-01', region: AWS_REGION });
// 	}

// 	async getPresignedUrl(s3Key: string, bucket: string, attachmentFilename?: string, expiresInSeconds = 1800): Promise<string> {
// 		let responseContentDisposition;

// 		if (attachmentFilename) responseContentDisposition = `attachment; filename="${attachmentFilename}"`;

// 		const getParams: GetObjectCommandInput = {
// 			Bucket: bucket,
// 			Key: s3Key,
// 			ResponseContentDisposition: responseContentDisposition || undefined,
// 		};
// 		const command = new GetObjectCommand(getParams);
// 		try {
// 			return getSignedUrl(this._client, command, { expiresIn: expiresInSeconds });
// 		} catch (err) {
// 			logger.error({ err }, 'getPresignedUrl Error');
// 			throw err;
// 		}
// 	}

// 	async copyFile(srcS3Key: string, srcBucket: string, targetS3Key: string, targetBucket: string): Promise<CopyObjectCommandOutput> {
// 		const params: CopyObjectCommandInput = {
// 			Bucket: targetBucket,
// 			Key: targetS3Key,
// 			CopySource: `${srcBucket}/${srcS3Key}`,
// 		};
// 		const command = new CopyObjectCommand(params);
// 		try {
// 			return await this._client.send(command);
// 		} catch (err) {
// 			logger.error({ err }, 'copyFile Error');
// 			throw err;
// 		}
// 	}
// }
