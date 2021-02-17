const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let strArray = [];

    if (typeof options.separator !== 'string') {
        options.separator = "+";
    }

    if (typeof options.additionSeparator !== 'string') {
        options.additionSeparator = "|";
    }

    if (typeof options.repeatTimes === 'undefined') {
        options.repeatTimes = 1;
    }

    if (typeof options.additionRepeatTimes === 'undefined') {
        options.additionRepeatTimes = 1;
    }

    if (options.repeatTimes >= 1) {
        for (let i = 0; i < options.repeatTimes; i++) {
            if (typeof options.addition !== 'undefined') {

                if (options.additionRepeatTimes > 1) {
                    let additionArray = [];
                    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
                        additionArray[i] = options.additionSeparator + String(options.addition);
                    }

                    strArray.push(str + String(options.addition) + additionArray.join(""));
                } else {
                    strArray.push(str + options.addition);
                }

            } else {
                strArray.push(str);
            }
        }
    }

    return strArray.join(options.separator);
};
  