// We will add a method in our base class named: greeting = "Hello"
// We will add a method in our derived class named: greeting = "Assalam-o-Alaikum"
// Now we will have same method but its behaviour is different for both objects: poly morphism

class Country {
    public name: string;
    public language: string;
    public population: number;
     
    constructor(
      name: string,
      language: string,
      population: number,

    ) {
      this.name = name;
      this.language = language;
      this.population = population;
    }

    public greeting(){
        return "Hello"
    }
  }


  class OICCountriy extends Country {
    constructor(
      name: string,
      language: string,
      population: number,
    ) {
      super(name, language, population);
    }

    public greeting(): string {
        return "Assalam-o-Alaikum"
    }
  
  }

  let Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000);
console.info(Pakistan);
console.log(Pakistan.greeting());

let China = new Country("China", "Mandiran", 2000000000)
console.info(China)
console.log(China.greeting());