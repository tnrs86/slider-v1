'use strict';
//функция преобразования абсолютных данных в относительные и передача их в view

//функиця преобразования относительных данных в абсолютные и передача их в model

//работа с нецифровыми значениями (с массивом значений??)

//все методы, которые будут вызываться из других модулей опосредованно (через презентер) - перенести в конструктор! (скорее всего, все методы перенести в конструктор)

class Presenter {

    constructor(model, view) {

        this.model = model;
        this.view = view;
        this.modulesBounds = setBoundsBetweenModules(); //установка связи между модулями
        
        view.addListeners(view, viewToPresenterTransfer, this.modulesBounds); //привязать контекст
        model.setExternalListener(model, modelToPresentTransfer, this.modulesBounds); //привязать контекст
        
        let needFunction = this.relativeToAbsoluteDataConverter.bind(this);
        //в конструкторе - функции однократного вызова
        
        function viewToPresenterTransfer(modulesBounds) {            
            
            //установка слушателя в view
                //при срабатывании:
                //-получение текущих данных по состоянию интерфейса (ф-я View)
                let result = view.getCurrentPosition();
                let keys = Object.keys(result);
                //-обработка данных по состоянию интерфейса (ф-я View)              
                //получение ключа для модель                
                
                //обработка данных в Model (ф-я Model)
                model.getDataFromModel(result, modulesBounds);
        }

        function modelToPresentTransfer(extValue) {
            view.setCurrentPosition(extValue)
        } 


        function convertToRelative(absoluteData) {

        }

        function convertToAbsolute(relativeData) {

        }

        //взаимосвязь между геометрией интерфейса и потребителями данных от model
            //при инициализации Pres получает перечень внешний потребителей с указанием потребляемого значения
            //при инициализации Pres получает перечень элементов управления, отображающих поведение управляемых величин с указанием конкретного значения
            //в Pres устанавливается взаимосвязь между внешними потребителями и элементами управления
        function setBoundsBetweenModules() {
            let modulesBounds = {};
            
            let i = 0;
            modulesBounds[view.leftThumb.name] = 'inputStart'; //сделать свойством model
            modulesBounds[view.rightThumb.name] = 'inputEnd' //сделать свойством model
            modulesBounds['inputStart'] = view.leftThumb.name; //сделать свойством view
            modulesBounds['inputEnd'] = view.rightThumb.name; //сделать свойством view

            return modulesBounds;
        }
        
    }
    ////////////////////КОНСТРУКТОР ОКОНЧИЛСЯ

    
    //передача дан.ных в Presenter

    //обработка данных из view - в constructor    

    // в методах презентера - функции многократного вызова
    relativeToAbsoluteDataConverter(currentPosition) {        
        this.presenterToModelTransfer(currentPosition); 
    }

    absoluteToRelativeDataConverter(currentValue) {
        this.view.setCurrentPosition()
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