"use strict";

(function($) {
    // значения по умолчанию
    var defaults = { verticalView: false,
        rangeMode: true,
        currentValueShow: true,
        color: 'green'
};
    // актуальные настройки, глобальные
    var options;
    $.fn.mySlider = function(params) {
        /*params:
            minValue
            maxValue
            startRange
            endRange
            unit
            stepScale
            subStep
            color
            arrayValues
            noNumeric
            inputStart
            inputEnd
        */

        options = $.extend({}, defaults, options, params);

        let rootElement = this;        
        
        let model = new Model(options);
        let view = new View(options, rootElement);
        let presenter = new Presenter(model, view);
        
        /*view.getCurrentPosition();
        function responseListener(x, y) {
            //console.log(x);
        }

        view.addListeners(view, responseListener);*/


    }
        //model
        //здесь хранятся: минимальное и максимальное значение величины, 
        //начало и конце диапазона величины (по умолчанию)
        function calcDefaultSliderValue() {
            //функция рассчитывает начальное начение слайдера ИЛИ эта фукнция должна быть в презентере???
        }

        function calcCurrentSliderValue(position) {
             //функция расчета отображаемой слайдером величины на основе координат пули / координат клика
        }           

      
})(jQuery);

$(document).ready(function() {

    $('.div1').mySlider({verticalView: false,         
        minValue:0, 
        maxValue:100, 
        startRange:30, 
        endRange:70, 
        unit: 'gramm',
        step: 0.1,
        subStep: 0.01,
        inputStart: $('#first-input'),
        inputEnd: $('#second-input')
    })

    $('.div2').mySlider({verticalView: false,         
        minValue:0, 
        maxValue:100, 
        startRange:30, 
        endRange:70, 
        unit: 'gramm',
        step: 0.1,
        subStep: 0.01,
        inputStart: $('#third-input'),
        inputEnd: $('#fourth-input')
    })
})




