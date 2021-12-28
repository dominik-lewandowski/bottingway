"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ping_1 = __importDefault(require("./ping"));
const server_1 = __importDefault(require("./server"));
const user_1 = __importDefault(require("./user"));
exports.default = [
    ping_1.default,
    server_1.default,
    user_1.default
];
