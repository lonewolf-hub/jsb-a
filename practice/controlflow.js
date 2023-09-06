//for loops

// run the specific tasks needed no. of times without loops complex task which are repitative cannot be performed

for(let i = 1;i<=10;i++){ // if the condition is removed the loop will be an infinite loop
    console.log(`javascript has run the task ${i} times`);

}

//usecase of loops
let recipies = ['Rice','Dal','Panner-Kadahi','Butter-Nan','Chhola-Bhatura'];

//access the array values
console.log(recipies[2])

for(let i=0;i<recipies.length;i++){
    console.log(recipies[i]);
}

//iteration and value of i 
// 0,1,2,3,4,5 and so on
let j = 1;

while (j<=5)
{
    console.log("while loop run",j);
    j++;
}

let k = 0;
while(k<recipies.length)
{
    console.log("list of recipies", recipies[k]);
    k++;
}