"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMetric = void 0;
const prom_client_1 = require("prom-client");
const env_1 = require("@/configs/env");
const registry = new prom_client_1.Registry();
registry.setDefaultLabels({
    serviceName: env_1.SERVICE_NAME,
});
(0, prom_client_1.collectDefaultMetrics)({ register: registry });
const registerMetric = (app) => {
    app.use('/metrics', async (_, response) => {
        response.header('Content-Type', registry.contentType);
        response.end(await registry.metrics());
    });
};
exports.registerMetric = registerMetric;
//# sourceMappingURL=Metric.js.map