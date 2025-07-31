(function() {
    // --- Кнопка НАКРУТИТЬ ---
    const cheatButton = document.createElement('button');
    cheatButton.textContent = 'НАКРУТИТЬ';
    cheatButton.style.position = 'fixed';
    cheatButton.style.top = '10px';
    cheatButton.style.right = '10px';
    cheatButton.style.zIndex = '9999';
    cheatButton.style.padding = '10px 15px';
    cheatButton.style.fontSize = '16px';
    cheatButton.style.backgroundColor = '#4CAF50'; // Зеленый фон
    cheatButton.style.color = 'white';
    cheatButton.style.border = 'none';
    cheatButton.style.borderRadius = '5px';
    cheatButton.style.cursor = 'pointer';
    cheatButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    document.body.appendChild(cheatButton);

    cheatButton.onclick = function() {
        if (typeof clicks !== 'undefined' && typeof increment === 'function' && typeof getLevel === 'function' && typeof updateStyle === 'function' && typeof getClickPower === 'function') {
            const amountToAdd = 1000;
            clicks += amountToAdd;
            localStorage.setItem("clicks", clicks);
            document.getElementById("clicks").textContent = clicks;
            document.getElementById("level").textContent = getLevel(clicks);
            updateStyle(clicks);
            document.getElementById("clickBtn").textContent = `+${getClickPower(clicks)}`;
            console.log(`Добавлено ${amountToAdd} кликов. Всего: ${clicks}`);
        } else {
            console.error("Не удалось накрутить клики: необходимые игровые функции или переменные не найдены.");
        }
    };

    // --- Кнопка СБРОС ---
    const resetButton = document.createElement('button');
    resetButton.textContent = 'СБРОС';
    resetButton.style.position = 'fixed';
    resetButton.style.top = '10px';
    resetButton.style.left = '10px'; // Изменено на 'left' для левого верхнего угла
    resetButton.style.zIndex = '9999';
    resetButton.style.padding = '10px 15px';
    resetButton.style.fontSize = '16px';
    resetButton.style.backgroundColor = '#f44336'; // Красный фон
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '5px';
    resetButton.style.cursor = 'pointer';
    resetButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    document.body.appendChild(resetButton);

    resetButton.onclick = function() {
        if (confirm("Вы уверены, что хотите сбросить весь прогресс?")) { // Запрос подтверждения
            // Удаляем данные из localStorage
            localStorage.removeItem("clicks");

            // Сбрасываем переменную clicks в игре
            clicks = 0;

            // Обновляем все элементы на странице до начального состояния
            document.getElementById("clicks").textContent = clicks;
            document.getElementById("level").textContent = getLevel(clicks); // Уровень вернется к "I"
            updateStyle(clicks); // Стиль сбросится
            document.getElementById("clickBtn").textContent = `+${getClickPower(clicks)}`; // Мощность клика сбросится
            console.log("Прогресс сброшен.");
        }
    };
})();