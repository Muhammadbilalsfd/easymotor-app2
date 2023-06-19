import { iocContainer } from '@/configs/inversify.config';
import e, { Express, NextFunction, Request, Response } from 'express';
import { logger } from '@/common';
import { SERVICE_TYPES } from '@/services';
import { EVENT_TYPE, NotificationEvent, WorkflowStage } from '@/dtos';
import {  IUserRepository, REPOSITORY_TYPES } from '@/repositories';
import DBConnection from '@/repositories/DBConnection';
import { User } from '@/entity';

export const setUpUserController = function (app: Express) {
	app.get(`/api/admin/users`);
	app.get(`/api/admin/users/dashboard`);
	app.get(`/api/admin/users/cnic`);

	app.put(`/api/admin/users/logo`);
	app.get(`/api/admin/users/login`);
	app.delete(`/api/admin/users/login`);
};

