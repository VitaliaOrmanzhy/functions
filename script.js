function getNum(messages) {

    
    let nums = [];

    for (let i = 0; i < messages.length; i++) {
        let num;

        do {
            let num = prompt(messages[i]);

            if (num === null) {
                alert('Жаль. Сподіваюсь ще побачитись');
                break;
            }

            nums.push(+num);
        } while (typeof num !== 'number');

    }

    return nums;
}

const arrOfMessages = [`Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0
Введіть a`, `a = ${nums[0]}
Введіть b`,`a = ${nums[0]}, b = ${nums[1]}
Введіть c`]

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

alert(getRoots(...getNum(arrOfMessages)));