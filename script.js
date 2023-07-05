//массив, в котором будут находиться числа
let nums = [];

//получить числа от пользователя
function getNum(messages) {

    for (let i = 0; i < messages.length; i++) {
        let num;

        do {
            
            num = prompt(messages[i]);
            console.log(nums);

            // выход из цикла при num === null
            if (num === null) {
                alert('Жаль. Сподіваюсь ще побачитись');
                return num;
                // break;
            }

            num = +num
            nums.push(num);
            console.log(nums)
        } while (typeof num !== 'number');

        if (num === null) break;
    }

    return nums;
}

const arrOfMessages = [`Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0
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