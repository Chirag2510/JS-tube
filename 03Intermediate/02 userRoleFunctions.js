//Functions in variable 
//function getUserRole(name,user) {
var getUserRole = function (name,user) {
    switch (user) {
        case "admin":
            return `${name} is admin`;
            break; //This doesn't make any sense
        case "user":
            return `${name} is user`;
            break;
        case "subadmin":
            return `${name} is subadmin`;
            break;  
        default:
            return `${name} is a normal user`; 
            break;
    }
}

console.log(getUserRole("chirag","admin")); 
