// Properties of base class are inhereted to derived class and properties of derived class are inhereted to the objct being created by using that class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrowthRate, religion) {
        this.planet = "Earth"; // This property will be inhereted to derived class as well as object created by using that class.
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this.religion = religion;
    }
    return Country;
}());
var OICCountriy = /** @class */ (function (_super) {
    __extends(OICCountriy, _super);
    function OICCountriy(name, language, population, populationGrowthRate, religion) {
        if (religion === void 0) { religion = "Islam"; }
        return _super.call(this, name, language, population, populationGrowthRate, religion) || this;
    }
    OICCountriy.prototype.populationGrowth = function () {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    };
    return OICCountriy;
}(Country));
var Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);
