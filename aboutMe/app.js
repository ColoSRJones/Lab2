'use strict'


var correctCount = 0;

//Question 1
var answer1 = prompt('Fiedler prefers his first name pronounced Andy. True/False, (T/F)');
var sanitizedAnswer1 = answer.toUpperCase().trim();
if (sanitizedAnswer1 === 'TRUE'|| sanitizedAnswer1 ==='T') {
    alert('Yes. Dont get cocky, kid. Only the first question.');
    correctCount+= 10;
        elseif (sanitizedAnswer1 === 'F' || sanitizedAnswer1 ==='FALSE') {
        else {
         alert('What was that!? Maybe just give up now.');

    //Question 2
    var answer2 = prompt('Fiedler is an easily pronounced name. True/False (T/F)');
    var sanitizedAnswer2 = answer2.toUpperCase().trim()
    if (sanitizedAnswer2 === 'TRUE'|| sanitizedAnswer2 ==='T') {
        alert('Yes. Whatever. Good job.');
        correctCount+= 10;
        elseif (sanitizedAnswer2 === 'F' || sanitizedAnswer2 === "FALSE") {
        {
            alert('Yeahhhhh, no.');
        }

        //Question 3
        var answer3 = prompt('Fiedler is not a huge fan of his doggo. (T/F)');
        var sanitizedAnswer3 = answer3.toUpperCase().trim()
            if (sanitizedAnswer3 === 'TRUE'|| sanitizedAnswer3 ==='T') {
                alert('Yeah cuz he a thieving connieving monster');
                correctCount+= 10;
                elseif (sanitizedAnswer3 === 'F' || sanitizedAnswer3 === "FALSE") {
                {
                    alert('Yikes.');
                }

            //Question 4
            var answer4 = prompt('Fiedler is a people person. (T/F)');
            var sanitizedAnswer4 = answer4.toUpperCase().trim()
                if (sanitizedAnswer4 === 'TRUE'|| sanitizedAnswer4 ==='T') {
                    alert('That is really special.');
                    correctCount+= 10;
                    elseif (sanitizedAnswer4 === 'F' || sanitizedAnswer4 === "FALSE") {
                    {
                        alert('Not so much');
                }

            //Question 5
            var answer5 = prompt('Fiedler is a people person. (T/F)');
            var sanitizedAnswer5 = answer5.toUpperCase().trim()
                if (sanitizedAnswer5 === 'TRUE'|| sanitizedAnswer5 ==='T') {
                    alert('Neat.');
                    correctCount+= 10;
                    elseif (sanitizedAnswer5 === 'F' || sanitizedAnswer5 === "FALSE") {
                       { alert('Nah. Pay attention next time.');
                    }

//create a funtion called say hello that take in zero Parameters,
//returns a console.log that says hello

function sayHello() {
    return console.log('Hello');
}

function toSum(num1, num2, num3){
return num1 + num2 +num3;
}
console.log(toSum(2,3));

//anon functions
var favMovie =function(){
return "Captain Marvel";
}
favMovie();

//return
//use to stop executuion of a function and return as value back to the caller
//console.log is not a return statement

