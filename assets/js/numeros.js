let mil_millones = 1000000000;
let milMillones = 1_000_000_000;

console.log(milMillones);
console.log(mil_millones);

console.log(milMillones == mil_millones);
console.log(milMillones === mil_millones);
console.log(typeof(milMillones));

let milMil = 1e9; //Notacion cientifica
console.log(milMil);

// 0.12
console.log(12e-6);

console.log(0xF); //Numeros Hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F
console.log(0xFF); //255
console.log(0xFFF); // 4095
console.log(0xFFFF); // 65535

console.log(0b10111); //Numeros Bitarios: 0 1

console.log(0b1111); // 15
console.log(0b11111); // 31

let num = 255;
console.log(num.toString()); //conviertiendo a una cadena de caracteres
console.log(num.toString(16));
console.log(num.toString(2));
console.log(123456..toString(36));

//redondeo Math
                //Arriba                Abajo <5 - arr>4            Abajo
console.log(Math.ceil(2.4) + "- " + Math.round(2.4) + " - " + Math.floor(2.4));
console.log(Math.ceil(2.6) + "- " + Math.round(2.6) + " - " + Math.floor(2.6));

console.log(Math.trunc(2.5)); //solo toma la parte entera

num = 12.34;
console.log(num.toFixed(1)); //redondea la cantidad de decimales que indique el parametro
console.log(num.toFixed(5));

num = 12.36;
console.log(num.toFixed(1));


// calculos imprecisos

console.log(1e500);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 == 0.3);

let sum = 0.1 + 0.2;
console.log(sum.toFixed(1) == 0.3) ;

console.log(+"100px");
console.log(parseInt("100px"));
console.log(parseInt("$100"));
console.log(parseInt("100em"));
console.log(parseInt("ff",16));
console.log(parseInt("2n9c",36));

console.log(Math.max(3,5,-10,1,8,3));
console.log(Math.min(3,5,-10,1,8,3));

console.log(Math.pow(2,6));
