module.exports = function check(str, bracketsConfig) {
  let brack = []
  for (let n = 0; n < bracketsConfig.length; n++) {
    brack.push(bracketsConfig[n].join(''))
  }
  while (brack.find((a) => str.indexOf(a) !== -1)) {
    for (let i = 0; i < brack.length; i++) {
      str = str.replaceAll(brack[i], '');
    }
  }
  return str == '';
};
