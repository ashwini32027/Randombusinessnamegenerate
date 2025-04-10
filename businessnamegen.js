//random business genrator 
let rand=Math.random();
let first,second,third
if (rand<0.33) {
   first="Crazy";
}
else if(rand<0.66 && rand>=0.33)
{
    first="Amazings"
}
else
{
    first="Fire"
}
//second word
rand=Math.random();

if (rand<0.33) {
    second="Engine";
 }
 else if(rand<0.66 && rand>=0.33)
 {
     second="Foods"
 }
 else
 {
     second="Garments"
 }
 //third ladder 
 rand=Math.random();
 if (rand<0.33) {
    third="bros";
 }
 else if(rand<0.66 && rand>=0.33)
 {
     second="Limited"
 }
 else
 {
     second="Hub"
 }
 console.log(`${first} ${second}${third}`)