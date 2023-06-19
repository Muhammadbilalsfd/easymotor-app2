import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel';
declare module 'typeorm/driver/postgres/PostgresQueryRunner' {
    interface PostgresQueryRunner {
        onRollbackCallbacks: CallableFunction[];
        startTransaction(isolationLevel?: IsolationLevel): Promise<void>;
        rollbackTransaction(): Promise<void>;
    }
}
