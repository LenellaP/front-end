document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо елементи для кнопок та зображення
    var elementEight = document.getElementById("eight");
    var elementNine = document.querySelector("#nine");
    var image = document.getElementById("image");

    // Кольори для елемента "eight"
    var eightBgColor = "purple";
    var eightTextColor = "orange";
    var eightClicked = false; // Прапорець, який показує, чи клікнули на "eight"

    // Кольори для елемента "nine"
    var nineBgColor = "blue";
    var nineTextColor = "yellow";
    var nineClicked = false; // Прапорець, який показує, чи клікнули на "nine"

    // Додаємо обробник події для кліку на елемент "eight"
    elementEight.addEventListener("click", function() {
        if (!eightClicked) {
            // Змінюємо колір фону та тексту для елемента "eight" при першому кліку
            elementEight.style.backgroundColor = eightBgColor;
            elementEight.style.color = eightTextColor;
            eightClicked = true;
        } else {
            // Міняємо кольори між "eight" і "nine" при наступних кліках
            var tempBgColor = eightBgColor;
            var tempTextColor = eightTextColor;
            eightBgColor = nineBgColor;
            eightTextColor = nineTextColor;
            nineBgColor = tempBgColor;
            nineTextColor = tempTextColor;
            elementEight.style.backgroundColor = eightBgColor;
            elementEight.style.color = eightTextColor;
        }
    });

    // Додаємо обробник події для кліку на елемент "nine"
    elementNine.addEventListener("click", function() {
        if (!nineClicked) {
            // Змінюємо колір фону та тексту для елемента "nine" при першому кліку
            elementNine.style.backgroundColor = nineBgColor;
            elementNine.style.color = nineTextColor;
            nineClicked = true;
        } else {
            // Міняємо кольори між "eight" і "nine" при наступних кліках
            var tempBgColor = eightBgColor;
            var tempTextColor = eightTextColor;
            eightBgColor = nineBgColor;
            eightTextColor = nineTextColor;
            nineBgColor = tempBgColor;
            nineTextColor = tempTextColor;
            elementNine.style.backgroundColor = nineBgColor;
            elementNine.style.color = nineTextColor;
        }
    });

    // Додаємо обробники подій для кнопок "Додати", "Збільшити", "Зменшити" і "Видалити"
    var addImageButton = document.getElementById("addImage");
    var increaseImageButton = document.getElementById("increaseImage");
    var decreaseImageButton = document.getElementById("decreaseImage");
    var deleteImageButton = document.getElementById("deleteImage");

    // Обробник події для кнопки "Додати"
    addImageButton.addEventListener("click", function() {
        var newImage = document.createElement("img");
        newImage.src = "новий_шлях_до_зображення.jpg";
        newImage.alt = "нове_зображення";
        newImage.id = "image"; // Додаємо ідентифікатор, щоб працювати з новим зображенням
        image.parentNode.appendChild(newImage);
    });

    // Обробник події для кнопки "Збільшити"
    increaseImageButton.addEventListener("click", function() {
        var currentWidth = image.width;
        var currentHeight = image.height;
        image.style.width = currentWidth * 1.2 + "px"; // Збільшуємо ширину
        image.style.height = currentHeight * 1.2 + "px"; // Збільшуємо висоту
    });

    // Обробник події для кнопки "Зменшити"
    decreaseImageButton.addEventListener("click", function() {
        var currentWidth = image.width;
        var currentHeight = image.height;
        image.style.width = currentWidth / 1.2 + "px"; // Зменшуємо ширину
        image.style.height = currentHeight / 1.2 + "px"; // Зменшуємо висоту
    });

    // Обробник події для кнопки "Видалити"
    deleteImageButton.addEventListener("click", function() {
        image.parentNode.removeChild(image);
    });
});
