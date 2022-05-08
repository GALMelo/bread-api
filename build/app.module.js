"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var users_module_1 = require("./users/users.module");
var dotenv = require("dotenv");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./entities/user.entity");
var products_module_1 = require("./products/products.module");
var categories_module_1 = require("./categories/categories.module");
var product_entity_1 = require("./entities/product.entity");
var category_entity_1 = require("./entities/category.entity");
var newsletter_module_1 = require("./newsletter/newsletter.module");
var newsletter_entity_1 = require("./entities/newsletter.entity");
var stock_module_1 = require("./stock/stock.module");
var stock_entity_1 = require("./entities/stock.entity");
var stock_category_module_1 = require("./stock-category/stock-category.module");
var stock_category_entity_1 = require("./entities/stock-category.entity");
dotenv.config();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.DATABASE_HOST,
                    port: 3306,
                    username: process.env.DATABASE_USER,
                    password: process.env.DATABASE_PASSWORD,
                    database: process.env.DATABASE_NAME,
                    entities: [user_entity_1.User, product_entity_1.Product, category_entity_1.Category, newsletter_entity_1.Newsletter, stock_entity_1.Stock, stock_category_entity_1.StockCategory],
                    synchronize: true,
                    logging: ['error'],
                }),
                users_module_1.UsersModule,
                products_module_1.ProductsModule,
                categories_module_1.CategoriesModule,
                newsletter_module_1.NewsletterModule,
                stock_module_1.StockModule,
                stock_category_module_1.StockCategoryModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map