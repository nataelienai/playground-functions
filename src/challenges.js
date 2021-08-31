// Desafio 1
function compareTrue(first, second) {
  if (first === true && second === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let count = 0;

  for (let value of array) {
    if (value > highest) {
      highest = value;
      count = 1;
    } else if (value === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function checkNumber(value) {
  let string = 'bug!';

  if (value % 3 === 0 && value % 5 === 0) {
    string = 'fizzBuzz';
  } else if (value % 3 === 0) {
    string = 'fizz';
  } else if (value % 5 === 0) {
    string = 'buzz';
  }
  return string;
}

function fizzBuzz(array) {
  let stringArray = [];

  for (let value of array) {
    stringArray.push(checkNumber(value));
  }
  return stringArray;
}

// Desafio 9
function encodeChar(char) {
  let encoding = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  if (encoding[char] !== undefined) {
    return encoding[char];
  }
  return char;
}

function decodeChar(char) {
  let encoding = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  if (encoding[char] !== undefined) {
    return encoding[char];
  }
  return char;
}

function encode(string) {
  let encodedString = '';
  for (let char of string) {
    encodedString += encodeChar(char);
  }
  return encodedString;
}
function decode(string) {
  let decodedString = '';
  for (let char of string) {
    decodedString += decodeChar(char);
  }
  return decodedString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
