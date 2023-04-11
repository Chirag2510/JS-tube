//Importing User class from 06classjs.js file 

//import User from "./06classjs";   //This can be used in many frameworks so remember this as well
const User = require("./06classjs.js");

const chirag = new User("chirag","chiragpatel41296@gmail.com");

console.log(chirag.getInfo());

chirag.enrollCourse("ReactJS Bootcamp");
chirag.enrollCourse("AngularJS Bootcamp");

let courses = chirag.getCourseList();

courses.forEach((c) => console.log(c));