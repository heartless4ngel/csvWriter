import path from "path";
import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
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

employeeWriter.save(path.join(__dirname, "..", "data", "employee.csv"));
