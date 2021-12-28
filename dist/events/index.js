"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ready_1 = __importDefault(require("./ready"));
const interaction_create_1 = __importDefault(require("./interaction-create"));
exports.default = [
    ready_1.default,
    interaction_create_1.default
];
