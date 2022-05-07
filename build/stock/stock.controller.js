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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
var common_1 = require("@nestjs/common");
var stock_service_1 = require("./stock.service");
var create_stock_dto_1 = require("../dto/create-stock.dto");
var update_stock_dto_1 = require("../dto/update-stock.dto");
var StockController = /** @class */ (function () {
    function StockController(stockService) {
        this.stockService = stockService;
    }
    StockController.prototype.create = function (createStockDto) {
        return this.stockService.create(createStockDto);
    };
    StockController.prototype.findAll = function () {
        return this.stockService.findAll();
    };
    StockController.prototype.findOne = function (id) {
        return this.stockService.findOne(+id);
    };
    StockController.prototype.update = function (id, updateStockDto) {
        return this.stockService.update(+id, updateStockDto);
    };
    StockController.prototype.remove = function (id) {
        return this.stockService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_stock_dto_1.CreateStockDto]),
        __metadata("design:returntype", void 0)
    ], StockController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StockController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StockController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_stock_dto_1.UpdateStockDto]),
        __metadata("design:returntype", void 0)
    ], StockController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StockController.prototype, "remove", null);
    StockController = __decorate([
        (0, common_1.Controller)('stock'),
        __metadata("design:paramtypes", [stock_service_1.StockService])
    ], StockController);
    return StockController;
}());
exports.StockController = StockController;
//# sourceMappingURL=stock.controller.js.map