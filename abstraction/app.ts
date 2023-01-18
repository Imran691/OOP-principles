// This is our base class
// TS allows us to create abstract class
// This class is abstraction of what a country is, means we will provide only relevant data that is required.
// It will not contain any meaningful data

// We initialize the properties in constructor function
// When ever an object is instanciated by using this class constructor function is exected and assigns value to the properties
// We have to pass data of all the properties in constructor function in parameters
// In execution of constructor function we assign actual values using name of constructor properties

// We will add an abstract method in the class. Because it is abstract we will not provide any functionality in the class

// A class can only have one constructor function.

abstract class Country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
  }

  public abstract populationGrowth(): number;
}

// We create a new class by extending base/super class
// Constructor function is created to get data of super class
// By using this constructor we will call "super function"
// If we do not add constructor function in extended class, the constructor function of super class will be called while creating an object using etended class
// If we create constructor function of extended class, we have to call "super function"
// "Super" is just renaming the constructor function of "super/parent class"
// "Super" calls the constructor of "super/parent" class. So we need to provide properties of super class as parameters in "super function"

// We will have to give functionality to abstract method of parent class in extended class

class OICCountriy extends Country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    super(name, language, population, populationGrowthRate);
  }

  public populationGrowth(): number {
      this.population = this.population * (1 + this.populationGrowthRate / 100);
      return this.population
  }
}


let Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);

Pakistan.populationGrowth();
console.info(Pakistan);

let UAE = new OICCountriy("UAE", "Arabic", 5000000, 1);
//console.info(UAE)


// From the book
// We create a base class that doesn't declare implementation of some methods
// instead expects a subclass to provide them
// Abstract method declaration skip providing a body in abstract base class: instead these are declared the same way an interface would be

abstract class School{
  readonly name: string;
  constructor(name: string){
    this.name = name;
  }
  abstract getStudentTypes(): string[];
}

class PreSchool extends School{
  getStudentTypes(): string[] {
    return ["preschooler"];
  }
}

// An abstract class can't be instantiated directly
// As it doesn't have definitions for some methods that its implementation may assume to exist
let school: School;
school = new PreSchool("Sunny Side day care")

//school = new School("Somewhere")  // Error: Cannot create an instance of an abstract class.

// Only non abstract ("concrete") classes can be instantiated

// An abstract class can be used as type annotation to indicate values must adhere to the class
// But creating new class must be done with subclasses.

//Abstract classes are used in frameworks where consumers are expected to fill out details of a class.