"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherData {
    static getCityName(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataByCityName = yield fetch(`${apiUrl}`);
                const dataByCityNameJSON = yield dataByCityName.json();
                if (dataByCityNameJSON.list != undefined) {
                    return [dataByCityNameJSON.list[0]];
                }
                else {
                    return [];
                }
            }
            catch (err) {
                return err;
            }
        });
    }
    static getCityID(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataByCityID = yield fetch(`${apiUrl}`);
                const dataByCityIDJSON = yield dataByCityID.json();
                if (dataByCityIDJSON.list != undefined) {
                    return [dataByCityIDJSON.list[0]];
                }
                else {
                    return [];
                }
            }
            catch (err) {
                return err;
            }
        });
    }
    static getCityCoordinate(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataByCityCoordinate = yield fetch(`${apiUrl}`);
                const dataByCityCoordinateJSON = yield dataByCityCoordinate.json();
                if (dataByCityCoordinateJSON.list != undefined) {
                    return [dataByCityCoordinateJSON.list[0]];
                }
                else {
                    return [];
                }
            }
            catch (err) {
                return err;
            }
        });
    }
    static getCityZip(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataByCityZip = yield fetch(`${apiUrl}`);
                const dataByCityZipJSON = yield dataByCityZip.json();
                if (dataByCityZipJSON.list != undefined) {
                    return [dataByCityZipJSON.list[0]];
                }
                else {
                    return [];
                }
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = WeatherData;
