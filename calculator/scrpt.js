console.log("lets begin")
let ans = "";

let a = document.querySelector(".display")
let arr = Array.from(document.querySelectorAll(".nums")).forEach(e => {
    e.addEventListener("click", (e) => {
        // console.log(e.target.innerHTML)
        if(e.target.innerHTML == "clear"){
            ans="";
            a.innerHTML='0'
        }
        else if (e.target.innerHTML == '=') {
            ans=eval(ans); 
            console.log(ans)
            a.innerHTML = "";
            a.innerHTML = ans;
        }
        else {
            ans += e.target.innerHTML
            console.log(ans)
            a.innerHTML = e.target.innerHTML
        }

    })
})

