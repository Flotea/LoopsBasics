/* Done in wednesday class:
1. What is a loop?
A function that repeats.

2. What is the syntax of a loop?

for(i = 0; i < 5; i++){

}
initializing
terminating
incrementing

3. Give a few examples.
*/
for(i=1;i<10;i=i+3){
    console.log("Wow, this is so cool.");
}
for(i=1;i<20;i=i+1){
    console.log("Why do I keep repeating myself?");
}
for(i=1;i<10;i=i+1){
    console.log("Stop that.");
}


//4. Create a loop that prints numbers from 0-10.
for(i=0;i<11;i=i+1){
    console.log(i);
}

//5. Create a loop that prints odd numbers from 1-9.
for(i=1;i<10;i=i+2){
    console.log(i);
}

//6. Create a loop that prints multiples of 3 from 3-15.
for(i=3;i<16;i=i+3){
    console.log(i);
}

//7. Create an array that lists 3 things you'd like to accomplish one day.
var iWill = ["make a comic book","buy a house","travel the world"];

//8. Create a loop that prints out each of the things you'd like to accomplish listed in your #7 array.  The loop should print out three
//separate sentences, like this:
//One day, I'd like to _element 1_.
//One day, I'd like to _element 2_.
//One day, I'd like to _element 3_.
for(i=0;i<iWill.length;i++){
    console.log("One day, I'd like to "+ iWill[i]+".");
}

//9. Create an array that lists 3 places you'd like to visit one day.
var iVisit = ["Austria","Japan","New York"];

//10. Create a function (with a loop) that prints out each of the places you'd like to visit listed in your #9 array.  The function
//should print out three separate sentences, like this:
//One day, I'd like to go to _element 1_.
//One day, I'd like to go to _element 2_.
//One day, I'd like to go to _element 3_.
for(i=0;i<iVisit.length;i++){
    console.log("One day, I'd like to go to " + iVisit[i] + ".");
}


/*  i=i+1
    shortcut:i++
    i=i+2
    shortcut: i+=2
    i=i+3
    shortcut:i+=3
*/
//create a loop that prints "HTA rocks. " 3 times 
for(i=1;i<4;i=i+1){
    console.log("HTA Rocks");
}
//create a loop that prints even numbers
for(i=0;i<10;i=i+2){
    console.log(i);
}

for(i=0;i<4;i++){
    console.log("I will be a good student.");
}
