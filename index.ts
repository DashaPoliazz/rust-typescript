import fs from "fs";

fs.readFileSync("./lines.txt")
  .toString()
  .split("\n")
  .forEach((line, idx) => {
    if (idx % 2 === 0) {
      console.log(line);
    }
  });

// Example of custom iterator
class MyIterator<T> {
  private data: T[];
  private index: number;

  constructor(data: T[]) {
    this.data = data;
    this.index = 0;
  }

  next(): { value: T | undefined; done: boolean } {
    if (this.index < this.data.length) {
      const item = this.data[this.index];
      this.index++;
      return {
        value: item,
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  }

  [Symbol.iterator](): MyIterator<T> {
    return this;
  }
}

const data = [1, 2, 3, 4, 5];
const iterator = new MyIterator(data);

for (const item of iterator) {
  console.log(item);
}
