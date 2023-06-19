import { Request, Response, NextFunction } from 'express';
export declare function JwtAuthMiddleware(isRequired?: boolean): (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
