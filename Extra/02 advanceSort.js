/*
let markList = [10,15,35,5,2,56];

let sortedList = markList.sort();  //String sort - Sort will always converts values into string and then sort based on ASCII code
console.log(sortedList);

let sortedList = markList.sort( (a,b) => a-b);  //Numeric sort 
console.log(sortedList);
*/

/*
let countryList = ['India','Pakistan','Bangladesh','Japan','USA','Russia'];

function myShort(a,b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

let sortedCountryList = countryList.sort(myShort);
console.log(sortedCountryList);
*/

function movieReleaseList(a,b) {
    let sortedMovieList = [
        'Man',
        'Dhadkan',
        'OM Shanti OM',
        'Happy New Year',
        'Pathan'
    ];

    return (sortedMovieList.indexOf(a) - sortedMovieList.indexOf(b));
} 

let movieList = [
    'Pathan',
    'Happy New Year',
    'Dhadkan',
    'OM Shanti OM'
];

let sortedList = movieList.sort(movieReleaseList);
console.log(sortedList);