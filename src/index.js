// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

let veggie = 'carrot';
veggie = 'onion';
console.log(veggie);

//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")
const animals = ['tiger', 'panda', 'raccoon'];
animals.push('oppossum')
console.log(animals);

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True
const dog = {
  'name': 'Sprinkles',
  'age': 3,
};

dog.isFriendly = true;
console.log(dog);

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

// for animal in animals:
//    print(animal)

// for k, v in dog.items():
//    print(f"{k}: {v}")

const num = 5;

for (let i = 0; i < num; i++) {
  console.log(i);
};

for (const animal of animals) {
  console.log(animal);
};

for (const key in dog) {
  console.log(`${key}: ${dog[key]}`);
//   console.log(key + ':' + dog[key]);
};


//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration
const fizzbuzz = function(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

console.log(fizzbuzz(5));

//
// ES6 way: Function Expression

//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  toString() {
    return `${this.name} is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(name, trick) {
    super('dog', name);
    this.trick = trick;
  }

  toString() {
    return `${super.toString()} that can ${this.trick}`;
  }
}

let bob = new Dog('Bob', 'roll over');
console.log(bob.toString());

let charlie = new Animal('cat', 'Charlie');
console.log(charlie.toString());
