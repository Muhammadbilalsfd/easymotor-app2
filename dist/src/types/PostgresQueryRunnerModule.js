"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostgresQueryRunner_1 = require("typeorm/driver/postgres/PostgresQueryRunner");
const _startTransaction = PostgresQueryRunner_1.PostgresQueryRunner.prototype.startTransaction;
PostgresQueryRunner_1.PostgresQueryRunner.prototype.startTransaction = async function () {
    const thisStartTransaction = _startTransaction.bind(this);
    await thisStartTransaction();
    this.onRollbackCallbacks = [];
};
const _rollbackTransaction = PostgresQueryRunner_1.PostgresQueryRunner.prototype.rollbackTransaction;
PostgresQueryRunner_1.PostgresQueryRunner.prototype.rollbackTransaction = async function () {
    const thisRollbackTransaction = _rollbackTransaction.bind(this);
    await thisRollbackTransaction();
    if (this.onRollbackCallbacks && this.onRollbackCallbacks.length > 0) {
        for (const callback of this.onRollbackCallbacks) {
            await callback();
        }
    }
};
//# sourceMappingURL=PostgresQueryRunnerModule.js.map