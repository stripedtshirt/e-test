const mainContainer = document.getElementById("main-container");
const submit = document.getElementById("submit");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let minuteTime = 15
let time = minuteTime * 60;
const timer = document.getElementById("timer");
let minutes

let interval = setInterval(updateTimer, 1000)

    function updateTimer(){
      minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;

      minute.innerHTML = minutes;
      second.innerHTML = seconds
      time--

      if(minutes < 5){
        timer.style.color = "red"
      }
      if(minutes < 0){
        submitQuestions()
      }
    }


let questions = [
  {
    "question": `A quantity of ideal gas at 10.0oC and 100 kPa occupies a volume of
    2.50 m3. How many moles of the gas are present`,
    "options": ["4", "5", "2"],
    "answer": "3"
  },
  {
    "question": `Which of the following statements is correct about the nature of the
    Van der Waals equation`,
    "options": ["No isothermals below Tc have a single point of inflexion",
     "All isothermal above Tc have single point of inflexion",
      "All isothermal above Tc have two turning points"],
    "answer": "All isotherms below Tc have two turning points"
  },
  {
    "question": `Which of these assumptions usually made about kinetic theory for an
    ideal gas is incorrect`,
    "options": ["molecules exert no forces on one another except when they collide",
     "collision of molecules with one another and the wall of the container are perfectly elastic",
      "molecules are in random motion obeying Newton’s law"],
    "answer": "the molecules of the gas obeys general gas law"
  },
  {
    "question": `Which of the statement is correct about a reversible adiabatic
    process`,
    "options": ["pistons is moved quickly",
     "piston is moved vertically",
      "piston remain neutral"],
    "answer": "piston is moved slowly"
  },
  {
    "question": `Which of the the following laws state that under the same conditions
    of temperature and pressure, equal volumes of gas contain equal numbers of
    molecules`,
    "options": ["Zeroth law", "Pressure’s law", "Graham’s law"],
    "answer": "Avogadro’s law"
  },
  {
    "question": `The pressure at a point in a fluid in static equilibrium depends on`,
    "options": ["Horizontal dimension of the fluid",
     "All of the above",
      "The container of the fluid"],
    "answer": "The depth of that point"
  },
  {
    "question": `The first law of thermodynamics is given as`,
    "options": ["dW = dQ + dU", "dQ = dU - dW", "dQ = dW - dE"],
    "answer": "dE = dQ - dW"
  }
];


let arrayQuestions = questions
      arrayQuestions.sort(() => 0.5 - Math.random());

let score = 0;


    function cloneQuestions(j){
      let containerChild = mainContainer.children[0];
      let childCopy = containerChild.cloneNode(true)

      mainContainer.appendChild(childCopy)
      childCopy.children[0].textContent = "Question " + (j + 2);
      childCopy.children[1].textContent = questions[j].question + "?"
      

        for(let i = 2; i<6; i++){
          childCopy.children[i].children[1].name += (j + 1)
          childCopy.children[i].children[0].setAttribute("for", `a${i}:${j}`)
          childCopy.children[i].children[1].setAttribute("id", `a${i}:${j}`)
        }

      let array = questions[j].options
      let answer = questions[j].answer
      array.push(answer)
      array.sort(() => 0.5 - Math.random());
      for(let i = 2; i<6; i++){
        let options = childCopy.children[i].children[0];
        options.textContent = array[i - 2];
      }

      function submitQuestions(){
        if(minute.textContent < 15){
          for(let i = 2; i <6; i++){
            if(childCopy.children[i].children[1].checked == true){
              if(childCopy.children[i].children[0].textContent == questions[j].answer){
                score += 1 
              }
              
            }
          }
          score = score
          console.log(score)
          let popUp = document.getElementById("pop-up-container");
          popUp.style.display = "block"
          let test = document.getElementById("test");
          let text = document.getElementById("pptxt");
          test.textContent = score 
          text.textContent = "congratulations"
          if(score < (questions.length/2)){
            test.textContent = score
            text.textContent = `you didnt do to well try again`
          }
          clearInterval(interval)
          minute.innerHTML = 0;
          second.innerHTML = 00
          
        }
        
      }
      
      setInterval(function(){
        if(minutes < 0){
          clearInterval(interval)
          submitQuestions()
          minute.innerHTML = 0;
          second.innerHTML = 00
        }
      }, 1000)
      submit.addEventListener("click", submitQuestions)
      
    }

    for(let i = 0; i < questions.length -1; i++){
      cloneQuestions(i)
    }

    

    // change of questions


//     for(let i=1; i<questions.length; i++){
//       let newq = [];
//       newq.push(mainContainer.children[i].children[0]);
//       let changeBtn = document.getElementById(`no${i}`)
//       let check = changeBtn.innerHTML
//       let questionChange = new ChangeQuestion(changeBtn, newq);

//       function ChangeQuestion(btn, que){
//       this.btn = btn;
//       this.que = que;
//       this.changeDisplay = function(){
//         let btn = this.btn
//         let que = this.que
//           btn.addEventListener("click", function(){
//             if(check == i){
//               console.log(que)
//             }
//       })
//     }
//     }

//     questionChange.changeDisplay()
// }


    