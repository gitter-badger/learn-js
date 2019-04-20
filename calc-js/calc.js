'use strict';

/*
let inputState = [];

function onClickNum(numStr) {
    const num = Number(numStr)
  inputState.push(num)
  console.log(num)
}

const numbers = [];

function onClickPlus() {
    const number = Number(inputState.join(''))
    numbers.push(number);
    console.log(number)
    inputState = []
}

function onClickSum() {
    const number = Number(inputState.join(''))
    numbers.push(number);
    inputState = []

    let sum = 0;
    numbers.forEach((num)=>{
        sum += num;
    });

    const totalDOM = document.getElementById("total");
    totalDOM.innerText = sum;

}
*/

class Calc {
  constructor() {
    this.inputState = [];
    this.numbers = [];
  }

  inputNum(numStr) {
    const num = Number(numStr);
    this.inputState.push(num);
    console.log(num);
  }

  plusNum() {
    // this.numbers.push(Number(this.inputState.join('')));
    // console.log(this.numbers);
    // this.inputState = [];
    this.strToNumber();
  }

  subNum() {
    const minusNumber = Number(this.inputState.join('')) * -1;
    this.numbers.push(minusNumber);
  }

  mulNum() {}

  sumNum() {
    // this.numbers.push(Number(this.inputState.join('')));
    // this.inputState = [];
    this.strToNumber();
    let sum = 0;
    this.numbers.forEach(number => {
      sum += number;
    });
    const totalDOM = document.getElementById('total');
    totalDOM.innerText = sum;
  }

  strToNumber() {
    this.numbers.push(Number(this.inputState.join('')));
    this.inputState = [];
  }
}

const calc = new Calc();

function onClickNum(numStr) {
  calc.inputNum(numStr);
}

function onClickPlus() {
  calc.plusNum();
}

function onClickSub() {
  calc.subNum();
}

function onClickMul() {
  calc.mulNum();
}

function onClickDiv() {
  calc.divNum();
}

function onClickSum() {
  calc.sumNum();
}

function onClickCancel() {
  calc.cancel();
}
