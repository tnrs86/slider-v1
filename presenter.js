'use strict';
//функция преобразования абсолютных данных в относительные и передача их в view

//функиця преобразования относительных данных в абсолютные и передача их в model

//работа с нецифровыми значениями (с массивом значений??)

class Presenter {

    constructor(model, view) {

        setViewListener();

        //в конструкторе - функции однократного вызова
        function viewToPresenterTransfer() {
            let result = view.getCurrentPosition();
            
            //this.relativeToAbsoluteDataConverter(result);            
        }
        //вызов функции по

        function setViewListener() {
            view.addListeners(view, viewToPresenterTransfer);
        }
        
    }

    // в методах презентера - функции многократного вызова
    relativeToAbsoluteDataConverter(currentPosition) {
        console.log(currentPosition);
        this.presenterToModelTransfer(); 
    }

    presenterToModelTransfer() {
        
    }

    changeViewListener() {
        //функция получает сообщения об изменении в View и передает в model
    }

    changeModelListener() {
        //функция получает сообщения об изменении данных в Model (изменение данных "налету")
        //и передает сообщения на изменения в View
    }

}