"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
    { id: 1, amount: 50, to: "yoshi", notes: "for design work" },
    { id: 2, amount: 75, to: "mario", notes: "for web work" },
    { id: 3, amount: 25, to: "bowser", notes: "clearing a debt" },
]);
paymentWriter.save(path_1.default.join(__dirname, "..", "data", "payment.csv"));
//# sourceMappingURL=PaymentWriter.js.map