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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const service_1 = __importDefault(require("../../service"));
require("dotenv/config");
const cityNameApi = process.env.API_WEATHER_PREFIX;
const API_KEY = process.env.API_WEATHER_KEY;
const queries = {
    getWeatherByCityName: (_, { parameter, condition }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            switch (condition) {
                case 'cityName':
                    return yield service_1.default.getCityName(`${cityNameApi}?q=${parameter}&appid=${API_KEY}`);
                case 'cityID':
                    return yield service_1.default.getCityID(`${cityNameApi}?id=${parameter}&appid=${API_KEY}`);
                case 'cityCoordinate':
                    const lat = (_a = parameter.split('/')) === null || _a === void 0 ? void 0 : _a[0];
                    const lon = (_b = parameter.split('/')) === null || _b === void 0 ? void 0 : _b[1];
                    return yield service_1.default.getCityCoordinate(`${cityNameApi}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
                case 'cityZip':
                    return yield service_1.default.getCityZip(`${cityNameApi}?zip=${parameter}&appid=${API_KEY}`);
            }
        }
        catch (err) {
            return err;
        }
    })
};
const mutations = {};
exports.resolvers = { queries, mutations };
