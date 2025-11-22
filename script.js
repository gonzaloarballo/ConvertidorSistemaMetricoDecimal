class Converter {
    constructor(){
        this.units = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    };

    getInput() {
        return Number(document.querySelector('#fromInput').value);
    }

    getIndexes() {
        let fromIndex = this.units.indexOf(document.querySelector('#fromUnit').value);
        let toIndex = this.units.indexOf(document.querySelector('#toUnit').value);
        return { fromIndex, toIndex };
    }

    convert(value, fromIndex, toIndex) {
        const difference = Math.abs(fromIndex - toIndex);
        return fromIndex < toIndex
            ? value / (10 ** difference)
            : value * (10 ** difference);
    }

    run() {
        const input = this.getInput();
        const { fromIndex, toIndex } = this.getIndexes();
        const result = this.convert(input, fromIndex, toIndex);
        document.querySelector('#toVisor').textContent = result;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const converter = new Converter();
    document.querySelector('#buttonGo').addEventListener('click', () => converter.run());
});