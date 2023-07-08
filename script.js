//получить числа от пользователя
function getNums() {
    //массив, в котором будут находиться числа
    let nums = [];

    const a = prompt(`Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0
Введіть a`);

    if (a == null) {
        alert('Жаль. Сподіваюсь ще побачитись');
        return;
    }

    const b = prompt(`a = ${a}
Введіть b`)

    if (b == null) {
        alert('Жаль. Сподіваюсь ще побачитись');
        return;
    }

    const c = prompt(`a = ${a}, b = ${b}
Введіть c`)

    if (c == null) {
        alert('Жаль. Сподіваюсь ще побачитись');
        return;
    }

    nums.push(+a, +b, +c);
    return nums;
      
}

function getRoots(a, b, c) {
    
    if (a === 0) {
        return 'a = 0. Рівняння не має рішень';
    }

    const D = b ** 2 - 4 * a * c;

    if (D < 0) {
        return 'D < 0. Рівняння не має рішень';
    }

    const x1 = (-b - Math.sqrt(D)) / (2 * a);
    const x2 = (-b + Math.sqrt(D)) / (2 * a);
    
    if (D === 0) {
        return `D = 0. Єдиний корень рівняння: ${x1}`
    }

    return `x1 = ${x1}, x2 = ${x2}`;
}

alert(getRoots(...getNums()));s