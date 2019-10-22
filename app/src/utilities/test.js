const x = [["name",1],["name",2],["name",3],["name","4"],["name",5],["name",6],["name",7],["name",8]]

let found = []
for (let i=0; i<x.length;i++){
    for(let y=0; y<x[i].length;y++){
        found.push(x[i][y])
    }
}
console.log(found)