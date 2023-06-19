import { SERVICE_NAME } from '@/configs';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import pino, { Logger } from 'pino';

const { ENV = 'local', DISABLE_CLOUDWATCH } = process.env;

// ONLY - DEV|TEST|PROD
// child process to push log to cloudwatch
// NOTE: Prevent signals from propagating to child process
// https://stackoverflow.com/questions/41774895/prevent-signals-from-propagating-to-child-process-nodejs
//
// TODO:
// There is a bug when running local with nodemon
// When nodemon is killed, it auto kill child process
// Consider stop nodemon killing child process since parent process already handled it
// export const cloudwatchStream =
// 	DISABLE_CLOUDWATCH === 'true' || ENV === 'local'
// 		? undefined
// 		: spawn('npx', ['pino-cloudwatch', '--group', `${SERVICE_NAME}-${ENV}`, '--stream', 'log', '--aws_region', AWS_REGION], { detached: true });
// if (cloudwatchStream) {
// 	cloudwatchStream.unref();
// 	cloudwatchStream.stdout.pipe(process.stdout);
// 	cloudwatchStream.stderr.pipe(process.stdout);
// }

// const transform = {
// 	write: (msg: string) => {
// 		if (!cloudwatchStream) {
// 			process.stdout.write(msg);
// 		} else {
// 			(cloudwatchStream as ChildProcessWithoutNullStreams).stdin.write(`${msg}\n`);
// 		}
// 	},
// };

let logger: Logger;

if (ENV === 'local') {
	logger = pino(
		{
			name: SERVICE_NAME,
			level: 'trace',
			redact: ['data.Body', 'err.config.span', 'req.headers.cookie', 'req.headers.authorization'],
			prettyPrint: {
				colorize: true,
				translateTime: true,
			},
		}
		// transform
	);
} else {
	logger = pino(
		{
			name: SERVICE_NAME,
			level: 'info',
			redact: ['data.Body', 'err.config.span', 'req.headers.cookie', 'req.headers.authorization'],
		}
		// transform
	);
}

export { logger };
