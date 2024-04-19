// Task 1//
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/5425fedf430ca265ea00033e/groups/635d28705beff1000100276a
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

// Task 2 Messi goals function//
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/562a718538401236fd00009e/groups/562bbb173ef73ee1a6000029
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

// Task 3 Return Negative//
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/556b81de1f97c84309000179/groups/556b82191f97c8e402000180
function makeNegative(num) {
    return num > 0 ? -num : num;
  }

// Task 4 Grasshopper - Terminal game move function//
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/563e3771162b019f180000e6/groups/563e6e242225a8946c00015e
function move (position, roll) {
    return position + (2 * roll)
  }

// Task 5 Grasshopper - Personalized Message//
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/5785432cbf6a1ec8e600032d/groups/57856f3eb35aa3710d00021c
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
  }

// Task 6 Keep Hydrated!
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/582cdb9dac48a9ab07000051/groups/582dc64e55a1f4c18b00017e
function litres(time) {
    return (time  - (time % 2)) / 2;
  }

// Task 7 Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// Solution:
// https://www.codewars.com/kata/reviews/555086ff587c4e3a7e000095/groups/555086ff587c4e3a7e000097
function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 !==0;
  }
