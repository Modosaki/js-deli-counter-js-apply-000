



function takeANumber(katzDeli){
katzDeli.push(number);
   return`You are number ${katzDeli.length} in line.`

}


function nowServing(katzDeli){
   if (katzDeli.length <= 0 ) {return `There is nobody waiting to be served!`; 
   }
   
   
   
  return `Currently serving ${katzDeli.shift()}.`
}


function currentLine(katzDeli){
<<<<<<< HEAD
  var text=[]
=======
  var text=""
>>>>>>> 72454d081ad75c6ea232c5dd413f668c564c08a8
  if (katzDeli.length <= 0 ) {return `The line is currently empty.`; 
   }
   
  for (let i= 0; i < katzDeli.length; i++)
 {
<<<<<<< HEAD
  text.push(` ${i+1}. ${katzDeli[i]}`) 
   
 }
     
      return `The line is currently:${text}`
=======
  text.push(`The line is curently: ${i+1}.${katzDeli[i]}`) 
   
 }
     
      return text;
>>>>>>> 72454d081ad75c6ea232c5dd413f668c564c08a8
}