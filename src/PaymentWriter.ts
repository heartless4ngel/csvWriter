import path from "path";
import { CSVWriter } from "./index";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  { id: 1, amount: 50, to: "yoshi", notes: "for design work" },
  { id: 2, amount: 75, to: "mario", notes: "for web work" },
  { id: 3, amount: 25, to: "bowser", notes: "clearing a debt" },
]);

paymentWriter.save(path.join(__dirname, "..", "data", "payment.csv"));
