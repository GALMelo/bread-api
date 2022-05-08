"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
var common_1 = require("@nestjs/common");
var StockService = /** @class */ (function () {
    function StockService() {
    }
    StockService.prototype.create = function (createStockDto) {
        return 'This action adds a new stock';
    };
    StockService.prototype.findAll = function () {
        return "This action returns all stock";
    };
    StockService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " stock");
    };
    StockService.prototype.update = function (id, updateStockDto) {
        return "This action updates a #".concat(id, " stock");
    };
    StockService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " stock");
    };
    StockService = __decorate([
        (0, common_1.Injectable)()
    ], StockService);
    return StockService;
}());
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map