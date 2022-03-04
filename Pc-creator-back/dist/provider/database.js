"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const common_1 = require("@nestjs/common");
const promise_1 = require("mysql2/promise");
let DataBase = class DataBase {
    getConexao() {
        const options = {
            host: '127.0.0.1',
            database: 'pc-creator',
            user: 'root',
            password: 'tijolao360',
            typeCast: ((field, next) => {
                if (field.type == "NEWDECIMAL") {
                    var value = field.string();
                    return (value === null) ? null : Number(value);
                }
                return next();
            })
        };
        return promise_1.createPool(options);
    }
};
DataBase = __decorate([
    common_1.Injectable()
], DataBase);
exports.DataBase = DataBase;
//# sourceMappingURL=database.js.map