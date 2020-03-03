export class Matrix {
  constructor(matrixTable) {
    this.table = matrixTable
      .split("\n")
      .map(row => row.split(" ").map(i => Number(i)));
  }

  get rows() {
    return this.table;
  }

  get columns() {
    const columns = this.table[0].map((input, index) =>
      this.table.map(row => row[index])
    );
    return columns;
  }
}
