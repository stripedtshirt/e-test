const dropDown = document.querySelector("#dropdown");
const instruction = document.querySelector("#instruction");
const user = document.querySelector("#user");
const calculator = document.querySelector("#calculator");
let monkeyWindow = window

let alert1 = new Alerts(user, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<g>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM5 5v14h14V5H5zm2.972 13.18a9.983 9.983 0 0 1-1.751-.978A6.994 6.994 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a9.995 9.995 0 0 1-1.724 1.025A4.993 4.993 0 0 0 12.102 16c-1.715 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</g>
</svg>
<div class="text">
<h3>Jerry</h3>
</div>`)

let alert2 = new Alerts(calculator, "No calc available")
let alert3 = new Alerts(instruction, `There are a lot of questions, answer all. Ignore question 1`)


function Alerts(name, msg){
    this.name = name
    this.msg = msg
    this.trigger = function(){
        let name = this.name
        let msg = this.msg
        name.addEventListener("click", function(){
            dropDown.innerHTML = msg
        })
    }
    this.close = function(){
        let name = this.name
        dropDown.style.display = "none"
        name.addEventListener("click", function(){ 
            if(dropDown.style.display == "none"){
                dropDown.style.display = "block"
            }else dropDown.style.display = "none"
        })
    }
}

alert1.trigger()
alert3.trigger()
alert1.close()
alert3.close()

calculator.addEventListener("click", function(){
    monkeyWindow.open("CalculatorApp-master/Calculator_App.html", "win1", "width=350,height=520,left=2000,top=100");
})