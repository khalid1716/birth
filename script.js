const ingredients = document.querySelectorAll('.ingredient');
const cake = document.getElementById('cake');
const message = document.getElementById('message');
const finalCakeContainer = document.getElementById('final-cake-container');
const finalCake = document.getElementById('final-cake');
const correctOrder = ['biscuit', 'cream', 'berries', 'candles']; // Правильный порядок
let currentStep = 0;

// Картинки для ингредиентов
const ingredientImages = {
    biscuit: 'бисквит.png',
    cream: 'крем.png',
    berries: 'ягоды.png',
    candles: 'свечи.png'
};

const finalCakeImage = 'торт.png';

ingredients.forEach(ingredient => {
    ingredient.addEventListener('click', () => {
        const type = ingredient.getAttribute('data-ingredient');

        // Проверяем, правильный ли порядок
        if (type === correctOrder[currentStep]) {
            // Добавляем картинку в торт
            const img = document.createElement('img');
            img.src = ingredientImages[type];
            img.alt = type;
            img.style.width = '100%';
            img.style.borderRadius = '5px';
            cake.appendChild(img);

            currentStep++; // Переходим к следующему шагу

            // Если все ингредиенты добавлены
            if (currentStep === correctOrder.length) {
                message.textContent = "Торт готов! С Днём Рождения! 🎉";
                finalCake.src = finalCakeImage;
                finalCakeContainer.style.display = 'block'; // Показываем контейнер с готовым тортом
            }
        } else {
            message.textContent = "Неверный порядок! Начни с бисквита.";
        }
    });
});