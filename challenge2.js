// goal:  print every word of an array in ALL lowercase

// create an array named names of strings with a mix of upper and lower case letters
// figure out a method to change letters of a string to ALL lowercase (toLowerCase()
// create a for statement to loop through the array and make the change to the string
// print out each modified string

var names = ["TiM", "nANcY", "MIke", "drEW"];

for (var i = 0; i < names.length; i++) {
    console.log(names[i].toLowerCase());
}