
// bind() Method:
// -> the bind() method, an object can borrow a method from another object.
// -> the bind() method take an object as an first argument and create a new  function.


const pestoDeveloper = {
    firstName : 'Lavesh',
    lastName  : 'Kumbhalkar',
    developer : 'Backend'
}

const pestoDeveloper2 = {
    firstName : 'Durgesh',
    lastName  : 'Rokde',
    developer : 'Software'
}


// company   : 'Great Place It Services',
// languages : 'HTML, CSS, JAVASCRIPT, PHP, MySQL'

function description(company, languages){
    console.log(`${this.firstName} ${this.lastName} working as a ${this.developer} Developer in ${company}. I am Excellent in the field of Software Developer to deliver to the best of my ability. Sound Knowledge of using ${languages} or many more. My goal is to get job in reputed companies for effective contribution to an organization for a bright and rewarding career`);
}
//using bind function
let newPestoDeveloper = description.bind(pestoDeveloper); 
//using bind function

newPestoDeveloper('Great Place It Services','HTML, CSS, JAVASCRIPT, PHP, MySQL');

let newPestoDeveloper2 = description.bind(pestoDeveloper2); 
//using bind function

newPestoDeveloper2('Great Place It Services','HTML, CSS, JAVASCRIPT');

