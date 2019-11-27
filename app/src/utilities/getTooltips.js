export default function getTooltips(inputFields) {
  let tooltips = [];
  for (let row = 0; row < inputFields.length; row++) {
    let i = 0
    if (inputFields[row][0] === "invisible") {
      i = 1
    };
    for (i; i < inputFields[row].length; i++) {
      tooltips.push({ id: `${inputFields[row][i].name}-tooltip`, text: inputFields[row][i].tooltip, top: inputFields[row][i].top })
    }
  }
  console.log(tooltips)
  return tooltips;
};

