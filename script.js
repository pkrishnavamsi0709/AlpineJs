document.addEventListener("alpine:init",()=>{
    Alpine.store('Counter',{
        count: 0,
        incrimentCounter(){
            this.count++;
        },
        decrementCounter(){
            this.count--;
        }
    })
})

document.addEventListener("alpine:init",()=>{
    Alpine.store('userData',{
        name: localStorage.getItem('name'),
 setName(newName) {
 localStorage.setItem('name', newName);
 }
    })
})

document.addEventListener("alpine:init",()=>{
    Alpine.store("aemData",{
        content : ""
    })
})

window.addEventListener("notifyme",(e)=>{
    alert(e.detail)
})

console.log("Js")