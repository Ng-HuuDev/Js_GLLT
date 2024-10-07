// Toan tu tien to , hau to
// toan tu tang/ giam

let a = 99;
let b = 10;
let c = 77;
let d = 88;

a++; // => postFix // tuong duong voi a = a+1
b--; // tuong duong voi b = b-1
++c; //=> preFix // tuong duong voi c = c+1
--d; // tuong duong voi d = d-1
// xuat ket qua
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
console.log("🚀 ~ c:", c);
console.log("🚀 ~ d:", d);

// Truong hop phuc tap
// uu tien tinh taon postfix va prefix
/* buoc 1: tinh prefix
 * buoc 2: tinh cac phep tinh con lai
 * buoc 3: gan gia tri cho bien o ben trai dau bang "="
 * buoc 4: tinh postfix
 */

let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log("🚀 ~ y:", y);
console.log("🚀 ~ x:", x);
console.log("🚀 ~ z:", z);

// tinh y truoc: y = 3
// tinh cac phep tinh con lai: x = 1, y =3 => z = 1 -3 + 1 = -1
// gan gia tri bien ben trai dau "=" => z = -1
// tinh postfix: x = 2
