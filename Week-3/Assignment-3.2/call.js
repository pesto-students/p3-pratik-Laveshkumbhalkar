
// Call() Method:
// -> The call() method is a predefined JavaScript method.
// -> With call(), an object can use a method belonging to another object.

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
    developer : 'Software',
    company   : 'Great Place It Services',
    languages : 'HTML, CSS, JAVASCRIPT, PHP, MySQL'
}

//using call function
pestoDeveloper.description.call(pestoDeveloper2, pestoDeveloper2.company, pestoDeveloper2.languages); 
//using call function