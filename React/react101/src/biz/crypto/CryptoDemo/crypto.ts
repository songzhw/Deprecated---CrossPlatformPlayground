import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import ECB from "crypto-js/mode-ecb";
import Base64 from "crypto-js/enc-base64";

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

export function byteArrayToWordArray(u8Array: number[]) {
  const words = [];
  let i = 0;
  const len = u8Array.length;

  while (i < len) {
    words.push(
      (u8Array[i++] << 24) |
      (u8Array[i++] << 16) |
      (u8Array[i++] << 8) |
      (u8Array[i++])
    );
  }

  return {
    sigBytes: words.length * 4,
    words
  };
}


export function arrayBufferToBase64(arrayBuffer: ArrayBuffer) {
  let base64 = "";
  const encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;

  let a;
  let b;
  let c;
  let d;
  let chunk;

  for (let i = 0; i < mainLength; i = i + 3) {
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    a = (chunk & 16515072) >> 18;
    b = (chunk & 258048) >> 12;
    c = (chunk & 4032) >> 6;
    d = chunk & 63;

    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  if (byteRemainder === 1) {
    chunk = bytes[mainLength];
    a = (chunk & 252) >> 2;
    b = (chunk & 3) << 4;
    base64 += encodings[a] + encodings[b] + "==";
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
    a = (chunk & 64512) >> 10;
    b = (chunk & 1008) >> 4;
    c = (chunk & 15) << 2;
    base64 += encodings[a] + encodings[b] + encodings[c] + "=";
  }

  return base64;
}

export const base64toBlob = (b64Data: string, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export function base64ToUint8Array(base64: string) {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

// =================

export function decryptDRMedBase64(userId: string, deviceId: string, rawKey: string, encryptedBase64: string) {
  const realKey = _getRealKey(userId, deviceId, rawKey);
  // @ts-ignore
  const decrypted = AES.decrypt(encryptedBase64, realKey, { mode: ECB, padding: Pkcs7 });
  return decrypted.toString(Utf8);
}

export function _getRealKey(userId: string, deviceId: string, rawKey: string) {
  const sha256 = SHA256(deviceId + userId);
  // @ts-ignore
  const bytes = wordArrayToByteArray(sha256);
  const start = bytes.length - 16;
  const tempBytes = [];
  for (let x = start; x < bytes.length; x++) {
    tempBytes[x - start] = bytes[x];
  }
  const aesKey = byteArrayToWordArray(tempBytes);
  // @ts-ignore
  const realKey = AES.decrypt(rawKey, aesKey, { mode: ECB, padding: CryptoJS.pad.NoPadding });
  return realKey;
}
