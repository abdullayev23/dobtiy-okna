let a = document.querySelector(".inputs")
let elInput = document.querySelector(".input input")
a.addEventListener("submit", (e)=>{
    e.preventDefault()

    let elValue = elInput.value

    alert(`Xabar Jo'natildi! ${elValue}`)
    a.innerHTML('')
})