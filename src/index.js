module.exports = function toReadable(number) {
    let digitInterpretation = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let numberString = String(number);
    let strNumber = "";
    switch (numberString.length) {
        case 1:
            strNumber = digitInterpretation[numberString[0]];
            break;
        case 2:
            if (numberString[0] == "1" || numberString[1] == "0") {
                strNumber = digitInterpretation[numberString];
            } else {
                strNumber =
                    digitInterpretation[numberString[0] + "0"] +
                    " " +
                    digitInterpretation[numberString[1]];
            }
            break;
        case 3:
            strNumber = digitInterpretation[numberString[0]] + " hundred ";
            if (numberString.slice(1) === "00") {
                strNumber = strNumber.trim();
            } else if (numberString.slice(1).endsWith("0")) {
                strNumber =
                    strNumber + digitInterpretation[numberString.slice(1)];
            } else if (numberString[1] == "1" || numberString[1] == "0") {
                if (numberString.slice(1).startsWith("0")) {
                    strNumber =
                        strNumber + digitInterpretation[numberString[2]];
                } else {
                    strNumber =
                        strNumber + digitInterpretation[numberString.slice(1)];
                }
            } else {
                strNumber =
                    strNumber +
                    digitInterpretation[numberString[1] + "0"] +
                    " " +
                    digitInterpretation[numberString[2]];
            }
            break;
    }
    return strNumber;
};
