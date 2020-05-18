const Item = ({ url, img, title }) => `
  <a href="${url}" class="list-group-item">
    <div class="image">
      <img src="${img}" />
    </div>
    <p class="list-group-item-text">${title}</p>
  </a>
`;

let thumbIsPressed = false;

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
    }

    get JQObject() {
        
        let JQObject = $(this.html);        


        return JQObject;
}}

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
    }

    get JQObject() {
        
        let JQObject = $(this.html);
        
        JQObject.mousemove(function(event){
            if (thumbIsPressed) {
                console.log('курсор перемещен и нажат')
            }
            //передача данных в Presenter перемещение курсора
        })

        JQObject.focusout(function(){
            console.log('фокус потерян')
            //передача данных в Presenter перемещение курсора)
        })

        return JQObject;
}}


class Bullit {

    constructor(name, classModificator) {

        let className = 'bullit'

        if (classModificator) {
            className += ' ' + classModificator;
        }

        this.name = name;
        this.html = `<div class="${className}"></div>`;
        
    }

    get JQObject() {
        let JQObject = $(this.html);
        
        JQObject.mousedown(function(){
            thumbIsPressed = true;
            //передача данных в Presenter (нажата пуля)
        })

        JQObject.mouseup(function(){
            thumbIsPressed = false;
            //передача данных в Presenter (нажата пуля)
        })

        
        return JQObject;
    }

}

class Field {

    constructor(name, classModificator) {
        let className = 'output-field'

        if (classModificator) {
            className += ' ' + classModificator;
        }

        this.name = name;
        this.html = `<input class="${className}"></input>`;
    }

    get JQObject() {
       return $(this.html) 
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

