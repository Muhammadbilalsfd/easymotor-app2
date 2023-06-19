"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const inversify_1 = require("inversify");
const entity_1 = require("@/entity");
const decorators_1 = require("@/decorators");
const DBConnection_1 = __importDefault(require("./DBConnection"));
let UserRepository = exports.UserRepository = class UserRepository {
    async save(user, queryRunner) {
        const now = new Date().toISOString();
        const userRepository = await this._getUserRepository(queryRunner);
        return await userRepository.save(user);
    }
    async findAll(_userId, _queryRunner) {
        return;
    }
    async _getUserRepository(queryRunner) {
        if (queryRunner) {
            return queryRunner.manager.getRepository(entity_1.User);
        }
        else {
            const connection = await DBConnection_1.default.getConnection();
            return connection.getRepository(entity_1.User);
        }
    }
};
__decorate([
    decorators_1.connectionCheck,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserRepository.prototype, "save", null);
__decorate([
    decorators_1.connectionCheck,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserRepository.prototype, "findAll", null);
exports.UserRepository = UserRepository = __decorate([
    (0, inversify_1.injectable)()
], UserRepository);
//# sourceMappingURL=UserRepository.js.map