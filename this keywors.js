// The this value

// Typically, methods need to access other properties of the object.

// For example, you may want to define a method that returns the full name of the person object by concatenating the first name and last name.

// Inside a method, the this value references the object that invokes the method. Therefore, you can access a property using the this value as follows:

// this.propertyName
// Code language: JavaScript (javascript)

// The following example uses the this value in the getFullName() method






let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());