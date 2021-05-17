function randomString(length, chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
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

function randomColor(type = 'hex') {
  if (typeof type != 'string') {
    throw new TypeError('type must be a string')
  }
  if (type == 'hex') {
    const chars = 'abcdef1234567890'
    let color = '#'
    for (let i = 0; i < 6; i++) {
			const i = randomNum(chars.length - 1) 
      color += chars[i]
    }
    return color
  } else if (type == 'rgb') {
    return `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`
  } else if (type == 'hsl') {
    return `hsl(${randomNum(360)}, ${randomNum(100)}%, ${randomNum(100)}%)`
  } else {
    throw new TypeError('invalid type')
  }
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

function shuffleArray(array) {
  if (Array.isArray(array) == false) {
    throw new TypeError('array must be an array')
  }
  let alr = []
  let a = []
  while (true) {
    let n = randomNum(array.length - 1)
    if (!alr.includes(n)) {
      a.push(array[n])
      alr.push(n)
    }
    if (alr.length == array.length) {
      break
    }
  }
  return a
}

function randomTwitterUser() {
  return `@${randomString(randomNum(15, 4), 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_')}`
}

function randomTime(type = 24) {
  if (typeof type != 'number') {
    throw new TypeError('type must be a number')
  }
  if (type == 24) {
    let hour = String(randomNum(23))
    let min = String(randomNum(59))
    if (hour < 10) {
      hour = `0${hour}`
    }
    if (min < 10) {
      min = `0${min}`
    }
    return `${hour}:${min}`
  } else if (type == 12) {
    let min = String(randomNum(59))
    let hour = String(randomNum(12, 1))
    let ampm = randomFromArray(['a.m.', 'p.m.'])
    if (min < 10) {
      min = `0${min}`
    }
    return `${hour}:${min} ${ampm}`
  } else {
    throw new TypeError('invalid type')
  }
}

function shuffleString(string) {
  if (typeof string !== 'string') {
    throw new TypeError('string must be a string')
  }
  return ''.join(shuffleArray(string.split('')))
}

function randomPalindrome() {
  const str = randomString(randomNum(7, 1), 'abcdefghijklmnopqrstuvwxyz')
  return str + randomFromString('abcdefghijklmnopqrstuvwxyz') + str.split('').reverse().join('')
}

module.exports = {
  randomString: randomString,
  randomNum: randomNum,
  randomColor: randomColor,
  randomFromArray: randomFromArray,
  randomAlphabet: randomAlphabet,
  randomFromString: randomFromString,
  randomBool: randomBool,
  randomFloat: randomFloat,
  randomGender: randomGender,
  randomEmail: randomEmail,
  coinFlip: coinFlip,
  randomFalsy: randomFalsy,
  randomDomain: randomDomain,
  randomIP: randomIP,
  shuffleArray: shuffleArray,
  randomTwitterUser: randomTwitterUser,
  randomTime: randomTime,
  shuffleString: shuffleString,
  randomPalindrome: randomPalindrome,
}
