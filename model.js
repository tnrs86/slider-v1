'use strict';
class Model {
    constructor(options) {
        //массив данных с абсолютынми значениями
        this.minValue;
        this.maxValue;
        this.startRange;
        this.endRange;
        this.sliderScale = calcSliderScale();
        
        //установка внешних слушателей
        if (options.inputStart) {
            setExternalListener(options.inputStart);
        }

        if (options.inputEnd) {
            setExternalListener(options.inputEnd);
        }

        //функция расчета шкалы слайдера (числовые значения)
        function calcSliderScale() {
            let sliderScale = {};
            return sliderScale;
        };

        //функция установки внешних слушателей
        function setExternalListener(input) {
            input.change(function() {
                console.log(this.value)
            })
        }
    }

    getCurrentValue() {
        //функция передает текущие значения установленного диапазона во внешний модуль (input и т.п.)
        let range = {};
        range.start = this.startRange;
        range.end = this.endRange;

        return range;
    }

    setCurrentValue() {
        //функция получает данные об изменениях во внешнем модуле (input и т.п.)
    }

    getDataFromModel() {
        //функция взаимодействия model и presenter
    }

}