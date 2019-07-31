interface some {
  name: string;
  getName: (name: any) => {};
  flag: boolean,
}

class something implements some {
  name = 'Hello';
  flag = true;
  getName(name: any) {
    return name;
  }
}

let p = new something();
console.log(p)
