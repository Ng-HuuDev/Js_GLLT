// 11. 1 TOAN TU LOGIC

// toan tu && => tat ca cac dieu kien deu dung
let i = 7;

// kiem tra i >-0 && i <10
console.log(i > 0 && i < 10);

console.log(i > 10);

// toan tu "hoac" "||"
console.log(i > 0 || i < 10);
console.log(i > 0 || i > 10);
console.log(i > 10);

// toan tu phu dinh "!" : dao nguoc vi tri, dung thanh sai, sai thanh dung
console.log(!(i > 0));

// --------------BAI TAP

// ---------bai 4: tinh Chu vi va dien tich hinh tron va in ra ket qua

// let banKinh = prompt("Nhập bán kính hình tròn");

// let PI = Math.PI;

// let chuVi = 2 * PI * banKinh;
// console.log("🚀 ~ chuVi:", chuVi);
// let dienTich = PI * banKinh * banKinh;
// console.log("🚀 ~ dienTich:", dienTich);

// --------bai 5: tinh CN, S hinh chu nhat

// let chieuDai = Number(prompt("Nhập chiều dài"));
// let chieuRong = Number(prompt("Nhập chiều rộng"));

// let dienTich = chieuDai * chieuRong;
// console.log("🚀 ~ dienTich:", dienTich);

// let chuVi = (chieuDai + chieuRong) * 2;
// console.log("🚀 ~ chuVi:", chuVi);

// ----------bai 6: Viết chương trunh nhập vào điểm 3 môn toán, văn, anh và tính ĐTB
let toan = Number(prompt("Nhập điểm toán:"));
let van = Number(prompt("Nhập điểm văn:"));
let anh = Number(prompt("Nhập điểm anh:"));

let diemTB = (toan + van + anh) / 3;
console.log(diemTB);
