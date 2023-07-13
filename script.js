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
            } while (isNaN(num) || num === 0);

            return num;
    }
}

//найти корни
function getRoots(a, b, c, ifInvalid) {
    
    if (a === 0) {
        ifInvalid();
        return null;
    }

    const D = b ** 2 - 4 * a * c;

    if (D < 0) {
        alert('D < 0. Рівняння не має рішень');
        return {
            d: D,
            x1: null,
            x2: null
        }
    }

    const x1 = (-b - Math.sqrt(D)) / 2 * a;
    const x2 = (-b + Math.sqrt(D)) / 2 * a;
    
    if (D === 0) {
        alert(`D = 0. Єдиний корень рівняння: ${x1}`);
        return;
    }

    alert(`x1 = ${x1}, x2 = ${x2}`)
    return {
        d: D,
        x1: x1,
        x2: x2
    };
}

function ifInvalid() {
    return alert('a = 0, функція не має рішень');
}

const a = getNum(`Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0
Введіть a`, '');
const b = getNum(`a = ${a}
Введіть b`, a);
const c = getNum(`a = ${a}, b = ${b}
Введіть c`, b);

if (a != null && b != null && c != null) getRoots(a, b, c);