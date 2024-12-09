console.log("-----Welcome in JS-----");
let arr = [1,2,3,4,5,6,7,"hllo","true"];
for (let i = 0; i < arr .length;i++){
    console.log(arr[i]);
}

arr .push("shubham");
console.log("              ");
arr.pop();
//arr.splice(start,count,addon)
arr.splice(2,1);
for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
}
const newArr = [5,5,6,4,3,5,4,56,4,3];
let count=0;

for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
    if (arr[i] % 2 === 0) count++;
    if(arr[i] % 2 === 0)count++;
}
console.log(count);



let student_id_card = {
    // key:value 
    Name : "Shubham",
    Rollno : "abc",
    address : "ABC",
    Section : "A",
    Course  : "B-tech",
    Branch : "ETCE",
};


//print:
const address = student_id_card.address;
const course = student_id_card.address;

console.log(address,course);
