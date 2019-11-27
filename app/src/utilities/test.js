const x = ["test","bac"];
const y = {name:"bac", value:"123"};

let h = []

for(let i=0; i<y.length;i++){
    if(x.includes(y[i].name))
    console.log("x")
};


const test = x.find(element => element === y.name)
console.log(test)