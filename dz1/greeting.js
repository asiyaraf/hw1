const name = prompt("what is ur name?")
console.log('Hello '+ name)

const arr1 = ['a',"b","c"]
const arr2 = ["a", 'b',"c","d"]
if (arr1.length > arr2.length){
    console.log(arr1.length + ">" + arr2.length)
}else if (arr1.length < arr2.length){
    console.log((arr1.length + "<" + arr2.length))
}else {
    console.log(arr1.length + "=" + arr2.length)
}

const trafficlights = prompt("Choose one color: red, yellow, green" )
 switch (trafficlights) {
    case "red":
         alert("stop");
         break;
     case "yellow":
         alert("attention");
         break;
    case "green":
         alert('u may go');
         break;
     default:
         alert("idk this color")
 }