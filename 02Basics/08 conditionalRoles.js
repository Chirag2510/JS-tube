var role = 'admin';

switch (role) {
    case "user":
        console.log("It's a user");
        break;
    case "admin": 
        console.log("Its a admin user");
        break;
    case "subadmin": 
        console.log("Its a subadmin user");
        break;
    default: 
        console.log("Its a new user");
        break;

}

//break is compulsory in js not in all other languages