import { Registry, collectDefaultMetrics } from 'prom-client';
import { Express } from 'express';
import { SERVICE_NAME } from '@/configs/env';

// Create a Registry which registers the metrics
const registry = new Registry();

// Add a default label which is added to all metrics
registry.setDefaultLabels({
	serviceName: SERVICE_NAME,
});

// Enable the collection of default metrics
collectDefaultMetrics({ register: registry });

// Return all metrics the Prometheus exposition format
export const registerMetric = (app: Express): void => {
	app.use('/metrics', async (_, response) => {
		response.header('Content-Type', registry.contentType);
		response.end(await registry.metrics());
	});
};
