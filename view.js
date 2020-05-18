"use strict";

class View {    
    
    constructor(options, rootElement) {
        //задать классы для элементов управления
        this.sliderElements = new Map(); //хранение объектов JQ по схеме {родитель: потомок}
        this.rootElement = rootElement;
        
        this.slider = new Slider('slider', '', options.verticalView);
        let sliderJQObject = this.slider.jqObject;
        this.sliderElements.set(sliderJQObject, rootElement);
        
        this.track = new Track('track', '', options.verticalView);
        let trackJQObject = this.track.jqObject;
        this.sliderElements.set(trackJQObject, sliderJQObject);
        //установка слушателя

        this.leftThumb = new Thumb('leftThumb', 'left-thumb');
        let leftThumbJQObject = this.leftThumb.jqObject;
        this.sliderElements.set(leftThumbJQObject, trackJQObject);

        this.rightThumb = new Thumb('rightThumb', 'right-thumb');
        let rightThumbJQObject = this.rightThumb.jqObject;
        this.sliderElements.set(rightThumbJQObject, trackJQObject);

        this.thumbIsPressed = false;
        
        this.clickCounter = 0;
        //построение нового экземпляра слайдера
    }    

    createSlider() {
        this.sliderElements.forEach(function(parent, child) {           
            $(parent).append(child);
        })
        
    }

    addListeners(parent) {
        //метод, устанавливающий слушателей на необходимые объекты
        this.track.setListener(parent);        
        this.leftThumb.setListener(parent);
        this.rightThumb.setListener(parent);
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

    setListener (parent) {
        
        this.jqObject.mousemove(function(){
            
            if (parent.thumbIsPressed) {
                //вызов вункции в presenter
                console.log('курсор перемещен и нажат')
            }
            //передача данных в Presenter перемещение курсора
        })

        this.jqObject.mouseout(function(){
            console.log('фокус потерян')
            //передача данных в Presenter перемещение курсора)
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

    get JQObject() {
       return $(this.html) 
    }     
}
