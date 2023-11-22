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
var Tasse = /** @class */ (function () {
    function Tasse(_redditoLordo) {
        this.redditoLordo = _redditoLordo;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Lavoratore.prototype.utileTasse = function () {
        return this.redditoLordo - (this.redditoLordo * 0.22);
    };
    Lavoratore.prototype.getTasseIperf = function () {
        return;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return;
    };
    return Lavoratore;
}(Tasse));
console.log("professionista");
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Professionista.prototype.getTasseIperf = function () {
        return (this.utileTasse() - (this.utileTasse() * 0.05));
    };
    Professionista.prototype.getTasseInps = function () {
        return this.utileTasse() - (this.utileTasse() * 0.25);
    };
    Professionista.prototype.getRedditoNetto = function () {
        return this.utileTasse() - this.getTasseIperf() * 0.05 - this.getTasseInps() * 0.25;
    };
    return Professionista;
}(Lavoratore));
var professione1 = new Professionista(40000);
console.log("reddito lordo: ".concat(professione1.utileTasse()));
console.log("tasse irpef: ".concat(professione1.getTasseIperf()));
console.log("tasse inps: ".concat(professione1.getTasseInps()));
console.log("reddito netto: ".concat(professione1.getRedditoNetto()));
console.log("/////////////////////////////////////////////////////////////////////  ");
console.log("artigiano");
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Artigiano.prototype.getTasseIperf = function () {
        return (this.utileTasse() - (this.utileTasse() * 0.15));
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.utileTasse() - (this.utileTasse() * 0.15);
    };
    Artigiano.prototype.getRedditoNetto = function () {
        return this.utileTasse() - this.getTasseIperf() * 0.15 - this.getTasseInps() * 0.15;
    };
    return Artigiano;
}(Lavoratore));
var artigiano1 = new Professionista(40000);
console.log("reddito lordo: ".concat(artigiano1.utileTasse()));
console.log("tasse irpef: ".concat(artigiano1.getTasseIperf()));
console.log("tasse inps: ".concat(artigiano1.getTasseInps()));
console.log("reddito netto: ".concat(artigiano1.getRedditoNetto()));
console.log("/////////////////////////////////////////////////////////////////////  ");
console.log("commerciante");
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Commerciante.prototype.getTasseIperf = function () {
        return (this.utileTasse() - (this.utileTasse() * 0.15));
    };
    Commerciante.prototype.getTasseInps = function () {
        return this.utileTasse() - (this.utileTasse() * 0.35);
    };
    Commerciante.prototype.getRedditoNetto = function () {
        return this.utileTasse() - this.getTasseIperf() * 0.15 - this.getTasseInps() * 0.35;
    };
    return Commerciante;
}(Lavoratore));
var commerciante1 = new Professionista(40000);
console.log("reddito lordo: ".concat(commerciante1.utileTasse()));
console.log("tasse irpef: ".concat(commerciante1.getTasseIperf()));
console.log("tasse inps: ".concat(commerciante1.getTasseInps()));
console.log("reddito netto: ".concat(commerciante1.getRedditoNetto()));
