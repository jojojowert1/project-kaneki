const cont = document.querySelector(".zagad")
const text = document.createElement("div")
const vopr = text.textContent = "Любимый напиток Канеки Кена до становление гулем?"
const input = document.createElement("input")
const btn = document.querySelector(".button")
const btn2 = document.createElement('button')
const link = document.createElement('a')
link.href =  'https://i0.wp.com/r34i.paheal-cdn.net/08/9e/089e9bfc5f87539a69f641815fcb0f55?ssl=1'
link.textContent =  'https://i0.wp.com/r34i.paheal-cdn.net/08/9e/089e9bfc5f87539a69f641815fcb0f55?ssl=1'


input.classList="input"
btn2.classList = "button"
btn2.textContent ='ok'

btn.addEventListener('click', function() {
    cont.append(vopr, input, btn2)
    btn.disabled = true;
    btn.textContent = 'Кнопка отключена';

});




btn2.addEventListener('click', function() {
    // Получаем текущее значение поля ввода
    const inputValue = input.value.toLowerCase();

    // Проверяем, введено ли слово "кофе"
    if (inputValue === 'кофе') {
        cont.append(link)
        alert('Вот ваш приз')
    }else {
        alert('Ответ неверный')
    }
});