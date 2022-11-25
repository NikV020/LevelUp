window.addEventListener('DOMContentLoaded', () => { 
    /* ================= Scroll ========================= */
    const anchors = document.querySelectorAll('a[href*="#"]')
  
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }


    /* ================= Timer ========================= */

    let timer; // пока пустая переменная
    let x = 30; // стартовое значение обратного отсчета
    countdown(); // вызов функции
    function countdown(){  // функция обратного отсчета
      document.getElementById('rocket').innerHTML = x;
      x--; // уменьшаем число на единицу
      if (x < 0){
        clearTimeout(timer); // таймер остановится на нуле
      
      }
      else {
        timer = setTimeout(countdown, 60000);
      }
    }
  
    /* ================= Form ========================= */

    function getDinamicInformation() {
        let phone = document.getElementById('tel');

        // Проверяем фокус
        phone.addEventListener('focus', _ => {
        // Если там ничего нет или есть, но левое
        if(!/^\+\d*$/.test(phone.value))
            // То вставляем знак плюса как значение
            phone.value = '+';
            
        });
    
        phone.addEventListener('keypress', e => {
        // Отменяем ввод не цифр
        if(!/\d/.test(e.key))
            e.preventDefault();
        });
    
    }
    getDinamicInformation();

    


})