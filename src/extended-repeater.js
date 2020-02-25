module.exports = function repeater(str, options) {
    var result = '';
    options.separator           === undefined ? options.separator           = '+' : ''
    options.additionSeparator   === undefined ? options.additionSeparator   = '|' : ''
    options.repeatTimes         === undefined ? options.repeatTimes         =  1  : ''
    options.additionRepeatTimes === undefined ? options.additionRepeatTimes =  1  : ''
    options.addition            === undefined ? options.additionRepeatTimes = ''  : ''

    for (var i = 0; i < options.repeatTimes; i++) {
        result += str;
        for (var j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition;
            (j < options.additionRepeatTimes - 1) ?  result += options.additionSeparator : ''
        }
        (i < options.repeatTimes - 1) ? result += options.separator : ''
    }
    return result;
};
  