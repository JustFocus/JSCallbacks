Function.prototype.myBind = function(context){
  console.log(this);
  var fn = this;
  var fnCall = function () {
    fn.apply(context);
    console.log(this);
  };
  return fnCall;
};


function Lamp() {
   this.name = "a lamp";
}

var turnOn = function() {
   console.log("Turning on " + this.name);
};

var lamp = new Lamp();

turnOn(); // should not work the way we want it to

var boundTurnOn = turnOn.bind(lamp);
var myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
