//fetch returns the Promise and after that we can define unlimited 'then' statements 
//Returned value from first 'then' will be passed to next 'then' statement 
//If any error occures in between then it goes into 'catch' statement
/*
fetch()
.then()
.then()
.then()
.catch()
*/

//Fetching the api response - Always use single quote while passing api in fetch
fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    // console.log("API: ",response.json()); //Converting the response in JSON format
    return response.json();
})
.then((data) => {
    // console.log("DATA: ", data);
    var joke = data.value;
    console.log("JOKE: ",joke);
})
.catch()