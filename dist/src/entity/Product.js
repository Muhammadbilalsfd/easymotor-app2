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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
let Product = exports.Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "lastModifiedBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "lastModifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', unique: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', name: 'gross_premium', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "gross_premium", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', name: 'sales_tax', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "sales_tax", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', name: 'fed', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "fed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', name: 'admin_surcharge', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "admin_surcharge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'year_start', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "year_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'year_end', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "year_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'cc_start', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "cc_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'cc_end', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "cc_end", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)('product')
], Product);
//# sourceMappingURL=Product.js.map