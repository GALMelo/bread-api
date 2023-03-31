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
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var products_service_1 = require("./products.service");
var create_product_dto_1 = require("../dto/create-product.dto");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
    }
    ProductsController.prototype.create = function (createProductDto) {
        return this.productsService.create(createProductDto);
    };
    ProductsController.prototype.findAll = function (query) {
        return this.productsService.findAll(query);
    };
    ProductsController.prototype.findOne = function (id) {
        return this.productsService.findOne(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)('/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "findOne", null);
    ProductsController = __decorate([
        (0, common_1.Controller)('products'),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map