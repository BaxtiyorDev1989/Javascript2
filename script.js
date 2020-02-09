var yourAge = prompt('Введите свой возраст');
if ( yourAge >= 0 && yourAge <= 18) {
    alert('В еще молоды');
}
else if (yourAge >= 18 && yourAge <= 50){
    alert('Вам нужно работать');
}
else if( yourAge >= 50 && yourAge <= 60){
    alert('Вам скоро на пенсию');
}
else{
    alert('Вы пенсионер');   
} 
  
var time = +prompt('Введите время');
switch (time) {
    case 14:
        alert('2 часа дня');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 23:
        alert('11 часов ночи');
        break;

    default:
        break;
}

