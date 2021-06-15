let lastOperand = 0;
let operation = null;

let currentValue = false;

const inputWindow = document.getElementById('inputWindow');
const history = document.getElementById('history');

document.getElementById('btn_1').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `1`;
});

document.getElementById('btn_2').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `2`;
});

document.getElementById('btn_3').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `3`;
});

document.getElementById('btn_4').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `4`;
});

document.getElementById('btn_5').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `5`;
});

document.getElementById('btn_6').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `6`;
});

document.getElementById('btn_7').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `7`;
});

document.getElementById('btn_8').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `8`;
});

document.getElementById('btn_9').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `9`;
});

document.getElementById('btn_0').addEventListener('click', function () {
  if (currentValue || inputWindow.value[0] == '0') {
    inputWindow.value = '';
    currentValue = false;
  }
  inputWindow.value += `0`;
});

document.getElementById('btn_sum').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = `+`;
  inputWindow.value = ``;
});

document.getElementById('btn_def').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = `-`;
  inputWindow.value = ``;
});

document.getElementById('btn_mult').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = `*`;
  inputWindow.value = ``;
});

document.getElementById('btn_divis').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = `/`;
  inputWindow.value = ``;
});

document.getElementById('btn_root').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = `√`;
  inputWindow.value = ``;
});

document.getElementById('btn_calc').addEventListener('click', function () {
  secondOperand = inputWindow.value;
  currentValue = true;
  if (operation === `+`) {
    const result = lastOperand + parseInt(inputWindow.value);

    inputWindow.value = result;
  }
  if (operation === `-`) {
    const result = lastOperand - parseInt(inputWindow.value);

    inputWindow.value = result;
  }
  if (operation === `*`) {
    const result = lastOperand * parseInt(inputWindow.value);

    inputWindow.value = result;
  }
  if (operation === `/`) {
    const result = lastOperand / parseInt(inputWindow.value);

    inputWindow.value = result;
  }

  if (operation === `√`) {
    const result = Math.sqrt(lastOperand);

    inputWindow.value = result;
  }
  history.value += lastOperand + operation + secondOperand + `=` + inputWindow.value + `\n`;
  operation = null;
  lastOperand = 0;
  secondOperand = 0;
});

document.getElementById('btn_clr').addEventListener('click', function () {
  lastOperand = 0;
  operation = null;
  inputWindow.value = '0';
});

document.getElementById('btn_unar').addEventListener('click', function () {
  if (inputWindow.value.includes('-')) {
    inputWindow.value = inputWindow.value.replace('-', '');
  } else {
    inputWindow.value = '-' + inputWindow.value;
  }
});
