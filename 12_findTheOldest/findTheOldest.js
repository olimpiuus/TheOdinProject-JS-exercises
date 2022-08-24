const findTheOldest = function(people) {
    let date = new Date().getFullYear()
    people.sort((a, b) => (a.yearOfDeath ? a.yearOfDeath : date) - a.yearOfBirth > (b.yearOfDeath ? b.yearOfDeath : date) - b.yearOfBirth ? -1 : 1)
    console.log(date);
    return people[0]
};


// Do not edit below this line
module.exports = findTheOldest;