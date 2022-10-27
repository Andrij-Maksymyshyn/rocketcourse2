//Task 1

const numToStr = (num) => {
  let str = (num + "").split("");

  for (let i = 0; i < str.length; i += 1) {
    str[i] = str[i] + "0".repeat(str.length - i - 1);
  }

  console.log(str.join(" + "));
};

numToStr(5554);
