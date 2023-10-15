function sum(n1,n2,n3,n4){
    return n1+n2+n3+n4
}
console.log(sum(1,2,3,4));
//
function concat(str1,str2){
    return str1.concat(str2)
}
console.log(concat("Manar ","Eldesouky"));
//
function search(str,char){
    return str.indexOf(char)

}
console.log(search("Manar","c"));
console.log(search("Manar","M"));
//
function concat(str1,str2,str3,str4){
    return str1.concat(str2,str3,str4)
}
console.log(concat("Manar ","Eldesouky ","Elsayed ","Salem"));
//
var str = "  welcome mr ahmed  "
console.log(str.length)
console.log(str.indexOf("ahmed"))
console.log(str.slice(11))
console.log(str.substring(11))
console.log(str.slice(11,12))
console.log(str.replace("ahmed","Mohamed"))
console.log(str.toUpperCase())
console.log(str.includes("Yasser"))
console.log(str.trim())
//
var num =  "10.879879"
console.log(Number(num))

function int(num){
    return num +" "+ Number.isInteger(num)
}
console.log(int( parseInt(num)))
console.log(Number(num))
console.log(parseFloat(num).toFixed(0))
console.log(parseFloat(num).toFixed(1))
//
















