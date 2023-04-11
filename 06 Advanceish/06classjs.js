//Whenever you are creating any file for defining the class then avoid to use space in file name 
//because we'll be using this file name in another file

//We can't use let,var,const,function keywords in class so directly declare the variables 

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email; 
    }

    //Private function/method
    // static getInfo(){
    //     return {name: this.name, email: this.email};
    // }
    getInfo(){
        return {name: this.name, email: this.email};
    }

    #courseList = [];       //defining as Private variable

    //setter method
    enrollCourse(course){
        this.#courseList.push(course);
    }

    //getter method 
    getCourseList() {
        return this.#courseList;
    }
}

//Exporting this class to all the files means we can access this class from any file
module.exports = User;


//Setter and getter methods are generally used to set and access the private property of class
//# - Private variable
//static - Private function 

/*
const rock = new User("Rock","rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("AngularJS bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);     //This will return as undefined as it's private variable and can't access directly from outside of class
*/

class subAdmin extends User{
    constructor(name,email) {
        super(name,email);
    }
    getAdminInfo(){
        return "I am a subadmin";
    }

    //Overriding a function
    getInfo() {
        console.log(super.getInfo());           //Accessing parent function using Super keyword 
        return "This is a subadmin method";
    }
}

const tom = new subAdmin("Tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());


