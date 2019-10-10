const x = [{name:1},{name:2},{name:3},{name:"4"},{name:5},{name:6},{name:7},{name:8}]
const y = {1:{name:1},2:{name:2},3:{name:3},4:{name:"4"},6:{name:5},5:{name:6},0:{name:7},10:{name:8}}

let found = x.find(function(element){
    return element.name === Object.keys(y)
})
console.log(x.items())