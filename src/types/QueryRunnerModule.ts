declare module 'typeorm/query-runner/QueryRunner' {
	interface QueryRunner {
		onRollbackCallbacks?: any[];
	}
}
