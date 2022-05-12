"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var stock_category_entity_1 = require("../entities/stock-category.entity");
var stock_entity_1 = require("../entities/stock.entity");
var StockService = /** @class */ (function () {
    function StockService() {
    }
    StockService.prototype.create = function (createStockDto) {
        return __awaiter(this, void 0, void 0, function () {
            var stockCategory, newStock, saveStock, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(stock_category_entity_1.StockCategory).findOne({
                                id: createStockDto.category_stock_id,
                            })];
                    case 1:
                        stockCategory = _a.sent();
                        if (!stockCategory) return [3 /*break*/, 3];
                        newStock = (0, typeorm_1.getRepository)(stock_entity_1.Stock).create();
                        newStock.category_stock = stockCategory;
                        newStock.name = createStockDto.name;
                        newStock.qty = createStockDto.qty;
                        newStock.dt_last_buy = createStockDto.dt_last_buy;
                        newStock.last_buy_qty = createStockDto.last_buy_qty;
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(stock_entity_1.Stock).save(newStock)];
                    case 2:
                        saveStock = _a.sent();
                        return [2 /*return*/, saveStock];
                    case 3: throw new Error('Category not found.');
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.BAD_REQUEST,
                            error: error_1.message,
                        }, common_1.HttpStatus.BAD_REQUEST);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StockService.prototype.find = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(stock_entity_1.Stock).find({
                                relations: ['category_stock'],
                                where: Object.keys(query).length > 0 && (query.category || query.search)
                                    ? {
                                        category: query.category ? { name: query.category } : {},
                                        name: query.search ? (0, typeorm_1.Like)("%".concat(query.search, "%")) : (0, typeorm_1.Like)('%%'),
                                    }
                                    : {},
                                take: Object.keys(query).length > 0 && query.limit
                                    ? Number(query.limit)
                                    : 0,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.BAD_REQUEST,
                            error: error_2.message,
                        }, common_1.HttpStatus.BAD_REQUEST);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StockService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(stock_entity_1.Stock).findOneOrFail(id, {
                                relations: ['category_stock'],
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.BAD_REQUEST,
                            error: error_3.message,
                        }, common_1.HttpStatus.BAD_REQUEST);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StockService.prototype.update = function (id, updateStockDto) {
        try {
            return (0, typeorm_1.getRepository)(stock_entity_1.Stock).update(id, updateStockDto);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    };
    StockService.prototype.remove = function (id) {
        try {
            return (0, typeorm_1.getRepository)(stock_entity_1.Stock).delete(id);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    };
    StockService = __decorate([
        (0, common_1.Injectable)()
    ], StockService);
    return StockService;
}());
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map