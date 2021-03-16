/*
    This script xors a word in hex with another one also in hex.
    The result is a readable string.
    This script uses only for the challenge "ELF C++ - 0 protection" on Root-Me.
*/

function hexToString (WordInDecimalArray) {
  let strResult = ''
  for (let i = 0; i < WordInDecimalArray.length; i++) {
    strResult += String.fromCharCode(WordInDecimalArray[i])
  }
  return strResult
}

function xorHex (firstWordInHexArray, secondWordInHexArray) {
  const xorResultDecimal = []
  const lengthOfFirstWordInHexArray = firstWordInHexArray.length
  const lengthOfSecondWordInHexArray = secondWordInHexArray.length
  for (let i = 0; i < Math.max(lengthOfFirstWordInHexArray, lengthOfSecondWordInHexArray); i++) {
    xorResultDecimal.push(parseInt(firstWordInHexArray[i % lengthOfFirstWordInHexArray], 16) ^ parseInt(secondWordInHexArray[i % lengthOfSecondWordInHexArray], 16))
  }
  return xorResultDecimal
}

function xorHexToString (firstWordInHexArray, secondWordInHexArray) {
  const xorResultDecimal = xorHex(firstWordInHexArray, secondWordInHexArray)
  return hexToString(xorResultDecimal)
}

console.log(xorHexToString(['0x18', '0xd6', '0x15', '0xca', '0xfa', '0x77'], ['0x50', '0xb3', '0x67', '0xaf', '0xa5', '0x0e', '0x77', '0xa3', '0x4a', '0xa2', '0x9b', '0x01', '0x7d', '0x89', '0x61', '0xa5', '0xa5', '0x02', '0x76', '0xb2', '0x70', '0xb8', '0x89', '0x03', '0x79', '0xb8', '0x71', '0x95', '0x9b', '0x28', '0x74', '0xbf', '0x61', '0xbe', '0x96', '0x12', '0x47', '0x95', '0x3e', '0xe1', '0xa5', '0x04', '0x6c', '0xa3', '0x73', '0xac', '0x89']))
