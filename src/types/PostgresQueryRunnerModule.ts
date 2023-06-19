import { PostgresQueryRunner } from 'typeorm/driver/postgres/PostgresQueryRunner';
import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel';

declare module 'typeorm/driver/postgres/PostgresQueryRunner' {
	interface PostgresQueryRunner {
		onRollbackCallbacks: CallableFunction[];

		startTransaction(isolationLevel?: IsolationLevel): Promise<void>;
		rollbackTransaction(): Promise<void>;
	}
}

const _startTransaction = PostgresQueryRunner.prototype.startTransaction;
PostgresQueryRunner.prototype.startTransaction = async function () {
	const thisStartTransaction = _startTransaction.bind(this);
	await thisStartTransaction();
	this.onRollbackCallbacks = [];
};

const _rollbackTransaction = PostgresQueryRunner.prototype.rollbackTransaction;
PostgresQueryRunner.prototype.rollbackTransaction = async function () {
	const thisRollbackTransaction = _rollbackTransaction.bind(this);
	await thisRollbackTransaction();
	if (this.onRollbackCallbacks && this.onRollbackCallbacks.length > 0) {
		for (const callback of this.onRollbackCallbacks) {
			await callback();
		}
	}
};
