// slice
const  friends = [ 12, 23, 56 ,78, 89, 56, 47, 36];
const partia1 = friends.slice(2, 5);
// console.log(partia1);
// console.log(friends);


// splice 
const  friend = [ 12, 23, 56 ,78, 89, 56, 47, 36];
const partia2 = friend.splice(2, 5, 99, 100, 200);
console.log(partia2);
console.log(friend);