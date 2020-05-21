'use strict';
class Model {
    constructor(options) {
        //массив данных с абсолютынми значениями
        this.minValue;
        this.maxValue;
        this.startRange;
        this.endRange;
        this.sliderScale = calcSliderScale();
        this.inputStart = options.inputStart;
        this.inputEnd = options.inputEnd;

        let needFunction = this.modelToPresenterTransfer.bind(this);

        //установка внешних слушателей


        //функция расчета шкалы слайдера (числовые значения)
        function calcSliderScale() {
            let sliderScale = {};
            return sliderScale;
        };

        //функция установки внешних слушателей

    }

    setExternalListener(model, presenterFunction) {
        
        if (model.inputStart) {
            model.inputStart.change(function() {                
                presenterFunction(model.inputStart.val(), 'inputStart')
        })
        }

        if (model.inputEnd) {
            model.inputEnd.change(function() {
                presenterFunction(model.inputEnd.val(), 'inputEnd')
            })
        }

    }

    /*getCurrentValue() {
        //функция передает текущие значения установленного диапазона во внешний модуль (input и т.п.)
        let range = {};
        range.start = this.startRange;
        range.end = this.endRange;

        return range;
    }*/

    setCurrentValue() {
        //функция получает данные об изменениях во внешнем модуле (input и т.п.)

    }

    getDataFromModel(value, modulesBounds) {
        //функция взаимодействия model и presenter
        let key = Object.keys(value)[0];

        //this.inputStart.val(modulesBounds[keys[0]]);
        this[modulesBounds[key]].val(value[key]);
                //передача данных во внешнюю среду
    }

    //обработка данных из Presenter

    modelToPresenterTransfer(extData) {

    }

    //передача данных в Presenter

}