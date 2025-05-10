function highlight() {
    //Write your code here
var list =document.getElementsByTagName("strong");
Array.from(list).forEach((el)=>{
    el.style.color="green"
})

}


function return_normal() {
    var list =document.getElementsByTagName("strong");
    Array.from(list).forEach((el)=>{
        el.style.color="black"
    })
    
}