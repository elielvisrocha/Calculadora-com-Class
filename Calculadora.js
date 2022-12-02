class Calculator {
    constructor(firstValue, secondValue) {
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }
    soma() {
        return +this.firstValue + +this.secondValue;
    };

    subtracao() {
        return +this.firstValue - +this.secondValue;
    };

};

export default Calculator;