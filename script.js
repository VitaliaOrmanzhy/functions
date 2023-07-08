//получить число от пользователя
function getNum(message, prevNum) {
    let num;

    if (prevNum != null) {
        do {
                num = prompt(message);

                if (num === null) {
                    alert('Жаль. Сподіваюсь ще побачитись');
                    break;
                }
                num = +num;
            } while (isNaN(num));

            return num;
    }
}

//найти корни
function getRoots(a, b, c) {
    
    if (a === 0) {
        return 'a = 0. Рівняння не має рішень';
    }

    const D = b ** 2 - 4 * a * c;

    if (D < 0) {
        return 'D < 0. Рівняння не має рішень';
    }

    const x1 = (-b - Math.sqrt(D)) / 2 * a;
    const x2 = (-b + Math.sqrt(D)) / 2 * a;
    
    if (D === 0) {
        return `D = 0. Єдиний корень рівняння: ${x1}`
    }

    return `x1 = ${x1}, x2 = ${x2}`;
}

const a = getNum(`Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0
Введіть a`, '');
const b = getNum(`a = ${a}
Введіть b`, a);
const c = getNum(`a = ${a}, b = ${b}
Введіть c`, b);

if (a != null && b != null && c != null) alert(getRoots(a, b, c));