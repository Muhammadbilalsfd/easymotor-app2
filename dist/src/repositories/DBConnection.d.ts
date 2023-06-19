import { Connection } from 'typeorm';
declare class DBConnection {
    private _connection;
    getConnection(): Promise<Connection>;
    destroyConnection(): Promise<void>;
}
declare const dbConnection: DBConnection;
export default dbConnection;
