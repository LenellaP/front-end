function validateForm() {
    var form = document.getElementById('form');
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checkValidity()) {
            elements[i].classList.remove('error');
        } else {
            elements[i].classList.add('error');
        }
    }

    if (form.checkValidity()) {
        // Замість використання alert, вивести дані поряд з формою
        displayFormData(elements);
    }
}

function displayFormData(elements) {
    // Отримати або створити елемент для відображення даних
    var displayContainer = document.getElementById('displayContainer');
    if (!displayContainer) {
        displayContainer = document.createElement('div');
        displayContainer.id = 'displayContainer';
        document.body.appendChild(displayContainer);
    }


    var dataString = "Введенні дані:" +
                    "<br>ПІБ: " + elements.fullName.value +
                    "<br>Варіант: " + elements.workVariant.value +
                    "<br>Телефон: " + elements.phone.value +
                    "<br>Факультет: " + elements.faculty.value +
                    "<br>Адреса: " + elements.address.value;

                // Вивести дані у відповідний контейнер
                displayContainer.innerHTML = dataString;
            }

        
function formatPhoneNumber() {
    var phoneNumberInput = document.getElementById('phone');

    // Видалення всіх нецифрових символів з номеру телефону
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, '');

    // Перевірка наявності цифр у введеному номері телефону
    if (phoneNumber.length > 0) {
        // Форматування номеру телефону у вигляді "(ччч)-ччч-чч-чч"
        var formattedPhoneNumber = '(' + phoneNumber.substring(0, 3) + ')-' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6, 8) + '-' + phoneNumber.substring(8, 10);
        
        // Встановлення відформатованого номеру телефону у поле введення
        phoneNumberInput.value = formattedPhoneNumber;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Отримати клітинку з номером 7
    var cell7 = document.getElementById('cell7');
    
    var table = document.getElementById('myTable'); // Отримати таблицю
    var colorPicker = document.getElementById('colorPicker'); // Отримати елемент палітри

    // Додати обробники подій для клітинки 7
    cell7.addEventListener('mouseover', function () {
        var randomColor = getRandomColor();
        cell7.style.backgroundColor = randomColor;
    });

    cell7.addEventListener('click', function () {
        cell7.style.backgroundColor = colorPicker.value;
    });

    cell7.addEventListener('dblclick', function () {
        var rowIndex = Math.floor(cell7.cellIndex / 6); // Розрахунок індексу рядка
        changeRowColors(rowIndex);
    });

    // Функція для отримання випадкового кольору
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Функція для зміни кольорів рядків, починаючи з обраного, через один
    function changeRowColors(startIndex) {
        var rows = table.getElementsByTagName('tr');
        for (var i = startIndex + 1; i < rows.length; i += 2) {
            var cellsInRow = rows[i].getElementsByTagName('td');
            for (var j = 0; j < cellsInRow.length; j++) {
                cellsInRow[j].style.backgroundColor = colorPicker.value;
            }
        }
    }
});

    
