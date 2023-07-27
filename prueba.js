function sum (value1, value2){
    return value1 + value2
}

function compare (value1, value2){
    return value1 == value2
}
function booleanOrNull(value1){
    
    if (typeof value1 === 'boolean') {
        return value1;
     } else {
       return null
      }
}


module.exports={sum,compare,booleanOrNull}


