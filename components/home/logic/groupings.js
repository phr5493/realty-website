function groupIntoFours (children) {
    const output = []
    let currentGroup = []
  
    children.forEach((child, index) => {
      currentGroup.push(child)
  
      if (index % 4 === 3) {
        output.push(currentGroup)
        currentGroup = []
      }
    })
  
    return output;
}

function groupIntoThrees (children) {
    const output = []
    let currentGroup = []
  
    children.forEach((child, index) => {
      currentGroup.push(child)
  
      if (index % 3 === 2) {
        output.push(currentGroup)
        currentGroup = []
      }
    })
  
    return output;
}

function groupIntoTwos (children) {
    const output = []
    let currentGroup = []
  
    children.forEach((child, index) => {
      currentGroup.push(child)
  
      if (index % 2 === 1) {
        output.push(currentGroup)
        currentGroup = []
      }
    })
  
    return output;
}

function groupIntoOnes (children) {
    const output = []
    let currentGroup = []
  
    children.forEach((child, index) => {
      currentGroup.push(child)
  
      if (index % 1 === 0) {
        output.push(currentGroup)
        currentGroup = []
      }
    })
  
    return output;
}

function groupIntoSets(children){

    if (window.innerWidth >= 992){
        return groupIntoFours(children);
    } else if (window.innerWidth >= 768){
        return groupIntoThrees(children);
    } else if (window.innerWidth >= 576){
        return groupIntoTwos(children);
    } else{
        return groupIntoOnes(children);
    }

}

export default groupIntoSets;