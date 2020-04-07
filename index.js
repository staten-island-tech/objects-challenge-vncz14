//Objects notes
/* const Omor = { //curly brackets = it is an object
    name: "Omor",
    dob: 2003,
    graduated: false,
    age: function() {
        console.log(this);
        return 2020 - this.dob; // "this" refers to the current thing it is inside
    }
} //reference the whole object with Omor     reference one property with Omor.name */

/* const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge",
            age: 33
        },
        son: {
            name: "Bart",
            age: 10
        },
    },
    pets: ["Cat", "Dog"]
} */




// Destructuring notes

/* const Sandra = {
    name: "Sandra",
    age: "17",
    student: true,
    year: "junior",
    graduated: false
}

const {name, year} = Sandra; // you can only take things you need from something using this
// const student = {}; //empty object
// student.name = Sandra.name;
const student = Sandra; // this is not a copy, what we're saying is "student" is just a reference to "Sandra." Anything I do to "student" will happen to "Sandra." */





// Challenges
/* const presidents = [
    {name: "Donald Trump", terms: 1, party: "R"},
    {name: "Barack Obama", terms: 2, party: "D"},
    {name: "George W. Bush", terms: 2, party: "R"},
    {name: "Bill Clinton", terms: 2, party: "D"}, 
    {name: "George H. W. Bush", terms: 1, party: "R"},   
    {name: "Ronald Reagan", terms: 2, party: "R"},
    {name: "Jimmy Carter", terms: 1, party: "D"},
    {name: "Gerald Ford", terms: 1, party: "R"},
    {name: "Richard Nixon", terms: 2, party: "R"},
    {name: "John F. Kennedy", terms: 1, party: "D"},
    {name: "Lyndon Johnson", terms: 2, party: "D"},
    {name: "Dwight Eisenhower", terms: 2, party: "R"}
];

// 1. filter all Democratic presidents
const democrats = presidents.filter(function(el){
    return el.party === "D";
  }
);

// 2. filter all Republican, 1 term presidents
const republicanOneTerms = presidents.filter(function(el){
    return el.party === "R" && el.terms === 1;
  }
);

// 3. filter last three elements of the array
const lastThree = presidents.slice(Math.max(presidents.length - 3, 0));

// 4. log all democrat, 2 term presidents
const democratTwoTerms = presidents.filter(function(el){
    return el.party === "D" && el.terms === 2;
  }
);
console.log(democratTwoTerms); */













// The DOM (Document Object Model)
// Basically, changing stuff in HTML with Javascript



/* const headerClass = document.querySelector(".header"); //selects the first element with this condition
const listItemClass = document.querySelectorAll(".list-item"); //selects ALL elements with this condition
//returns a "nodelist," it is NOT an array
const listItemArr = Array.from(listItemClass); //but we can convert it to an array

headerClass.textContent = "test"; */



/* const headerClass = document.querySelector(".header");
const buttonClass = document.querySelector(".button");
buttonClass.addEventListener("click", function(){ 
    headerClass.classList.toggle("decoration");
}); */



/* const background = document.querySelector(".background");
const button = document.querySelector(".button");
const header = document.querySelector(".header");

button.addEventListener("click", function(){
    if(background.style.backgroundColor !== "rgb(255, 0, 0)"){
        background.style.backgroundColor = "rgb(255, 0, 0)";
        header.textContent = "Red";
    } else{
        background.style.backgroundColor = "rgb(0, 0, 255)";
        header.textContent = "Blue";
    }
}) */




// Challenge: 
//use const = R, const = G, const = B to create a button wwith random background color. 
// use math.random and math.floor

const background = document.querySelector(".background");
const button = document.querySelector(".button");

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}   

button.addEventListener("click", function(){ 
    const r = randomInt(256);
    const g = randomInt(256);
    const b = randomInt(256);
    background.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
