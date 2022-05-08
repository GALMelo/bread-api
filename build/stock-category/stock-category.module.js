"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockCategoryModule = void 0;
var common_1 = require("@nestjs/common");
var stock_category_service_1 = require("./stock-category.service");
var stock_category_controller_1 = require("./stock-category.controller");
var StockCategoryModule = /** @class */ (function () {
    function StockCategoryModule() {
    }
    StockCategoryModule = __decorate([
        (0, common_1.Module)({
            controllers: [stock_category_controller_1.StockCategoryController],
            providers: [stock_category_service_1.StockCategoryService]
        })
    ], StockCategoryModule);
    return StockCategoryModule;
}());
exports.StockCategoryModule = StockCategoryModule;
//# sourceMappingURL=stock-category.module.js.map