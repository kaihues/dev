console.log("hello world");

let helloWorld = '"Hello world !"';
console.log(helloWorld);
helloWorld = "wello Horld !;"
console.log(helloWorld);

const x = 10;
let y = 13;
console.log(`x + y = ${x+y}`);
y = x + y;
console.log(`y = ${y}`);

const animals = ['dog', 'cat', 'cow'];
animals.push('goat');
console.log(animals);
console.log(animals.length);

let classroom = {
    building: "ATLAS",
    room: 104
};
console.log(classroom);
console.log(classroom.building);
console.log(classroom["room"]);
classroom.lighting = 'not so great';
console.log(classroom);
console.log(classroom["building"]);

if (y<40) {
    console.log(y);
}
y += x
if (y<30) {
    console.log(y);
} else {
    console.log('y is too big!');
}

while(y < 50){
    console.log(y);
    y++;
}

for(let i = 0; i < 50; i++){
    console.log(i);
}

for (let i=0; i<animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}

for (const animal of animals){
    console.log(animal);
}