const chirag = {
    firstName: "Chirag",
    lastName: "Patel",
    role: "Admin",
    courseCount: 5,
    getInfo: function () {
        console.log(`
        Your first name is ${this.firstName}
        Your last name is ${this.lastName}
        Your role is ${this.role}
        And you have purchased ${this.courseCount} courses
        `);
    }
}

// chirag.getInfo();

const pratiksha = {
    firstName: "Pratiksha",
    lastName: "Bhatt",
    role: "Sub-Admin",
    courseCount: 6
}

//When we want to use some common code or function between two objects then we can use this.
//bind - Used to bind two objects. This will return a reference. 
//call - This is also used to bind two objects but this will call the directly instead of returing a reference.

var pratikshaInfo = chirag.getInfo.bind(pratiksha);     //just getting a reference
pratikshaInfo();     //Need to call 
// chirag.getInfo.bind(pratiksha)();    //This way we can direct call it as well 

chirag.getInfo.call(pratiksha); //Directly calling 