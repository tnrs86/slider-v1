'use strict';
class Model {
    constructor() {
        //массив данных с абсолютынми значениями
        this.minValue;
        this.maxValue;
        this.startRange;
        this.endRange;
        this.sliderScale = calcSliderScale();

        //функция расчета шкалы слайдера (числовые значения)
        function calcSliderScale() {

            return sliderScale;
        };

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