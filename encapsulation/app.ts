// So far we have only used public properties
// Now We shall add some private properties in our class
// For private properties it is convension to use "_" befor the name of property

// To get/access private data out side the class we have to add "get" method in our constructor function. As in line # 32

// To update private data we have to add "set" method in our constructor.

abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    private _statePrivacy: string;
    private _leader: string;
  
    constructor(
      name: string,
      language: string,
      population: number,
      populationGrowthRate: number,
      statePrivacy: string,
      leader: string,
    ) {
      this.name = name;
      this.language = language;
      this.population = population;
      this.populationGrowthRate = populationGrowthRate;
      this._statePrivacy = statePrivacy;
      this._leader = leader;
    }
  
    public abstract populationGrowth(): number;

    public get privateData(): string{
        return this._statePrivacy
    }

    public set leader (newLeader: string){
        this._leader = newLeader;
    }
  }


  class OICCountriy extends Country {
    constructor(
      name: string,
      language: string,
      population: number,
      populationGrowthRate: number,
      statePrivacy: string,
      leader: string
    ) {
      super(name, language, population, populationGrowthRate, statePrivacy, leader);
    }
  
    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population
    }
  }

  let Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000, 2.5, "Pakistan's Private data", "Pakistan's leader");
console.info(Pakistan);

// We can update/change value of private properties out side of the class
Pakistan.name = "Islamic Republic of Pakistan"

// We can not access/update private properties out side of the class
// Read only can be read out side of the class but private can't even be read

// Error: Property '_statePrivacy' is private and only accessible within class 'Country'.
// Pakistan._statePrivacy = "Secrets" 

// Sucess, because we have added "get" method in our constructor to get private data
console.info(Pakistan.privateData);

// Error: Property '_leader' is private and only accessible within class 'Country'
//Pakistan._leader = "New Leader"

// Sucess: because we have used set method in constructor
Pakistan.leader = "New Leader"

Pakistan.populationGrowth();
console.info(Pakistan);