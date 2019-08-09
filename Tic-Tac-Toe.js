var player;
var xlist = []; var olist = []; var array = [];

startGame();

$(document).ready(function(){
  $("th").click(function(){
      registerClick($(this).attr('id'))
  });
});

  

function registerClick(x) {
  console.log(x)
  var a = true;
  var y;

    for (y in array) {
      if (array[y] == x) {
        a = false;
      }
      else {
      }
  }

  if (a == true) {
    NextTurn(x);
  }
  else {
    alert("This square has been hit before");
  }
}


function NextTurn(square) {
    document.getElementById(square).innerHTML = player;
    array[array.lenght] = square;
  if (player == "X"){
   player = "O";
   xlist[xlist.length] = square;
   console.log(xlist);
  }
  else {
    player = "X";
    olist[olist.length] = square;
    console.log(olist);
  }
  if (checkVerticalWin(olist)) {
    document.getElementById("WIN").innerHTML = "O Wins! Game Over"
  }
  if (checkVerticalWin(xlist)) {
    document.getElementById("WIN").innerHTML = "X Wins! Game Over"
  }
  if (checkDiagonalWin1(xlist.sort())) {
    document.getElementById("WIN").innerHTML = "X Wins! Game Over"
  }
  if (checkDiagonalWin1(olist.sort())) {
    document.getElementById("WIN").innerHTML = "O Wins! Game Over"
  }
  if (checkDiagonalWin2(xlist.sort())) {
    document.getElementById("WIN").innerHTML = "X Wins! Game Over"
  }
  if (checkDiagonalWin2(olist.sort())) {
    document.getElementById("WIN").innerHTML = "O Wins! Game Over"
  }
  if (checkHorizontalWin(olist.sort())){
    document.getElementById("WIN").innerHTML = "O Wins! Game Over"
  }
  if (checkHorizontalWin(xlist.sort())){
    document.getElementById("WIN").innerHTML = "X Wins! Game Over"
  }
    if (checkCatsGame(array.sort())){
	document.getElementById("WIN").innerHTML = "Cats Game";
    }

}



function check(list, value){
  var x;
  for (x in list) {
    if(list[x] == value) {
      return true
     }
  }
}

function checkVerticalWin(list) {
  count = 1
  while(count <= 3 ) {
    if(check(list, count)) {
      if(check(list, count + 3)) {
        if(check(list, count + 6)) {
            console.log("WIN!");
            return true
        }
      }
    }
   count++
  }
}

function checkHorizontalWin(list) {
  if (check(list, 1)){
    if (check(list, 2)){
      if (check(list, 3)){
        return true
      }
    }
  }
  else if (check(list, 4)){
    if (check(list, 5)){
      if (check(list, 6)){
        return true
      }

    }
  }
  else if (check(list, 7)){
    if (check(list, 8)){
      if (check(list, 9)){
        return true
      }
    }
  }
}

function checkDiagonalWin1(list) {
  if(check(list, 1)){
    if(check(list, 5)){
      if(check(list, 9)){
        return true;
      }
    }
  }
}

function checkDiagonalWin2(l) {
  if(check(l, 3)){
    if(check(l, 5)){
      if(check(l, 7)){
        return true;
      }
    }
  }
}

function checkCatsGame(l) {
    var x;
    for (x in [1,2,3,4,5,6,7,8,9]){
	if (!check(l, x)){
	    return false;
	}
    }
    return true;
}


function startGame(){
    do {
    player = prompt("Would you like to be an x or an o? (enter x or o)");
    player = player.toUpperCase();
  } while (player != 'X' && player != 'O');

}

