let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target)
        if(e.target.innerText == "="){
          string = eval(string);
        }
        else if(e.target.innerText == "c")
        {
            string = "";
        }
        // else if(string = 0)
        // {
        //     string = e.target.innerText;
        // }
        else{
            string = string + e.target.innerHTML;
        }

        document.getElementById("dis").innerText = string;
        console.log(document.getElementById("dis").innerText)
    })
})