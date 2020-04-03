var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.FName = firstName;
        this.LName = lastName;
        this.Age = age;
        this.PhoneNum = phoneNumber;
        this.State = state;
        this.Zip = zipCode;
        this.Occu = occupation;
    }
    Person.prototype.details = function () {
        return this.FName + this.LName + this.Age + this.PhoneNum + this.State + this.Zip + this.Occu;
    };
    return Person;
    document.getElementById("para").innerHTML = Person();
}());
