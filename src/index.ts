import { appendFileSync } from "fs";

export class CSVWriter<T> {
  private csv: string;

  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(",") + "\n";
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";
    console.log("File saved to ", filename);
  }

  addRows(values: T[]): void {
    let rows = values.map(v => this.formatRow(v));
    this.csv += rows.join("\n");

    console.log(this.csv);
  }

  private formatRow(value: T): string {
    return this.columns.map(col => value[col]).join(",");
  }
}
