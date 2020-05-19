'use strict';

class View {    
    
    constructor(options, rootElement) {
        //данные с координатами элементов управления

        //данные для отображения


        //задать классы для элементов управления

        this.rootElement = rootElement;
        
        this.slider = new Slider('slider', '', options.verticalView);
        let sliderJQObject = this.slider.jqObject;
        this.slider.addToPage(this.rootElement);        

        this.track = new Track('track', '', options.verticalView);
        let trackJQObject = this.track.jqObject;
        this.track.addToPage(this.slider.jqObject);

        this.leftThumb = new Thumb('leftThumb', 'left-thumb');
        let leftThumbJQObject = this.leftThumb.jqObject;
        this.leftThumb.addToPage(this.track.jqObject);

        this.rightThumb = new Thumb('rightThumb', 'right-thumb');
        let rightThumbJQObject = this.rightThumb.jqObject;
        this.rightThumb.addToPage(this.track.jqObject);

        this.thumbIsPressed = false;


        function createInterface() {

        }

        
        //построение нового экземпляра слайдера
    }

    addListeners(parent, func) {
        //метод, устанавливающий слушателей на необходимые объекты
        this.track.setListener(parent, func);        
        this.leftThumb.setListener(parent);
        this.rightThumb.setListener(parent);
    }
    
    changeInterface() {
        
    }

    //функция для получения текущей позиции
    getCurrentPosition() {
        console.log(this.slider.jqObject.offset().left);
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
