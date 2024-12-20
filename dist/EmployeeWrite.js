"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter([
    "id",
    "name",
    "salary",
    "role",
]);
employeeWriter.addRows([
    { id: 1, name: "Mattia", salary: 50000, role: "web developer" },
    { id: 2, name: "Giada", salary: 40000, role: "digital manager" },
    { id: 3, name: "Marco", salary: 70000, role: "director" },
]);
employeeWriter.save(path_1.default.join(__dirname, "..", "data", "employee.csv"));
//# sourceMappingURL=EmployeeWrite.js.map