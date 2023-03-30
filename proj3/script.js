/*
Node elements in javascript 
1 - Element     - <li></li>
2 - List of class - <li class="class1 class2 class3"></li>
3 - Text Node - <li>Text node</li>
*/

const courses = [
    {
        name: "ReactJS course",
        price: "2.3"
    },
    {
        name: "NodeJS course",
        price: "2.2"
    },
    {
        name: "FullStack course",
        price: "2.5"
    },
    {
        name: "MERN stack course",
        price: "2.4"
    }
]

{/* <ul class="list-group">
    <li class="list-group-item">
        Javascript course<span class="float-right">$2.1</span>
    </li>
</ul> */}

function generateList() {

    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""; //Reset the InnerHTML of ul element

    courses.forEach( (course) => {

        const li = document.createElement("li"); 
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span"); 
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

// generateList();
window.addEventListener("load",generateList); //Same meaning like Calling a function 

const btn = document.querySelector(".sort-btn");
btn.addEventListener("click", () => {
    //Number sorting 
    courses.sort( (a, b) => a.price - b.price);      //Ascending   
    // courses.sort( (a, b) => b.price - a.price);         //Decending


    //String sorting
    // courses.sort((a,b) => {
    //     if (a.name > b.name) {
    //         return 1;               //-1 for decending
    //     }

    //     if (a.name < b.name) {
    //         return -1;              //1 for decending
    //     }

    //     //both values are same
    //     return 0;
    // })
    generateList();
})