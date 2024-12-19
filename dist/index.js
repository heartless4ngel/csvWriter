"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------
// CSV Writer Project
//-----------------
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log("File saved to ", filename);
    }
    addRows(values) {
        let rows = values.map(v => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join(",");
    }
}
const paymentOne = {
    id: 1,
    amount: 10,
    notes: "note 1",
    to: "Mario",
};
const paymentTwo = {
    id: 2,
    amount: 20,
    notes: "note 2",
    to: "Luigi",
};
const paymentThree = {
    id: 3,
    amount: 30,
    notes: "note 3",
    to: "Peach",
};
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([paymentOne, paymentTwo, paymentThree]);
writer.save(path_1.default.join("data", "payment.csv"));
