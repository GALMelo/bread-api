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
exports.Stock = void 0;
var typeorm_1 = require("typeorm");
var stock_category_entity_1 = require("./stock-category.entity");
var Stock = /** @class */ (function () {
    function Stock() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Stock.prototype, "id_stock", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return stock_category_entity_1.StockCategory; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", stock_category_entity_1.StockCategory)
    ], Stock.prototype, "category_stock", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Stock.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 100 }),
        __metadata("design:type", Number)
    ], Stock.prototype, "qty", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Stock.prototype, "dt_buy", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Stock.prototype, "dt_last_buy", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Stock.prototype, "last_buy_qty", void 0);
    Stock = __decorate([
        (0, typeorm_1.Entity)()
    ], Stock);
    return Stock;
}());
exports.Stock = Stock;
//# sourceMappingURL=stock.entity.js.map