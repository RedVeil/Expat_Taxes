const x = ["test","bac"];
const y = [{name:"bac", value:"123"}];

let h = []

for(let i=0; i<x.length;i++){
    const foundEntry = y.find(function(entry){
        return entry.name === x[i]
    })
    if(foundEntry !== undefined){
        h.push(foundEntry)
    }
};

console.log(h)