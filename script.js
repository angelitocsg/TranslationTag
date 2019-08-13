function prepareWords(words) {
  var tag = "";
  for (i = 0; i < words.length; i++) {
    word = removeInvalidChars(words[i]);
    tag += capitalizeFirstLetter(word);
  }
  return tag;
}

function removeInvalidChars(word) {
  newWord = word;
  newWord = newWord.replace(/\{0\}/g, '_');
  newWord = newWord.replace(/\{1\}/g, '_');
  newWord = newWord.replace(/\{2\}/g, '_');
  newWord = newWord.replace(/\{3\}/g, '_');
  newWord = newWord.replace(/\{4\}/g, '_');
  newWord = newWord.replace(/\./g, '');
  newWord = newWord.replace(/\,/g, '');
  newWord = newWord.replace(/\//g, '');
  newWord = newWord.replace(/\{/g, '');
  newWord = newWord.replace(/\}/g, '');
  newWord = newWord.replace(/\[/g, '');
  newWord = newWord.replace(/\]/g, '');
  newWord = newWord.replace(/\(/g, '');
  newWord = newWord.replace(/\)/g, '');
  newWord = newWord.replace(/\'/g, '');
  newWord = newWord.replace(/\"/g, '');
  newWord = newWord.replace(/\:/g, '');
  newWord = newWord.replace(/\|/g, '');
  newWord = newWord.replace(/\!/g, '');
  newWord = newWord.replace(/\?/g, '');
  return removerAcentos(newWord);
}

function removerAcentos(newStringComAcento) {
  var string = newStringComAcento;
  var mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    A: /[\xC0-\xC6]/g,
    e: /[\xE8-\xEB]/g,
    E: /[\xC8-\xCB]/g,
    i: /[\xEC-\xEF]/g,
    I: /[\xCC-\xCF]/g,
    o: /[\xF2-\xF6]/g,
    O: /[\xD2-\xD6]/g,
    u: /[\xF9-\xFC]/g,
    U: /[\xD9-\xDC]/g,
    c: /\xE7/g,
    C: /\xC7/g,
    n: /\xF1/g,
    N: /\xD1/g
  };

  for (var letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }

  return string;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}