import { appendFileSync } from "fs";
import path from "path";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ("id" | "amount" | "to" | "notes")[];

class CSVWriter {
  private csv: string;

  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(",") + "\n";
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";
    console.log("File saved to ", filename);
  }

  addRows(values: Payment[]): void {
    let rows = values.map(v => this.formatRow(v));
    this.csv += rows.join("\n");

    console.log(this.csv);
  }

  private formatRow(p: Payment): string {
    return this.columns.map(col => p[col]).join(",");
  }
}

const paymentOne: Payment = {
  id: 1,
  amount: 10,
  notes: "note 1",
  to: "Mario",
};

const paymentTwo: Payment = {
  id: 2,
  amount: 20,
  notes: "note 2",
  to: "Luigi",
};

const paymentThree: Payment = {
  id: 3,
  amount: 30,
  notes: "note 3",
  to: "Peach",
};

const writer = new CSVWriter(["id", "amount", "to", "notes"]);

writer.addRows([paymentOne, paymentTwo, paymentThree]);
writer.save(path.join("data", "payment.csv"));
