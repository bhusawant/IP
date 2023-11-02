 const array = ['a', 'b', 'c']; 
      
    const it = array[Symbol.iterator](); 
      
    console.log(JSON.stringify(it.next())); 
    console.log(JSON.stringify(it.next())); 
    console.log(JSON.stringify(it.next())); 
    console.log(JSON.stringify(it.next())); 
