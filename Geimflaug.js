//Ólafur Ásdísarson
//4.2.2018
//Verkefni 1-2 FORR3JS05DU
function Geimflaug() {
  this.name =  "SpaceRacer";
  this.life = 10;
  this.showName = function() {
    alert('This is ' + this.name + '.');
  };
}

var geimflaug1 = new Geimflaug();
var geimflaug2 = new Geimflaug();
var geimflaug3 = new Geimflaug();
geimflaug3.name = "NewRacer";
geimflaug3.showName();

Geimflaug.prototype.speed = 5;
Geimflaug.prototype.fly = function(){
  if (this.speed > 4){
	this.speed = this.speed + 1;
	}
}

var geimflaug4 = new Geimflaug();
geimflaug4.damage = function(){
  this.life = this.life - 1;
};
