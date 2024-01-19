"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
    scalar JSON
    type SearchByCityName {
        main:JSON!
        weather:JSON!
        wind:JSON!
    }
`;
