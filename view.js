'use strict';

class View {    
    
    constructor(options, rootElement) {
        //данные с координатами элементов управления

        //данные для отображения


        //задать классы для элементов управления
        this.rootElement = rootElement;
        this.thumbIsPressed = false;
        this.verticalView = options.verticalView;
        createInterface(this);

        //построение нового экземпляра слайдера
        function createInterface(self) {
            self.slider = new Slider('slider', '', self.verticalView);
            //let sliderJQObject = this.slider.jqObject;
            self.slider.addToPage(self.rootElement);        
    
            self.track = new Track('track', '', self.verticalView);
            //let trackJQObject = this.track.jqObject;
            self.track.addToPage(self.slider.jqObject);
    
            self.leftThumb = new Thumb('leftThumb', 'left-thumb');
            //let leftThumbJQObject = this.leftThumb.jqObject;
            self.leftThumb.addToPage(self.track.jqObject);
    
            self.rightThumb = new Thumb('rightThumb', 'right-thumb');
            //let rightThumbJQObject = this.rightThumb.jqObject;
            self.rightThumb.addToPage(self.track.jqObject);
            
            //добавить поля вывода текущих данных

            //добавить шкалу (scale)
        }
        
    }

    //Блок создания интерфейса
    addListeners(view, func) {
        //метод, устанавливающий слушателей на необходимые объекты
        /*this.track.setListener(parent, func);        
        this.leftThumb.setListener(parent);
        this.rightThumb.setListener(parent);*/
        view.track.setListener(view, func);        
        view.leftThumb.setListener(view);
        view.rightThumb.setListener(view);
    }
    
    createScaleElement() {
        //перед эти

        //отрисовка элементов шкалы

        //нанесение данных на шкалу

    }    

    //блок работы интерфейса
    changeInterface() {
        
        //перемещение пуль в соответствии с начальными/текущими значениями выбранного диапазона

        //внесение измененных данных в элементы управления
    }

    //функция для получения текущей позиции
    getCurrentPosition() {
        //передача массива с текущими координатами основных элементов в зависимости от ориентации слайдера:
            //начало и ширина трека слайдера
            //координата левой пули
            //координата правой пули
        
        let currentPosition = [2];
        let leftSlider = 0;
        let widthSlider = 0;
        let leftThumbLeft = 0;
        let rightThumbLeft = 0;
        if (!this.verticalView) {
            leftSlider = this.slider.jqObject.offset().left;
            widthSlider = this.slider.jqObject.width();
            leftThumbLeft = this.leftThumb.jqObject.offset().left;
            rightThumbLeft = this.rightThumb.jqObject.offset().left;
        } else {
            leftSlider = this.slider.jqObject.offset().top;
            widthSlider = this.slider.jqObject.height();
            leftThumbLeft = this.leftThumb.jqObject.offset().top;
            rightThumbLeft = this.rightThumb.jqObject.offset().top;
        }
        
        currentPosition[0] = (leftThumbLeft - leftSlider) / widthSlider;
        currentPosition[1] = (rightThumbLeft - leftSlider) / widthSlider;
        
        

        return currentPosition;
    }

    setCurrentPosition() {

    }
}

class Slider {
    constructor(name, classModificator, verticalView) {

        let className = 'slider'

        if (classModificator) {
            className += ' ' + classModificator;
        }

        if (verticalView) {
            className += ' ' + 'vertical-slider';
        }

        this.name = name;
        this.html = `<div class="${className}"></div>`;
        this.jqObject = $(this.html); 
    }

    setListener () {

    }

    addToPage(parent) {
        $(parent).append(this.jqObject);
    }

}

class Track {
    constructor(name, classModificator, verticalView) {

        let className = 'slider-track'

        if (classModificator) {
            className += ' ' + classModificator;
        }

        if (verticalView) {
            className += ' ' + 'vertical-track';
        }

        this.name = name;
        this.html = `<div class="${className}"></div>`;
        this.jqObject = $(this.html);
    }

    addToPage(parent) {
        $(parent).append(this.jqObject);
    }

    setListener (parent, func) {
        
        this.jqObject.mousemove(function(event){
            
            if (parent.thumbIsPressed) {
                //вызов вункции в presenter
                func(event.pageX);
            }
            //передача данных в Presenter перемещение курсора
        })

        this.jqObject.mouseout(function(){
            
            
        })

        this.jqObject.click(function(){
            
            //передача данных в Presenter
            // перемещение курсора)
        })
    }   

}


class Thumb {

    constructor(name, classModificator) {

        let className = 'thumb'

        if (classModificator) {
            className += ' ' + classModificator;
        }

        this.name = name;
        this.html = `<div class="${className}"></div>`;
        this.jqObject = $(this.html);
    }

    addToPage(parent) {
        $(parent).append(this.jqObject);
    }

    setListener(parent) {
        
        this.jqObject.mousedown(function(){
            
            parent.thumbIsPressed = true;
            //передача данных в Presenter (нажата пуля)                      
        })

        this.jqObject.mouseup(function(){
            parent.thumbIsPressed = false;
            //передача данных в Presenter (нажата пуля)
        })
    }

    moveToPoint(point) {
        //перемещение пули к нужной точке

    }

}


class Filler {
    constructor(name, classModificator) {
        let className = 'filler'

        if (classModificator) {
            className += ' ' + classModificator;
        }

        this.name = name;
        this.html = `<div class="${className}"></div>`;
    }

    addToPage(parent) {
        $(parent).append(this.jqObject);
    }

    get JQObject() {
       return $(this.html) 
    }     
}
