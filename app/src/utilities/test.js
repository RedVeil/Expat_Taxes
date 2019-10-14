const x = [{name:1},{name:2},{name:3},{name:"4"},{name:5},{name:6},{name:7},{name:8}]
const y = {1:test}

let found = x.find(function(element){
    return element.name === Object.keys(y)
})
console.log(x.items())