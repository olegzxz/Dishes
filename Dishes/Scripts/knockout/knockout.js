﻿//function AppViewModel() {
//    this.firstName = ko.observable("Bert");
//    this.lastName = ko.observable("Bertington");
//    this.fullName = ko.computed(function () {
//        return this.firstName() + " " + this.lastName();
//    }, this);
//}

//// Activates knockout.js
//ko.applyBindings(new AppViewModel());



// Class to represent a row in the seat reservations grid
//$.get("/mail", { mailId: this.params.mailId }, self.chosenMailData);
//function SeatReservation(name, initialMeal) {
//    var self = this;
//    self.name = name;
//    self.meal = ko.observable(initialMeal);
//}

//// Overall viewmodel for this screen, along with initial state
//function ReservationsViewModel() {
//    var self = this;

//    // Non-editable catalog data - would come from the server
//    self.availableMeals = [
//        { mealName: "Standard (sandwich)", price: 0 },
//        { mealName: "Premium (lobster)", price: 34.95 },
//        { mealName: "Ultimate (whole zebra)", price: 290 }
//    ];

//    self.addSeat = function () {
//        self.seats.push(new SeatReservation("", self.availableMeals[0]));
//    }
//    // Editable data
//    self.seats = ko.observableArray([
//        new SeatReservation("Steve", self.availableMeals[0]),
//        new SeatReservation("Bert", self.availableMeals[0])
//    ]);
//}




// Overall viewmodel for this screen, along with initial state
function ViewModel() {
    var self = this;

    self.seats = ko.observableArray();

  
    self.updateSeats = function (data) {
       // self.seats.clean();
        self.seats(data);
    };

    
    //self.addSeat2 = function () {
    //    self.seats()[0].name("dd");
    //};

    //this.fullName = ko.computed(function () {
    //    return this.seats().length;
    //}, this);

}

//ko.applyBindings(new ViewModel());