function repeatedString(s, n) {
    
    let count = 0
    let length = s.length;
    
    console.log(`length h${s.length}`)
    let rptsReq = Math.ceil(n/length)
    console.log(`rpts ${rptsReq}`)
    
    let splitt = s.split('')
    console.log(splitt)
    
    let totLet = s.length*rptsReq
    console.log(`tot ${totLet}`)
    
    
    let neq = []
    for (let i = 0; i < rptsReq; i++){
       neq.push(...splitt)
    
    }
    console.log(neq)
    let cut = neq.splice(0,n)
    console.log(`cut ${cut + cut.length}`)
    
    
    
    for (letter in cut){
     
        if (cut[letter] == 'a')
      {   count++
    }
    }
    
    
    
    
    console.log()
    
    console.log(`count ${count}`)
    return count
    }
    
    
    repeatedString('aba', 10)

    module.exports = repeatedString