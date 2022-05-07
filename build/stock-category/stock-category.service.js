"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockCategoryService = void 0;
var common_1 = require("@nestjs/common");
var StockCategoryService = /** @class */ (function () {
    function StockCategoryService() {
    }
    StockCategoryService.prototype.create = function (createStockCategoryDto) {
        return 'This action adds a new stockCategory';
    };
    StockCategoryService.prototype.findAll = function () {
        return "This action returns all stockCategory";
    };
    StockCategoryService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " stockCategory");
    };
    StockCategoryService.prototype.update = function (id, updateStockCategoryDto) {
        return "This action updates a #".concat(id, " stockCategory");
    };
    StockCategoryService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " stockCategory");
    };
    StockCategoryService = __decorate([
        (0, common_1.Injectable)()
    ], StockCategoryService);
    return StockCategoryService;
}());
exports.StockCategoryService = StockCategoryService;
//# sourceMappingURL=stock-category.service.js.map