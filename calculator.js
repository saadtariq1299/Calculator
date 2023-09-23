document.addEventListener("DOMContentLoaded", function(){
 
const numbers = {
 zero: document.querySelector("#zero"),   
 one: document.querySelector("#one"),
 two: document.querySelector("#two"), 
 three : document.querySelector("#three"), 
 four : document.querySelector("#four"), 
 five : document.querySelector("#five"), 
 six : document.querySelector("#six"), 
 seven : document.querySelector("#seven"), 
 eigth : document.querySelector("#eigth"), 
 nine : document.querySelector("#nine"), 
}

const operations = {
     multiply : document.querySelector("#multiply"), 
     division : document.querySelector("#division"), 
     addition : document.querySelector("#addition"), 
     equal : document.querySelector("#equal"), 
     subtract : document.querySelector("#subtract"), 
}

let result = 0
let secondPress = false
let num1 = ""
let num2 = ""
let firstPress = 1  
let mul = false

zero.addEventListener("click",function(){
 if(document.querySelector("#display").value != ""){
    document.querySelector("#display").value += 0
 }
})

one.addEventListener("click",function(){
 let onee = 1
 document.querySelector("#display").value += onee
})


two.addEventListener("click",function(){
    let twoo = 2
    document.querySelector("#display").value += twoo
})
   

three.addEventListener("click",function(){
    let threee = 3
    document.querySelector("#display").value += threee
})
   

four.addEventListener("click",function(){
    let fourr = 4
    document.querySelector("#display").value += fourr
})
   

five.addEventListener("click",function(){
    let fivee = 5
    document.querySelector("#display").value += fivee
   })
   

six.addEventListener("click",function(){
    let sixx = 6
    document.querySelector("#display").value += sixx
   })
   

seven.addEventListener("click",function(){
    let sevenn = 7
    document.querySelector("#display").value += sevenn
   })
   

eigth.addEventListener("click",function(){
    let eigthh = 8
    document.querySelector("#display").value += eigthh
   })
   

nine.addEventListener("click",function(){
    let ninee = 9
    document.querySelector("#display").value += ninee
   })
   
// Let's code the brain baby !



function calAdd(){
    num2 = document.querySelector("#display").value  
    document.querySelector("#display").value = parseFloat(num1) + parseFloat(num2)
    add = false
    firstPress = 1
}   

function calMultiply(){
    num2 = document.querySelector("#display").value 
    document.querySelector("#display").value =  parseFloat(num1) * parseFloat(num2)
    firstPress = 1
    mul = false
}   

function calSub(){
    num2 = document.querySelector("#display").value 
    document.querySelector("#display").value =  parseFloat(num1) - parseFloat(num2)
    sub = false
    firstPress = 1
}   
   
function calDiv(){
    num2 = document.querySelector("#display").value 
    document.querySelector("#display").value =  parseFloat(num1) / parseFloat(num2)
    divi = false
    firstPress = 1 
}   
 

function calculate(){
    if(sub === true && firstPress > 1){
        if(divi === true){
                calDiv()
            }else if(mul === true){
                calMultiply()
            }else if(add === true){
                calAdd()
            }else{
                calSub()
            }
    }else if(add === true && firstPress > 1){
        if(divi === true){
                calDiv()
            }else if(mul === true){
                calMultiply()
            }else if(sub === true){
                calSub()
            }else{
                calAdd()
            }
    }else if(mul === true && firstPress > 1){
        if(divi === true){
           calDiv()
        }else if(add === true){
           calAdd()
        }else if(sub === true){
           calSub() 
        }else{
           calMultiply()
        }
    }else if(divi === true && firstPress > 1){
        if(mul === true){
            calMultiply()
         }else if(add === true){
            calAdd()
         }else if(sub === true){
            calSub() 
         }else{
            calDiv()
         }
    }
    else if(firstPress === 1){
        num1 = document.querySelector("#display").value 
        document.querySelector("#display").value = ""
        firstPress = 2
    }
}


multiply.addEventListener("click", function(){
    mul = true
    calculate()
  
})

let equall = false

operations.equal.addEventListener("click", function(){
    equall = true
    firstPress = 1
    if(mul){
      calMultiply()
    }else if(sub){
      calSub()
    }else if(add){
      calAdd()
    }else if(divi){
      calDiv()
    }
})
   
let sub = false

subtract.addEventListener("click", function(){
    sub = true
    calculate()
})


let add = false

addition.addEventListener("click", function(){
    add = true
    calculate()
})


let divi = false

division.addEventListener("click", function(){
    divi = true
    calculate()
})



})