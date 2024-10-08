/** -------------Bai 12: toan tu so sanh
 *   / != khac nhau
 *     > lon hon
 *      < nho hon
 *      >= lon hon hoac bang
 *      <= nho hon hoac bang
 *      == bang nhau - ko quan tam toi kieu du lieu
 *      === bang nhau - quan tam toi kieu du lieu
 *
 * */

//

let a = 3;
let b = 3;
let c = "3";

// cac phep so sanh

console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != b);

// so sanh == ko quan tam den kieu du lieu
console.log(a == b);
console.log(a == c);

// so sanh  === quan tam den kieu du lieu (so sanh ca gia tri va kieu du lieu)
console.log(a === b);
console.log(a === c);

// so sanh !=
console.log(a != b);
console.log(a !== b); // khong quna tam den du lieu cua bién

// so sanh !==
console.log(a !== b);
console.log(a !== c);
