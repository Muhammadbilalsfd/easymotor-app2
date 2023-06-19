import pinoHttp, { HttpLogger } from 'pino-http';
import { logger } from '@/common/Logger';
import { v4 as uuidv4 } from 'uuid';

export const accessLogging = (): HttpLogger =>
	pinoHttp({
		logger,
		genReqId: function (req) {
			const reqId = req.headers['x-request-id'] as string;
			return reqId ? reqId : uuidv4();
		},
		customLogLevel: ({ statusCode }, err) => {
			if (statusCode >= 400 && statusCode < 500) return 'warn';
			if (statusCode >= 500 || err) return 'error';
			return 'info';
		},
	});
