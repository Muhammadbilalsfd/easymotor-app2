"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = void 0;
const inversify_1 = require("inversify");
const DBConnection_1 = __importDefault(require("@/repositories/DBConnection"));
const common_1 = require("@/common");
let HealthService = exports.HealthService = class HealthService {
    constructor() {
        this.isDbConnected = false;
        this.isJwtAuthReady = false;
    }
    async getHealthStatus() {
        if (!this.isDbConnected) {
            try {
                await DBConnection_1.default.getConnection();
            }
            catch (err) {
                common_1.logger.error({ err });
                this.isDbConnected = false;
            }
        }
        const isHealthy = this.isDbConnected && this.isJwtAuthReady;
        return {
            isHealthy: isHealthy,
            status: isHealthy ? 'HEALTHY' : 'UNHEALTHY',
            databaseConnection: this.isDbConnected,
            jwtAuthReady: this.isJwtAuthReady,
        };
    }
};
exports.HealthService = HealthService = __decorate([
    (0, inversify_1.injectable)()
], HealthService);
//# sourceMappingURL=HealthService.js.map