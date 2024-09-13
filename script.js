
// Создать counter.  Страница с параграфом с числом(изначально 0) и  двумя кнопками “+” и “-”  и при нажатии на какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.



const num = document.querySelector('.num');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const clear = document.querySelector('.clear');

let number = 0;

number = localStorage.getItem('value');
num.innerText = number;



plus.onclick = () => {
    localStorage.setItem('value', ++number);
    num.innerText = number;
};

minus.onclick = () => {
    localStorage.setItem('value', --number);
    num.innerText = number;
};

clear.onclick = () => {
    localStorage.setItem('value', 0);
    num.innerText = 0;
};


// localStorage.setItem('name', 'Roza');
// localStorage.setItem('age', '18');
// localStorage.setItem('age', '4');




// const showInput = document.querySelector('#showInput');
// const clearInput = document.querySelector('#clearInput');
// let p = document.createElement('p');
// document.body.append(p);
// showInput.onclick = () => {
    
//     if(localStorage.getItem("input")){
//         p.innerText = localStorage.getItem("input");
//     }
//     else{
//             p.innerText ="Нет сохраненных данных";
//     }

    
// }
// clearInput.onclick = () => {
//     localStorage.removeItem("input");
// }