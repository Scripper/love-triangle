/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

 
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i < length; i++) { 
      let next_1 = preferences[i] - 1;
      let next_2 = preferences[next_1] - 1;
      let next_3 = preferences[next_2] - 1;

      if (next_1 == i) continue;
      if (next_1 == next_2) continue;
      if (next_3 == next_2) continue;
      if (next_3 == i) {
          count++;
      }
   }
   return count / 3;
};
