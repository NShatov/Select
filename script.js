// создадим массивы для курортов

let australia = new Array("Аделаида","Барьерный Риф","Голубые Горы","Золотое побережье");
let bagams= new Array("Андрос","Гранд Багама остров","Лонг","Нассау");
let egi= new Array("Луксор","Александрия","Асуан","Хургада");
let len;
let countryObj = document.querySelector('#countries'); // селект с выбором стран
let resortObj = document.querySelector('#resort'); //создадим ссылку на список для курортов

// добавлять элементы в массив options будем вызывая конструктор Option

resortObj[0] = new Option('Луксор', '');// ссылка на 1-ый первый элемент массива options в списке select

// напишем функцию для удаления элементов

const removeOptionFromSelect = function () {
    let resortLen = resortObj.options.length; // запишем в переменную длину массива курортов

    if (resortLen > 0) {
        for (let n = resortLen-1; n > -1; n--) {
            if (resortObj.options[n].selected === true) {
                resortObj.remove(n);
            }
        }
    }
    else {
        alert ('Удалять нечего, список пуст');
    }
}

//напишем функцию добавления данных в селект

const addOptionToSelect = function() {

  let selind = countryObj.options.selectedIndex; // порядковый номер выбранного элемента (строка)

    // через цикл switch выберем нужный вариант

    switch (selind) {
        case 0: resortObj.options.length = 0;
        break;
        case 1: resortObj.options.length = 0; // очищаем список курортов если он не был пустой
            len = australia.length; // передадим в переменную длину массива
            // заполняем select с курортами значениями из того массива который относится к выбранной стране
            for (let i = 0; i < len; i++) {
                resortObj[i] = new Option(australia[i], i);
            }
            break;
        case 2:
            resortObj.options.length = 0;
            len = bagams.length;
            for (let i = 0; i < len; i++) {
                resortObj[i] = new Option (bagams[i], i);
            }
            break;
        case 3:
            resortObj.options.length = 0;
            len = egi.length;
            for (let i = 0; i < len; i++) {
                resortObj[i] = new Option (egi[i], i);
            }
            break;
    }
};


const Present = function () {

    if(len>0)
    {
        resortObj.options[len] = new Option("Вы едете бесплатно!", len);

        resortObj.options[len].style.color="red";
    } else {
        alert("Сейчас список курортов пуст элемент добавляется в конец списка!");
    }
}
