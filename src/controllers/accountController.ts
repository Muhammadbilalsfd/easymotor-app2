import { Express, Response, Request } from 'express';

export const setUpAccountController = function (app: Express) {
        app.get(`/activate`, activateAccount);
        app.get(`/authenticate`, isAuthenticated );
        app.get(`/account`, getAccount);
        app.get(`/authorities`, getAuthorities);
    
    }
    const activateAccount = async (_req: Request, _res: Response) => {
        // throw new InternalServerErrorException();
    };

    const isAuthenticated = async (_req: Request, _res: Response) => {
        // const user: any = req.user;
        // return user.login;
    }

    const getAccount = async (_req: Request, _res: Response) => {
    }

    const getAuthorities = async (_req: Request, _res: Response) => {
    }