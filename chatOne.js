// Define the constructor function
function Animal(name, type) {
    this.name = name;
    this.type = type;
  }
  
  // Add a method to the constructor function's prototype
  Animal.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  // Use the constructor function to create an object
  var dog = new Animal("Buddy", "dog");
  
  // Use the object created with the constructor function as a prototype for other objects
  var cat = Object.create(dog);
  cat.name = "Fluffy";
  cat.type = "cat";
  
  // The cat object inherits the sayHello() method from the dog object
  cat.sayHello(); // Output: "Hello, my name is Fluffy"