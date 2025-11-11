// 体重(kg)と身長(m)を変数に代入
let weight = 68;
let height = 1.7;

// BMIを計算
let bmi = weight / (height * height);

// 結果を小数点2桁まで表示
console.log("BMIは " + bmi.toFixed(2) + "です。");