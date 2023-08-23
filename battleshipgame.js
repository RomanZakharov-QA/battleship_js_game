var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var array = [];

while (isSunk == false) {
	guess = prompt("Привет! Это игра Морской бой. В 7 ячейках по горизонтали (0-6) находится трёхпалубный корабль противника. Цель - потопить его за как можно меньшее количество выстрелов. Fire at will! Введи число от 0 до 6:");

	if (array.includes(guess)) {
        alert("Эта часть корабля уже уничтожена");
        guesses = guess + 1;
        continue;
    }

    if (guess < 0 || guess > 6) {
        alert("Нужно ввести число от 0 до 6")
    } else {
        guesses = guesses += 1;
         if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попадание!");
            array.push(guess);
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Корабль уничтожен!")
            }
        } else {

            alert("Мимо!");

        }
    }
}

var stats = "Чтобы потопить вражеский корабль, тебе понадобилось " + guesses + " выстрелов. Твоя точность: " + (3 / guesses);
alert(stats);