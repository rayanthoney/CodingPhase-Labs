// var person  = function() {
//     this.name = 'Ray'
//     this.lastName = "Anthoney"
// }

// var test1 = new person()
// console.log(test1)


// var person  = function(name, last) {
//     this.name = name
//     this.lastName = last
// }

// var test1 = new person('Ray', 'Anthoney')
// console.log(test1.lastName)

var carClass  = function(name, company, doors, price) {
    this.name = name
    this.company = company
    this.doors = doors
    this.price = price
    this.printName = function(){
        return this.name
    }

}
carClass.prototype.greeting = function(){
    console.log('Hi Welcome to Ugly Duckling would you like to drive a ' + this.name + ' its a brand new ' + this.company + ' for the price of ' + this.price)
}

var bmw = new carClass('M3', 'BMW', 2, '42,000' )
var cadillac = new carClass('STS', 'Cadillac', 4, '85,000' )
var honda = new carClass('Accord', 'Honda', 2, '31,000' )
var audi = new carClass( 'A8', 'Audi', 4, '72,000' )


// carClass.prototype.printName = function(){
//     return this.name
// }
