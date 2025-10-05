const checkbox = (itemName)=>{
    `//span[@class='rct-title' and normalize-space(text())='${itemName}']/preceding-sibling::span[@class='rct-checkbox']`
}

module.exports={checkbox};