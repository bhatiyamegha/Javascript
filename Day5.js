class Movie {

  // a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  getPG(movArr) {
    return movArr.filter((m) => m.rating === "PG");
  }
}

// d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const film1 = new Movie("Baasha", "Sathya Movies", "PG13");
const film2 = new Movie("Padaiyappa", "Arunachala Cine Creations");
const film3 = new Movie("Endhiran", "Sun Pictures");
const film4 = new Movie("Chandramukhi", "Sivaji Productions", "PG13");
console.log(new Movie().getPG([film1, film2, film3, film4]));


class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  circle() {
    console.log("circle with no specified radius and color");
  }
  circle(radius) {
    console.log(`circle with provided radius ie., ${radius}`);
  }
  circle(radius, color) {
    console.log(`circle with provided radius ${radius} and color ${color}`);
  }
  get radius() {
    return this._radius;
  }
  set radius(newRadius) {
    if (this.radius) {
      throw new Error(
        "radius value is already set for this circle and cannot be modified"
      );
    }
    this._radius = Number(newRadius);
  }
  get color() {
    return this._color;
  }
  set color(newcolor) {
    if (this.color) {
      throw new Error(
        "color is already set for this circle and cannot be modified"
      );
    }
    this._color = newcolor;
  }
  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

let circle1 = new Circle("10", "blue");
//circle1.color = "orange"
//circle1.radius = 20;
console.log(circle1.getArea());

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
  }
}

// Create instances of the Person class
const person1 = new Person("Namo", 73, "India");

// Display details of person1
console.log(person1.displayDetails());

class UberRide {
  constructor(source, destination, distance = 10) {
    this.source = source;
    this.destination = destination;
    this.distance = distance;
  }
  costPerKm() {
    return 30;
  }
  calculateFare() {
    if (this.distance < 10) {
      this.distance = 10;
    }
    const fare = Number(this.distance) * this.costPerKm();
    return fare;
  }
  displayFare() {
    if (this.distance <= 10) {
      console.log(
        `Distance between ${this.source} and ${this.destination} is less than 10 km. you are charged with base fare`
      );
    }
    console.log(`Fare is Rs.${this.calculateFare()}`);
  }
}

const raid1 = new UberRide("Tambaram Sanitorium", "Tambaram", 5);
raid1.displayFare();
