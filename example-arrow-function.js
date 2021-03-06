var names = ["Jaime", "Crazy", "Nut"];

names.forEach(function(name) {
  console.log("forEach", name);
});

names.forEach((name) => {
  console.log("=>", name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";
console.log(returnMe("Jaime"));

var person = {
  name: "Jaime",
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + " says hi to " + name);
    });
  }
};

person.greet();

var personArrow = {
  name: "Jaime",
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + " says hi to " + name);
    });
  }
};

personArrow.greet();

function add(a,b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return a + b;
}

console.log(addStatement(4,7));

var addExpression = (a,b) => a + b;

console.log(addExpression(2,2));
