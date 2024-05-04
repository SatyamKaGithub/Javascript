/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let boats = 0;
    people.sort((a, b) => a - b);
    let i = 0, j = people.length - 1;
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
        }
        boats++;
        j--;
    }
    return boats;
};
