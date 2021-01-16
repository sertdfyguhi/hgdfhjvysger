function randomString(length, chars) {
  if (typeof length != 'number') {
    throw new TypeError('length must be a number')
  }
  if (Array.isArray(chars) === false) {
    if (typeof chars != 'string') {
      throw new TypeError('chars must be a string')
    }
  }
  let string = ''
  for (let i = 0; i < length; i++) {
    string += letters[Math.floor(Math.random() * letters.length)]
  }
  return string
}

function randomFromArray(array) {
  if (Array.isArray(array) === false) {
    throw new TypeError('array must be an array')
  }
  const num = Math.floor(Math.random() * array.length)
  return array[num]
}

function randomNum(max, min = 0) {
  if (typeof min != 'number') {
    throw new TypeError('min must be a number')
  }
  if (typeof max != 'number') {
    throw new TypeError('max must be a number')
  }
  const num = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
  return num
}

function randomColor() {
  const chars = 'abcdef1234567890'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += chars[randomNum(chars.length)]
  }
  return color
}

module.exports.randomString = randomString;
module.exports.randomNum = randomNum;
module.exports.randomColor = randomColor;
module.exports.randomFromArray = randomFromArray;