const {
  DOMAINS,
  ALPHABET_ALL,
  ALPHABET_LOWER,
  ALPHABET_UPPER,
  NUMERIC,
} = require("./constants");

/**
 * @typedef {"lower" | "upper" | "both"} AlphabetCasing
 */

/**
 * Random float between 0.0 and 1.0 (inclusive).
 * @returns {number} Random number.
 */
function random() {
  return Math.random();
}

/**
 * Random number between min and max (inclusive).
 * @param {number} [max=Number.MAX_SAFE_INTEGER] The maximum value (inclusive).
 * @param {number} [min=Number.MIN_SAFE_INTEGER] THe minimum value (inclusive).
 * @returns {number} Random number.
 */
function number(max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER) {
  if (typeof min != "number" || typeof max != "number") {
    throw new TypeError("min and max must be a number");
  }

  return (
    Math.floor(random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

/**
 * Random natural number. (0 to 9007199254740991)
 * @returns {number} Random natural number.
 */
function natural() {
  return number(Number.MAX_SAFE_INTEGER, 0);
}

/**
 * Random negative number. (-9007199254740991 to 0)
 * @returns {number} Random negative number.
 */
function negative() {
  return number(0, Number.MIN_SAFE_INTEGER);
}

/**
 * Random string from chars.
 * @param {number} length The length of the string.
 * @param {string} [chars=ALPHABET] The characters used in the string.
 * @returns {string} Random string from chars.
 */
function string(length, chars = ALPHABET) {
  if (typeof length != "number") {
    throw new TypeError("length must be a number");
  } else if (typeof chars != "string") {
    throw new TypeError("chars must be a string");
  }

  return Array.from({ length }, () => chars[number(chars.length - 1)]).join("");
}

/**
 * Random value from array or string.
 * @param {array|string} array The array or string to choose from.
 * @returns {any} Random value.
 */
function fromArray(array) {
  if (!Array.isArray(array) && typeof array !== "string") {
    throw new TypeError("array must be an array or string");
  }

  return array[number(array.length - 1, 0)];
}

/**
 * Random letter in the alphabet.
 * @param {AlphabetCasing} [casing="lower"]
 * @returns {string} Random letter.
 */
function alphabet(casing = "lower") {
  if (typeof casing !== "string") {
    return new TypeError("casing must be a string");
  }

  switch (casing.toLowerCase()) {
    case "lower":
      return fromArray(ALPHABET_LOWER);

    case "upper":
      return fromArray(ALPHABET_UPPER);

    case "both":
      return fromArray(ALPHABET_ALL);

    default:
      throw new TypeError('casing is not "lower", "upper" or "both"');
  }
}

/**
 * Random numeric value.
 * @returns {string} Random numeric value.
 */
function numeric() {
  return fromArray(NUMERIC);
}

/**
 * Random boolean.
 * @returns {boolean} True or false.
 */
function boolean() {
  return random() >= 0.5;
}

/**
 * Random float between min and max (inclusive).
 * @param {number} max The maxiumum value (inclusive).
 * @param {number} [min=0] The minimum value (inclusive).
 * @returns {number} Random float.
 */
function float(max, min = 0) {
  return number(max, min) + random();
}

/**
 * Random domain name.
 * @returns {string} Random domain name.
 */
function domainName() {
  if (!Array.isArray(DOMAINS)) {
    throw new TypeError("domains must be an array");
  }

  return `${string(
    number(15, 3),
    "abcdefghijklmnopqrstuvwxyz1234567890-_"
  )}.${fromArray(DOMAINS)}`;
}

/**
 * Random email with domain
 * @param {string} domain The domain of the email (e.g. 'gmail.com').
 * @returns {string} Random email.
 */
function email(domain) {
  if (typeof domain != "string") {
    throw new TypeError("domain must be a string");
  }

  return string(number(12, 4)) + "@" + domain;
}

/**
 * Flips a coin.
 * @returns {string} Heads or tails.
 */
function coin() {
  return fromArray(["heads", "tails"]);
}

/**
 * Random IP address.
 * @returns {string} Random IP address.
 */
function ip() {
  return `${number(255)}.${number(255)}.${number(255)}.${number(255)}`;
}

/**
 * Shuffles array.
 * @param {array} array The array to shuffle.
 * @returns {array} Shuffled array.
 */
function shuffleArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("array must be an array");
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = (number(i)[(array[i], array[j])] = [array[j], array[i]]);
  }

  return array;
}

/**
 * Random twitter username.
 * @returns {string} Random twitter username.
 */
function twitterUser() {
  return "@" + string(number(15, 4), ALPHABET + "0123456789_");
}

/**
 * Random Date object between 0 and the time right now.
 * @returns {Date} Random date.
 */
function date() {
  return new Date(number(Date.now(), 0));
}

// colors
/**
 * Random hex color.
 * @param {boolean} [noHashtag=false] Return with a hashtag or not.
 * @returns {string} Random Hex color.
 */
function hex(noHashtag = false) {
  return (noHashtag ? "" : "#") + string(6, "abcdef1234567890");
}

/**
 * Random RGB color in the format of CSS.
 * @param {boolean} [asArray=false] Return RGB color as an array or CSS format.
 * @returns {string} Random RGB color.
 */
function rgb(asArray = false) {
  return asArray
    ? [number(255), number(255), number(255)]
    : `rgb(${number(255)}, ${number(255)}, ${number(255)})`;
}

/**
 * Random HSL color in the format of CSS.
 * @param {boolean} [asArray=false] Return HSL color as an array or CSS format.
 * @returns {string} Random HSL color.
 */
function hsl(asArray = false) {
  return asArray
    ? [number(360), number(100), number(100)]
    : `hsl(${number(360)}, ${number(100)}%, ${number(100)}%)`;
}

/**
 * Random HSV color in the format of CSS.
 * @param {boolean} [asArray=false] Return HSV color as an array or CSS format.
 * @returns {string} Random HSV color.
 */
function hsv(asArray = false) {
  return asArray
    ? [number(360), number(100), number(100)]
    : `hsv(${number(360)}, ${number(100)}%, ${number(100)}%)`;
}

/**
 * Random CMYK color in the format of CSS.
 * @param {boolean} [asArray=false] Return CMYK color as an array or CSS format.
 * @returns {string} Random CMYK color.
 */
function cmyk(asArray = false) {
  return asArray
    ? [number(100), number(100), number(100), number(100)]
    : `cmyk(${number(100)}%, ${number(100)}%, ${number(100)}%, ${number(
        100
      )}%)`;
}

module.exports = {
  random,
  number,
  natural,
  negative,
  string,
  fromArray,
  alphabet,
  numeric,
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
    hsv,
    cmyk,
  },
};
