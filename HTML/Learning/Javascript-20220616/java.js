// 1 + 2 = 3
let x = 1;
let y = 2;

let sum = x + y;
console.log(sum);

//Data Type : Number 
let seisu = 5; // decimal number
let syousu = 0.0; // float number 
let minus = -1234567890; // minus number

console.log("---- Number Output Start ----");
console.log(seisu);
console.log(syousu);
console.log(minus);
console.log("---- Number Output End ----");

// Data Type : String
// single quote or double quote の中であことを文字例とよびます
let moji = " a ";
let mojiretsu = "あいうえお";
let moji_suuji = " 123 ";

console.log(" ---- String Output Start ----");
console.log(moji);
console.log(mojiretsu);
console.log(moji_suuji);
console.log(" ---- String Output Start");

// Data Type : Boolean
let trueBolean = true;
let falseBoolean = false;

console.log("---- Boolean Output Start ----");
console.log(trueBolean);
console.log(falseBoolean);
console.log(" ---- Boolean Output Start ---- ");

// Data Type : null
let xyz = 10;
console.log(" ---- Null Output Start ---- ");
console.log(xyz);
// Data Reset : Empty DataをAssignする
xyz = null; // 更新、交換
console.log(xyz);
console.log(" ---- Null Output End ---- ");

// Data Type : Undefined
let abc;
console.log(" ---- Undefined Output Start ---- ")
console.log(abc); 
console.log(" ---- Undefined Output End ---- ");

// JS variable data type depends on its value (can vary)
// typeof: 変数の型を確認すること
let ninja = 12;// Number
console.log(ninja);
console.log(typeof ninja);

ninja = "こんにちは";// String
console.log(ninja);
console.log(typeof ninja);

ninja = true;//Boolean
console.log(ninja); 
console.log(typeof ninja);

