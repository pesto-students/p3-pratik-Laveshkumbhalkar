
// apply() Method:
// -> The apply() method, you can write a method that can be used on different objects.
// -> The apply() method is similar to the call() method

// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


const pestoDeveloper = {
    firstName : 'Lavesh',
    lastName  : 'Kumbhalkar',
    developer : 'Backend', 
    description : function(company, languages){
        console.log(`${this.firstName} ${this.lastName} working as a ${this.developer} Developer in ${company}. I am Excellent in the field of Software Developer to deliver to the best of my ability. Sound Knowledge of using ${languages} or many more. My goal is to get job in reputed companies for effective contribution to an organization for a bright and rewarding career`);
    }
}

//pestoDeveloper.description();

const pestoDeveloper2 = {
    firstName : 'Durgesh',
    lastName  : 'Rokde',
    developer : 'Software'
}

//using apply function
pestoDeveloper.description.apply(pestoDeveloper2, ['GPIT', 'HTML CSS']); 
//using apply function