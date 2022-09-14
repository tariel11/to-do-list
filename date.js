module.exports.getDate =  function(){  
    const today = new Date();
    
    const opptions = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-RU", opptions); 
}

module.exports.getDay =  function(){  
    const today = new Date();
      
    const opptions = {
        weekday: "long"
    }
  
    return today.toLocaleDateString("en-RU", opptions); 
  }