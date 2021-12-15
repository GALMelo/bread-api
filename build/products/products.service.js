"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
var common_1 = require("@nestjs/common");
var ProductsService = /** @class */ (function () {
    function ProductsService() {
    }
    ProductsService.prototype.create = function (createProductDto) {
        return 'This action adds a new product';
    };
    ProductsService.prototype.findAll = function () {
        return "This action returns all products";
    };
    ProductsService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " product");
    };
    ProductsService.prototype.update = function (id, updateProductDto) {
        return "This action updates a #".concat(id, " product");
    };
    ProductsService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " product");
    };
    ProductsService = __decorate([
        (0, common_1.Injectable)()
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map