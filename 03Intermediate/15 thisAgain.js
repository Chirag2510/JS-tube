//----Must remember-----
//For all regular function calls, 'this' points to window object or global object
//For all object function calls, 'this' points to object itself 

console.log(this);

const user = {
    firstName: 'Chirag',
    lastName: 'Patel',
    courseCount: 4,
    getCourse: function () {                
        console.log("line 12", this);   //Shows object itself

        function course() {
            console.log("line 15", this);   //Shows global object 
        }
        course();   //regular function call 
    }
}

//object function call 
user.getCourse();