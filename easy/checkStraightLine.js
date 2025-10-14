// 1232. Check If It Is a Straight Line
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
 // take the first two points
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    // check each remaining point
    for (let i = 2; i < coordinates.length; i++) {
        const [x3, y3] = coordinates[i];
        // if not on the same line → return false
        if ((y2 - y1) * (x3 - x1) !== (y3 - y1) * (x2 - x1)) {
            return false;
        }
    }
    // all points matched
    return true;
};