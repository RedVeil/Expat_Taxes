export function findInfos(inputs, relevantKeys){
  const infos = [];
  for(let i=0; i<relevantKeys.length;i++){
    const foundEntry = inputs.find(function(entry){
        return entry.name === relevantKeys[i]
    })
    if(foundEntry !== undefined){
        infos.push(foundEntry)
    }
  };
  return infos
};