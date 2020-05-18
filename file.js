
(function($) {
    // значения по умолчанию
    var defaults = { verticalView: false,
        rangeMode: true,
        currentValueShow: true,
        color: 'green'
};
    // актуальные настройки, глобальные
    var options;
    $.fn.mySimplePlugin = function(params) {
        /*params:
            minValue
            maxValue
            startRange
            endRange
            unit
            step
            subStep
            color
        */

        options = $.extend({}, defaults, options, params);

        let rootElement = this;


        //model
        //здесь хранятся: минимальное и максимальное значение величины, 
        //начало и конце диапазона величины (по умолчанию)
        function calcDefaultSliderValue() {
            //функция рассчитывает начальное начение слайдера ИЛИ эта фукнция должна быть в презентере???
        }

        function calcCurrentSliderValue(position) {
             //функция расчета отображаемой слайдером величины на основе координат пули / координат клика
        }           

        //view        

        function view(mode, relativePosition) {
            //mode: init, rebase
            
            switch (mode) {
                case 'init':

                    let slider = new Slider('slider', '', options.verticalView);
                    let sliderJQ = slider.JQObject                    
                    //добавить слайдер на страницу
                    $(rootElement).append(sliderJQ);

                    //добавить трек в слайдер
                    let sliderTrack = new Track('sliderTrack', '', options.verticalView);
                    sliderJQ.append(sliderTrack.JQObject);
        
                    let bullitLeft = new Bullit('bullitLeft', 'bullit-left');
                    let bullitLeftJQ = bullitLeft.JQObject;
                    //задать координату левой пуле
                    bullitLeftJQ.css('left', relativePosition.leftThumb * 100 + '%');
                    sliderJQ.append(bullitLeftJQ);                    
        
                    if (options.rangeMode) {
                        let bullitRight = new Bullit('bullitRight', 'bullit-right');
                        let bullitRightJQ = bullitRight.JQObject;
                        bullitRightJQ.css('left', relativePosition.rightThumb * 100 + '%');
                        sliderJQ.append(bullitRightJQ);
                        //задать координату правой пуле

                        let sliderFiller = new Filler('sliderFiller');
                        let sliderFillerJQ = sliderFiller.JQObject;
                        sliderFillerJQ.css('left', relativePosition.leftThumb * 100 + '%');
                        sliderFillerJQ.css('width', (relativePosition.rightThumb - relativePosition.leftThumb)* 100 + '%');
                        sliderJQ.append(sliderFillerJQ);
                        //задать координаты и ширину заполнителя диапазона
                    }                     
        
                case 'repaint':

            }
            
            //реакция на изменение масштабов слайдера (отзывчивость)
        }


        //PRESENTER
        // инициация
        


        function init() {
            //расчет начальной конфигурации,
            //передача данных в view построения (вызов соответствующей функции)
            
            view('init', calcCoordinateThumb())            
        }
        
        init();

        function repaint(currenPosition) {
            //расчет начальной конфигурации,
            //передача данных в view построения (вызов соответствующей функции)
            // изменение данных в options
            view('repaint', calcCoordinateThumb())            
        }



        ////////////////////
        //пересчет из координат в абсолютные значения здесь
        function calcAbsoluteValue(coordinateThumb) {
            //расчет данных

            //вызов функции из Model для передачи данных

            
        }

        function calcCoordinateThumb() {
            //расчет данных
            let minValue = options.minValue;
            let maxValue = options.maxValue;
            let startRange = options.startRange;
            let endRange = options.endRange;
            
            let widthValue = maxValue - minValue;            
            let relativePosition = {};
            relativePosition.leftThumb = (startRange - minValue) / widthValue;
            relativePosition.rightThumb = (endRange - minValue) / widthValue;            
                        
            return (relativePosition);            
            
            //вызов функции из VIew Для передачи данных
        }

        //////////////////ИЛИ//////////////////////

        function calcRelativeValue(minValue, maxValue, startRange, endRange) {

            let currentRelativeRange = [];


            //расчет относительных данных и передача в Model или во View
            //получение абсолютных данных из Model или получение координат из View

            return currentRelativeRange;
        }
        //////////////////////


        function thumbIsMoved() {
            //функция получает текущую относительную координату пули и передает ее в Model
        }
            //функция1 --> передать ее в обработчик события перемещения пули
            //получение данных о перемещении пули (величина и направление)
            //передача данных о перемещении в model
            //передача данных из слайдера во внешнюю среду

            //функция2 --> передать ее в обработчик события нажатия на трек
        function trackIsClicked() {
            //функция получает текущую относительную клика на треке и передает ее в Model
        }
            //получение данных о нажатии на трек (координата нажатия)
            //передача данных о координате нажатия в model
            //передача данных из слайдера во внешнюю среду
        
        function getExternalData() {

        }
            //функция3 --> передать ее в обработчик события изменения данных в инпуте
            //получение данных из вне
            //передача данных в model
            //получение данных из model
            //передача данных во view для отображения изменений

            //сделать динамический приемник данных из вне
            //сделать передатчик данных из слайдера


    };
})(jQuery);

$(document).ready(function() {

    /*let bullitLeft = new Bullit('bullitLeft', 'bullit-left');
    let bullitRight = new Bullit('bullitRight', 'bullit-right');
    let fieldStartRange = new Field('fieldStartRange', 'field-start-range');
    let fieldEndRange = new Field('fieldEndRange', 'field-end-range');
    $('.div1').append(bullitLeft.JQObject);
    $('.div1').append(bullitRight.JQObject);
    $('.div1').append(fieldStartRange.JQObject);
    $('.div1').append(fieldEndRange.JQObject);*/

    $('.div1').mySimplePlugin({verticalView: false,         
        minValue:0, 
        maxValue:100, 
        startRange:30, 
        endRange:70, 
        unit: 'gramm',
        step: 0.1,
        subStep: 0.01})
})




