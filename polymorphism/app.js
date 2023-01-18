// We will add a method in our base class named: greeting = "Hello"
// // We will add a method in our derived class named: greeting = "Assalam-o-Alaikum"
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
    function Country(name, language, population) {
        this.name = name;
        this.language = language;
        this.population = population;
    }
    Country.prototype.greeting = function () {
        return "Hello";
    };
    return Country;
}());
var OICCountriy = /** @class */ (function (_super) {
    __extends(OICCountriy, _super);
    function OICCountriy(name, language, population) {
        return _super.call(this, name, language, population) || this;
    }
    OICCountriy.prototype.greeting = function () {
        return "Assalam-o-Alaikum";
    };
    return OICCountriy;
}(Country));
var Pakistan = new OICCountriy("Pakistan", "Urdu", 300000000);
console.info(Pakistan);
console.log(Pakistan.greeting());
var China = new Country("China", "Mandiran", 2000000000);
console.info(China);
console.log(China.greeting());
