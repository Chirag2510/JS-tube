//Need to read about Object from MDN

var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    }
}

//'Object' is a superclass of all objects. So, it will allow us to create an instance of any object 
//and also allows to access some inbuilt properties which is included under 'proto'  
//1
var chirag = Object.create(User);

chirag.name = 'Chirag';
chirag.getUserName();

//2 - Not recommended method - rarely used
var pratiksha = Object.create(User, {
    name: {value: "Pratiksha"},
    courseCount: {value: 3}
})

pratiksha.getUserName();
console.log(pratiksha.courseCount);