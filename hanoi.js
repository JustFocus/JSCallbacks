// var readline = require('readline');
// var reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

var Hanoi = function(){
  this.stacks = new Array(new Array(), new Array(), new Array());
  this.stacks[0] = [1, 2, 3];
};

Hanoi.prototype.promptMoves = function(callback){
  var fromTower = prompt("What stack do you want to move from? ");
  var toTower = prompt("What stack do you want to move to? ");

  var fromT = parseInt(fromTower);
  var toT = parseInt(toTower);

  callback(fromT, toT);
};

Hanoi.prototype.isValidMove = function(startTowerIdx, endTowerIdx){
  if (this.stacks[startTowerIdx].length === 0 ) return false;
  if (this.stacks[endTowerIdx].length === 0 ) return true;
  if (this.stacks[startTowerIdx][0] > this.stacks[endTowerIdx][0]) {
    return false;
  }
  return true;
};

Hanoi.prototype.move = function(startTowerIdx, endTowerIdx){
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    var disc = this.stacks[startTowerIdx].shift();
    this.stacks[endTowerIdx].unshift(disc);
  }
};

Hanoi.prototype.print = function(){
  console.log(this.stacks);
};

Hanoi.prototype.isWon = function(){
  if(this.stacks[1].length === 3 || this.stacks[2].length === 3) return true;
  return false;
};

Hanoi.prototype.run = function(completionCallBack){

  this.print();
  this.promptMoves(this.move.bind(this));
  if (this.isWon()) {
    completionCallBack();
  } else {
    this.run(completionCallBack);
  }

};

 var hanoi = new Hanoi();
 setTimeout(function () {
   hanoi.run(function(){console.log("You Win.");
 });}, 10000);
