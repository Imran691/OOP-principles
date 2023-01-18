// This is our base class
// TS allows us to create abstract class
// This class is abstraction of what a country is, means we will provide only relevant data that is required.
// It will not contain any meaningful data
// We initialize the properties in constructor function
// When ever an object is instanciated by using this class constructor function is executed and assigns value to the properties
// We have to pass data of all the properties in constructor function in parameters
// In execution of constructor function we assign actual values using name of constructor properties

// We will add an abstract method in the class. Because it is abstract we will not provide any functionality in the class

// A class can only have one constructor function.

class Country {
    name;
    language;
    population;
    populationGrowthRate;
    constructor(name, language, population, populationGrowthRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
    }
}
// We create a new class by extending base/super class
// Constructor function is created to get data of super class
// By using this constructor we will call "super function"
// If we do not add constructor function in extended class, the constructor function of super class will be called while creating an object using etended class
// If we create constructor function of extended class, we have to call "super function"
// "Super" is just renaming the constructor function of "super/parent class"
// "Super" calls the constructor of "super/parent" class. So we need to provide properties of super class as parameters in "super function"
// We will have to implement the method of parent class in extended class
class OICCountriy extends Country {
    constructor(name, language, population, populationGrowthRate) {
        super(name, language, population, populationGrowthRate);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);
Pakistan.populationGrowth();
console.info(Pakistan);
let UAE = new OICCountriy("UAE", "Arabic", 5000000, 1);
export {};
//console.info(UAE)
