// Properties of base class are inhereted to derived class and properties of derived class are inhereted to the objct being created by using that class

abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    public planet = "Earth";             // This property will be inhereted to derived class as well as object created by using that class.
    public religion: string;   // Added as place holder
  
    constructor(
      name: string,
      language: string,
      population: number,
      populationGrowthRate: number,
      religion: string,

    ) {
      this.name = name;
      this.language = language;
      this.population = population;
      this.populationGrowthRate = populationGrowthRate;
      this.religion = religion;
    }
  }


  class OICCountriy extends Country {
    constructor(
      name: string,
      language: string,
      population: number,
      populationGrowthRate: number,
      religion = "Islam",          // This property will be inhereted to objets created by using this class
      
    ) {
      super(name, language, population, populationGrowthRate, religion);
    }
  
    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population
    }
  }

  let Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);
