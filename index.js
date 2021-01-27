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
    string += chars[Math.floor(Math.random() * chars.length)]
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

function randomAlphabet() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return alphabet[randomNum(alphabet.length)]
}

function randomFromString(string) {
  if (typeof string != 'string') {
    throw new TypeError('string must be a string')
  }
  const num = Math.floor(Math.random() * string.length)
  return string[num]
}

function randomBool() {
  return randomFromArray([true, false])
}

function randomFloat(max, min = 0) {
  const num = randomNum(max, min)
  return num + Math.random()
}

function randomGender(extra = []) {
  if (Array.isArray(extra) == false) {
    throw new TypeError('extra must be a array')
  }
  extra.push('male', 'female')
  return randomFromArray(extra)
}

function randomDomain(domains = ['gov', 'com', 'xyz', 'net', 'org', 'uk', 'org', 'hk', 'edu', 'io', 'biz', 'info', 'eu', 'co', 'mil', 'es', 'tv', 'me', 'mobi', 'id', 'it', 'int', 'ru', 'cc', 'ch', 'arpa', 'de', 'help', 'am', 'ai', 'us', 'ws', 'pt', 'ca', 'be', 'md', 'fm', 'sc', 'nu', 'au']) {
  if (typeof domains != 'string') {
    if (Array.isArray(domains) == false) {
      throw new TypeError('domains must be a string or an array')
    }
  }
  if (typeof domains == 'string') {
    return randomString(randomNum(15, 3), 'abcdefghijklmnopqrstuvwxyz1234567890-_') + '.' + domains
  } else if (Array.isArray(domains) == true) {
    return randomString(randomNum(15, 3), 'abcdefghijklmnopqrstuvwxyz1234567890-_') + '.' + randomFromArray(domains)
  }
}

function randomEmail(domain) {
  if (typeof domain != 'string') {
    if (typeof domain != 'undefined') {
      throw new TypeError('domain must be a string')
    }
  }
  if (typeof domain == 'undefined') {
    domain = randomDomain()
  }
  return randomString(randomNum(12, 4), 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') + '@' + domain
}

function coinFlip() {
  return randomFromArray(['heads', 'tails'])
}

function randomFalsy() {
  return randomFromArray([false, 0, '', null, undefined, NaN])
}

function randomIP() {
  return `${randomNum(255)}.${randomNum(255)}.${randomNum(255)}.${randomNum(255)}`
}

module.exports.randomString = randomString;
module.exports.randomNum = randomNum;
module.exports.randomColor = randomColor;
module.exports.randomFromArray = randomFromArray;
module.exports.randomAlphabet = randomAlphabet;
module.exports.randomFromString = randomFromString;
module.exports.randomBool = randomBool;
module.exports.randomFloat = randomFloat;
module.exports.randomGender = randomGender;
module.exports.randomEmail = randomEmail;
module.exports.coinFlip = coinFlip;
module.exports.randomFalsy = randomFalsy;
module.exports.randomDomain = randomDomain;
module.exports.randomIP = randomIP;