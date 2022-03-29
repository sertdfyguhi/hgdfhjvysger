const DOMAINS = ['ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'su', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'ug', 'tv', 'us', 'tw', 'uz', 'tz', 'vc', 'ua', 'vg', 'uk', 'vn', 'uy', 'wf', 'va', 'ye', 've', 'za', 'vi', 'zw', 'vu', 'ws', 'yt', 'zm', 'com', 'net', 'xyz', 'gov', 'edu', 'org', 'info', 'help', 'io', 'app']
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Random number between min and max (inclusive).
 * @param {number} max
 * @param {number} min
 * @returns {number} random number between min and max (inclusive)
 */
function number(max, min = 0) {
  if (typeof min != 'number' || typeof max != 'number') {
    throw new TypeError('min and max must be a number')
  }
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  )
}

/**
 * Random string from chars.
 * @param {number} length
 * @param {string} chars
 * @returns {string} random string from chars
 */
function string(length, chars = ALPHABET) {
  if (typeof length != 'number') {
    throw new TypeError('length must be a number')
  } else if (typeof chars != 'string') {
    throw new TypeError('chars must be a string')
  }
  return Array.from({ length: length }, () => chars[number(chars.length - 1)])
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
  return array[number(array.length - 1)]
}

/**
 * Random alphabet.
 * @returns {string} any alphabet lowercase or uppercase
 */
function alphabet() {
  return fromArray(ALPHABET.split())
}

/**
 * Random boolean.
 * @returns {boolean} true or false
 */
function boolean() {
  return fromArray([true, false])
}

/**
 * Random float between min and max (inclusive).
 * @param {number} max
 * @param {number} min
 * @returns {number} float between min and max (inclusive)
 */
function float(max, min = 0) {
  return number(max, min) + Math.random()
}

/**
 * Random domain name.
 * @param {array} domains
 * @returns {string} domain name
 */
function domainName(domains = DOMAINS) {
  if (!Array.isArray(domains)) {
    throw new TypeError('domains must be an array')
  }
  return `${string(
    number(15, 3),
    'abcdefghijklmnopqrstuvwxyz1234567890-_'
  )}.${fromArray(domains)}`
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
  return string(number(12, 4), ALPHABET) + '@' + domain
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
    const j = (number(i)[(array[i], array[j])] = [array[j], array[i]])
  }

  return array
}

/**
 * Random twitter user.
 * @returns {string} twitter username
 */
function twitterUser() {
  return (
    '@' +
    string(
      number(15, 4),
      ALPHABET+'0123456789_'
    )
  )
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

// colors
/**
 * Random hex color.
 * @returns {string} hex color
 */
function hex() {
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
 * Random CMYK color in the format of css.
 * @returns {string} CMYK color in the format of css
 */
function cmyk() {
  return `cmyk(${number(100)}%, ${number(100)}%, ${number(100)}%, ${number(
    100
  )}%)`
}

module.exports = {
  number,
  string,
  fromArray,
  alphabet,
  boolean,
  float,
  domainName,
  email,
  coin,
  ip,
  shuffleArray,
  twitterUser,
  date,
  color: {
    hex,
    rgb,
    hsl,
    cmyk,
  },
}
