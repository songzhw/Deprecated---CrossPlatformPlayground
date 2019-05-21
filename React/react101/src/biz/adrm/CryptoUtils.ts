import CryptoJS from "crypto-js";

export function wordArrayToByteArray(libWordArray: CryptoJS.LibWordArray) {
  let length = libWordArray.sigBytes;
  const wordArray = libWordArray.words;

  const result = [];
  let bytes = [];
  let i = 0;
  while (length > 0) {
    bytes = wordToByteArray(wordArray[i], Math.min(4, length));
    length -= bytes.length;
    result.push(bytes);
    i++;
  }
  return Array.prototype.concat.apply([], result);
}

function wordToByteArray(word: number, length: number) {
  const ba = [];
  const ff = 0xFF;
  if (length > 0) {
    ba.push(word >>> 24);
  }
  if (length > 1) {
    ba.push((word >>> 16) & ff);
  }
  if (length > 2) {
    ba.push((word >>> 8) & ff);
  }
  if (length > 3) {
    ba.push(word & ff);
  }

  return ba;
}
