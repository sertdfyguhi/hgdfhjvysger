/**
 * Random number from max to min.
 * @param {number} max 
 * @param {number} min 
 * @returns {number} random number from max to min
 */
function number(max, min = 0) {
  if (typeof min != 'number' || typeof max != 'number') {
    throw new TypeError('min and max must be a number')
  }
  return Math.floor(
    Math.random() * (
      Math.floor(max) - Math.ceil(min) + 1
    )
  ) + Math.ceil(min)
}

/**
 * Random string from chars.
 * @param {number} length 
 * @param {string} chars 
 * @returns {string} random string from chars
 */
function string(length, chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  if (typeof length != 'number') {
    throw new TypeError('length must be a number')
  } else if (typeof chars != 'string') {
    throw new TypeError('chars must be a string')
  }
  return Array.from({ length: length }, () => chars[number(chars.length-1)])
}

/**
 * Random value from array.
 * @param {array} array 
 * @returns {any} random value from array
 */
function fromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('array must be an array')
  }
  return array[number(array.length-1)]
}

/**
 * Random hex color.
 * @returns {string} hex color
 */
function hexColor() {
  return '#' + string(6, 'abcdef1234567890')
}

/**
 * Random RGB color in the format of css.
 * @returns {string} RGB color in the format of css
 */
function rgb() {
  return `rgb(${number(255)}, ${number(255)}, ${number(255)})`
}

/**
 * Random HSL color in the format of css.
 * @returns {string} HSL color in the format of css
 */
function hsl() {
  return `hsl(${number(359)}, ${number(100)}%, ${number(100)}%)`
}

/**
 * Random alphabet.
 * @returns {string} any alphabet lowercase or uppercase
 */
function alphabet() {
  return fromArray('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split())
}

/**
 * Random boolean.
 * @returns {boolean} true or false
 */
function boolean() {
  return fromArray([true, false])
}

/**
 * Random float from min to max.
 * @param {number} max 
 * @param {number} min 
 * @returns {number} float from min to max
 */
function float(max, min = 0) {
  return number(max, min) + Math.random()
}

/**
 * Random domain name.
 * @param {array} domains 
 * @returns {string} domain name
 */
function domainName(domains = ['gov', 'com', 'xyz', 'net', 'org', 'uk', 'org', 'hk', 'edu', 'io', 'biz', 'info', 'eu', 'co', 'mil', 'es', 'tv', 'me', 'mobi', 'id', 'it', 'int', 'ru', 'cc', 'ch', 'arpa', 'de', 'help', 'am', 'ai', 'us', 'ws', 'pt', 'ca', 'be', 'md', 'fm', 'sc', 'nu', 'au']) {
  if (!Array.isArray(domains)) {
    throw new TypeError('domains must be an array')
  }
  return `${string(number(15, 3), 'abcdefghijklmnopqrstuvwxyz1234567890-_')}.${fromArray(domains)}`
}

/**
 * Random email with domain 
 * @param {string} domain 
 * @returns {string} email
 */
function email(domain) {
  if (typeof domain != 'string') {
    throw new TypeError('domain must be a string')
  }
  return string(number(12, 4), 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') + '@' + domain
}

/**
 * Flips a coin.
 * @returns {string} heads or tails
 */
function coin() {
  return fromArray(['heads', 'tails'])
}
/**
 * Random IP address.
 * @returns {string} ip address
 */
function ip() {
  return `${number(255)}.${number(255)}.${number(255)}.${number(255)}`
}

/**
 * Shuffles array.
 * @param {array} array 
 * @returns {array} array
 */
function shuffleArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('array must be an array')
  }
  for (let i = array.length - 1; i > 0; i--) {
    const j = number(i)
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

/**
 * Random twitter user.
 * @returns {string} twitter username
 */
function twitterUser() {
  return `@${string(number(15, 4), 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_')}`
}

/**
 * Random Date object between 0 and the time right now.
 * @param {number} max
 * @param {number} min
 * @returns {Date} date object
 */
function date() {
  return new Date(number(Date.now(), 0))
}

module.exports = {
  number,
  string,
  fromArray,
  hexColor,
  rgb,
  hsl,
  alphabet,
  boolean,
  float,
  domainName,
  email,
  coin,
  ip,
  shuffleArray,
  twitterUser,
  date
}