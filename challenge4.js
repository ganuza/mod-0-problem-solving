// goal:  print every travel destination in an array in alphabetical order, each embedded in the sentence "Next destination is " followed by the destination
// create an array called cities that contains 4 string elements:  the names of cities
// use sort() method to alphabatize the elements in the array
// create a loop to iterate throgh the array of alphabetical cities
// create assign each element to a variable
// embed name of city into string using interpolation

var cities = ["Miami", "LA", "Brooklyn", "Alberta"]

var alphaCities = cities.sort()
//console.log(alphaCities);

for (var i = 0; i < alphaCities.length; i++) {
    console.log(`Next destination ${alphaCities[i]}`)
}
