// Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1];
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let firstarr = arr[0];
function stepOne() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    if (arr[i] === arr[arr.length - 0]) {
      arr[i] = firstarr;
    }
  }
  return arr;
}
console.log(stepOne());

// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62];

function getLevel2(n) {
  let arr = [];
  let karra = 2;
  for (let i = 0; i < n; i++) {
    arr.push(karra ** 2);
    karra = karra ** 2;
  }
  return arr;
}
console.log(getLevel2(5));

// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20];

function beforeNum(n, A, B) {
  let arr = [];
  arr.push(A, B);
  let umum = A + B;
  for (let i = 0; i < n - 2; i++) {
    arr.push(umum);
    umum += umum;
  }
  return arr;
}
console.log(beforeNum(5, 2, 3));

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
let arrey = [1, 2, 3, 4, 5, 6, 7, 8];
function reverSe() {
  return arrey.reverse();
}
console.log(reverSe());

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

function Toqs() {
  let arri = "";
  let quote = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      arri += arr[i];
      quote++;
    }
  }
  return arri + " " + quote + "ta toq son mavjud";
}
console.log(Toqs());

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

let arriy = [1, 2, 3, 4, 5, 6];

function Doubglas() {
  let arr = [];
  for (let i = 0; i < arriy.length; i += 2) {
    arr.push(arriy[i]);
  }
  return arr;
}
console.log(Doubglas());

// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

function reDoubglas() {
  let arr = [];
  if (arriy.length % 2 != 0) {
    for (let i = arriy.length - 1; i >= 0; i -= 2) {
      arr.push(arriy[i]);
    }
  } else if (arriy.length % 2 == 0) {
    for (let i = arriy.length - 2; i >= 0; i -= 2) {
      arr.push(arriy[i]);
    }
  }
  return arr;
}
console.log(reDoubglas());

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
arriy = [1, 32, 3, 4, 1, 6, 7, 32,7,7,7];
function fDsT() {
  let sons = [];
  for (let i = 0; i < arriy.length; i += 2) {
    sons.push(arriy[i]);
  }
  for (let i = 1; i < arriy.length; i += 2) {
    sons.push(arriy[i]);
  }
  return sons;
}
console.log(fDsT());

// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

function refDsT() {
  let arr = [];
  for (let i = 1; i < arriy.length; i += 2) {
    arr.push(arriy[i]);
  }
  for (let i = arriy.length - 2; i > -1; i -= 2) {
    arr.push(arriy[i]);
  }
  return arr;
}
console.log(refDsT());

// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

function twoFortwo() {
  let arr = [];
  for (let i = 0; (i < arriy.length / 2) | 0; i += 2) {
    arr.push(
      arriy[i],
      arriy[i + 1],
      arriy[arriy.length - 1 - i],
      arriy[arriy.length - 2 - i]
    );
  }
  return arr;
}
console.log(twoFortwo());

// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
function rangeOutSum(K, L) {
  let sum = 0;
  for (let i = 0; i < arriy.length; i++) {
    if (i < K || i > L) {
      sum += arriy[i];
    }
  }
  return sum;
}
console.log(rangeOutSum(2, 5));

// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null];

let array = [10, false, "", "Abdulaziz", null];
function TruthyFalsy() {
  let truthy = [];
  let falthy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "" || array[i] < 1 || array[i] == false) {
      falthy.push(array[i]);
    } else {
      truthy.push(array[i]);
    }
  }
  array.length = 0;
  array.push(truthy, falthy);
  return array;
}
console.log(TruthyFalsy());

// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

function getOddMin() {
  let min = arriy[0];
  for (let i = 0; i < arriy.length; i += 2) {
    if (arriy[i] < min) {
      min = arriy[i];
    }
  }
  return min;
}
console.log(getOddMin());

// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.

function getSodMax() {
  let max = arriy[0];
  for (let i = 1; i < arriy.length; i += 2) {
    if (max < arriy[i]) {
      max = arriy[i];
    }
  }
  return max;
}
console.log(getSodMax());

// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.

function localMax() {
  let lm = [];
  for (let i = 0; i < arriy.length; i++) {
    if (arriy[i] > arriy[i + 1] && arriy[i] > arriy[i - 1]) {
      lm.push(i);
    }
  }
  return lm;
}
console.log(localMax());

// Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.

function AdjacentR(n) {
  let near = arriy[0];

  for (let i = 0; i < arriy.length; i++) {
    if (Math.abs(arriy[i] - n) < Math.abs(near - n)) {
      near = arriy[i];
    }
  }
  return near;
}
console.log(AdjacentR(12));

// Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.

function nearBigTwos() {
  let maxTwos = arriy[0] + arriy[1];
  let arr = [];
  for (let i = 0; i < arriy.length; i++) {
    if (arriy[i] + arriy[i + 1] > maxTwos) {
      maxTwos = arriy[i] + arriy[i + 1];
      arr.length = 0;
      arr.push(arriy[i], arriy[i + 1]);
    }
  }
  return arr;
}
console.log(nearBigTwos());

// Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.

function Twincles() {
  let arr = [];
  for (let i = 0; i < arriy.length; i++) {
    for (let j = i + 1; j < arriy.length; j++) {
      if (arriy[i] == arriy[j]) {
        arr.push(i);
        arr.push(j);
        arr.push("|");
      }
    }
  }
  return arr;
}
console.log(Twincles());

// Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.

function moreTwincles(){
    let countTwices;
    let numTwices=0;
    let maxLength=2;
    let str="";
    for (let i=0;i<arriy.length;i++){
        countTwices=0;
            for (let j=0;j<arriy.length;j++){
            if (arriy[i]==arriy[j]){
                countTwices++;
                numTwices=arriy[i];
            }
        }if (countTwices>maxLength){
            maxLength=countTwices;
            numTwices=numTwices;
        }
    }return str+String(maxLength)+"marotaba"+" "+String(numTwices)+" "+"qaytarildi";
    
}console.log(moreTwincles());

// Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.

let a=[12,3,2,4,43,76,45,90,5,9];
let b=[];
function toB (){
    for (let i=0; i<a.length;i++){
        if(a[i]%2==0){
            b.push(a[i]);
        }
    }
    console.log(b);
    return b.length;
}console.log(toB());

// Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.

function LeveltoK (K){
    let b=[];
    for (let i=0;i<a.length;i++){
        a[i]=a[i]**K;
    }return a;
}console.log(LeveltoK(2));

// Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.
let errey=[1,2,3,4,5,6,7,8];
    function  updatecol(){
        let forR;
        let forL;

        for (let i=0;  i<errey.length/2|0;i++){
            forR=errey[i];
            forL=errey[errey.length/2+i];
            errey[i]=forL;
            errey[errey.length/2+i]=forR;
        }return errey;
    }console.log(updatecol());


// Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)
function reverseTocol (){
    let forR;
    let forL;
    
    for (let i=0; i<a.length/2|0;i++){
        forR=a[i];
        forL=a[a.length-1-i];
        a[i]=forL;
        a[a.length-1-i]=forR;
    }return a;
}console.log(reverseTocol());

// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

let erray=[21,9,1,3,2,5,6,7,5,8];
function MaxandMin (){
    let min=erray[0];
    let max=erray[0];
    for (let i=0;i<erray.length;i++){
        if(min>erray[i]){
            min=i;
        } else if(max<erray[i]){
            max=i;
        }
    }
    for (let i=0;i<erray.length;i++){
            erray[max-min]=0;
    }return erray;
}console.log(MaxandMin());
