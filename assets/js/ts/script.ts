abstract class Tasse {
    redditoLordo: number
    constructor(_redditoLordo: number) {
        this.redditoLordo=_redditoLordo
    }
    abstract utileTasse():any
    abstract getTasseIperf():any
    abstract getTasseInps():any
}
class Lavoratore extends Tasse{
    redditoLordo: number
    constructor(_redditoLordo: number) {
        super(_redditoLordo)
    }
    utileTasse():any {
       return this.redditoLordo - (this.redditoLordo*0.22)
    }
    getTasseIperf():any {
        return
    }
    getTasseInps():any {
        return
    }
    
}
console.log("professionista")

class Professionista extends Lavoratore{
    redditoLordo: number
    constructor(_redditoLordo: number) {
        super(_redditoLordo)
    }
    getTasseIperf():number {
         return  (this.utileTasse() - (this.utileTasse()*0.05))
    }
    getTasseInps() {
        return this.utileTasse()-(this.utileTasse()*0.25)
    }
    getRedditoNetto():any{
        return this.utileTasse() - this.getTasseIperf()*0.05 - this.getTasseInps()*0.25
    }
}
let professione1 = new Professionista(40000)
console.log(`reddito lordo: ${professione1.utileTasse()}`)

console.log(`tasse irpef: ${professione1.getTasseIperf()}`)
console.log(`tasse inps: ${professione1.getTasseInps()}`)
console.log(`reddito netto: ${professione1.getRedditoNetto()}`)
console.log("/////////////////////////////////////////////////////////////////////  ") 
console.log("artigiano")
class Artigiano extends Lavoratore{
    redditoLordo: number
    constructor(_redditoLordo: number) {
        super(_redditoLordo)
    }
    getTasseIperf():number {
         return  (this.utileTasse() - (this.utileTasse()*0.15))
    }
    getTasseInps() {
        return this.utileTasse()-(this.utileTasse()*0.15)
    }
    getRedditoNetto():any{
        return this.utileTasse() - this.getTasseIperf()*0.15 - this.getTasseInps()*0.15
    }
}
let artigiano1 = new Professionista(30000)
console.log(`reddito lordo: ${artigiano1.utileTasse()}`)

console.log(`tasse irpef: ${artigiano1.getTasseIperf()}`)
console.log(`tasse inps: ${artigiano1.getTasseInps()}`)
console.log(`reddito netto: ${artigiano1.getRedditoNetto()}`)
 console.log("/////////////////////////////////////////////////////////////////////  ") 
console.log("commerciante")

class Commerciante extends Lavoratore{
    redditoLordo: number
    constructor(_redditoLordo: number) {
        super(_redditoLordo)
    }
    getTasseIperf():number {
         return  (this.utileTasse() - (this.utileTasse()*0.15))
    }
    getTasseInps() {
        return this.utileTasse()-(this.utileTasse()*0.35)
    }
    getRedditoNetto():any{
        return this.utileTasse() - this.getTasseIperf()*0.15 - this.getTasseInps()*0.35
    }
}
let commerciante1 = new Professionista(45000)
console.log(`reddito lordo: ${commerciante1.utileTasse()}`)

console.log(`tasse irpef: ${commerciante1.getTasseIperf()}`)
console.log(`tasse inps: ${commerciante1.getTasseInps()}`)
console.log(`reddito netto: ${commerciante1.getRedditoNetto()}`)
    