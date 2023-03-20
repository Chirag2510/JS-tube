//getComputedStyle - Used to get CSS property of any element. It is a method of window object. 
//style - Used to set CSS property for any element. It is a methond of element.

const  red = document.querySelector(".red");
const  cyan = document.querySelector(".cyan");
const  orange = document.querySelector(".orange");
const  violet = document.querySelector(".violet");
const  pink = document.querySelector(".pink");

const  center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

//background-color --> backgroundColor
//font-family --> fontFamily

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const backgroundColor = getBGColor(red);

// console.log(backgroundColor);

//addEventListener - Used to invoke any event for particular element 
//It is a method of element and gets the event name and callback function as an argument

// red.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = backgroundColor;
// })

var magicElement = (element,bgColor) => {
    element.addEventListener('mouseenter', () => {
        center.style.backgroundColor = bgColor;
    })
}

magicElement(red,getBGColor(red));
magicElement(cyan,getBGColor(cyan));
magicElement(pink,getBGColor(pink));
magicElement(orange,getBGColor(orange));
magicElement(violet,getBGColor(violet));
