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
exports.StockCategoryController = void 0;
var common_1 = require("@nestjs/common");
var stock_category_service_1 = require("./stock-category.service");
var create_stock_category_dto_1 = require("../dto/create-stock-category.dto");
var update_stock_category_dto_1 = require("../dto/update-stock-category.dto");
var StockCategoryController = /** @class */ (function () {
    function StockCategoryController(stockCategoryService) {
        this.stockCategoryService = stockCategoryService;
    }
    StockCategoryController.prototype.create = function (createStockCategoryDto) {
        return this.stockCategoryService.create(createStockCategoryDto);
    };
    StockCategoryController.prototype.findAll = function () {
        return this.stockCategoryService.findAll();
    };
    StockCategoryController.prototype.update = function (id, updateStockCategoryDto) {
        return this.stockCategoryService.update(+id, updateStockCategoryDto);
    };
    StockCategoryController.prototype.remove = function (id) {
        return this.stockCategoryService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_stock_category_dto_1.CreateStockCategoryDto]),
        __metadata("design:returntype", void 0)
    ], StockCategoryController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StockCategoryController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_stock_category_dto_1.UpdateStockCategoryDto]),
        __metadata("design:returntype", void 0)
    ], StockCategoryController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StockCategoryController.prototype, "remove", null);
    StockCategoryController = __decorate([
        (0, common_1.Controller)('stock-category'),
        __metadata("design:paramtypes", [stock_category_service_1.StockCategoryService])
    ], StockCategoryController);
    return StockCategoryController;
}());
exports.StockCategoryController = StockCategoryController;
//# sourceMappingURL=stock-category.controller.js.map