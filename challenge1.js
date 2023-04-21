// goal:  print only the elements with 4 letters in an array of strings
// create an array called names and assign a list of strings with different letter amounts (some less than 4, some 4 letters, some more than 4)
// loop through the array with a for statement to check each element for length using .length()
// conditional:  if names.length is === 4 then print it


var names = ["Tim", "Beth", "Harry", "Luke", "Ian"];

for (var i = 0; i < names.length; i++) {
    //console.log(names[i].length);
    if (names[i].length === 4) {
        console.log(names[i]);
    } 
}
