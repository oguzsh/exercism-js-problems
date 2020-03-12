export class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  isTriangle() {
    const result = this.x <= 0 || this.y <= 0 || this.z <= 0 ? false : true;
    return result;
  }

  isEquilateral() {
    const result =
      this.isTriangle() == false
        ? false
        : this.x === this.y && this.x === this.z
        ? true
        : false;

    return result;
  }

  triangleInequality() {
    const state_one = this.x + this.y >= this.z;
    const state_two = this.x + this.z >= this.y;
    const state_three = this.y + this.z >= this.x;
    const result = state_one && state_two && state_three ? true : false;
    return result;
  }

  isIsosceles() {
    const result =
      this.isTriangle() == false
        ? false
        : this.x === this.y || this.x === this.z || this.y === this.z
        ? this.triangleInequality()
          ? true
          : false
        : false;

    return result;
  }

  isScalene() {
    const result = this.triangleInequality()
      ? this.x != this.y && this.x != this.z
        ? true
        : false
      : false;

    return result;
  }
}
