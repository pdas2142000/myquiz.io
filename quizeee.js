
const quize = [
    {
        question: " Q:1 What is the full form is the HTML?",
        a: "Hello to My land.",
        b: "Hey text markup language.",
        c: "Hypertext markup language.",
        d: "Hyper Texted markup language.",
        ans: "ans3"
    },

    {
        question: "Q:2 What is the full form of CSS?",
        a: "cascading style sheet.",
        b: "cascading style sheep.",
        c: "cartoon style sheet.",
        d: "cascading super sheet.",
        ans: "ans1"
    },

    {
        question: "Q:3 What is the full form of HTTP?",
        a: "Hypertext transfer protocal. ",
        b: "Hyper text protocal.",
        c: "Hey transfer protoca.",
        d: "Hyper text pratic.",
        ans: "ans1"
    },

    {
        question: "Q:4 What is the full form of JS?",
        a: "Java supper.",
        b: "JustScript.",
        c: "JavaScript.",
        d: "JordanScript.",
        ans: "ans3"
    }
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#btn");
const anwers = document.querySelectorAll('.option')
const show = document.querySelector("#show_result")
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionlist = quize[questionCount];

    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
loadQuestion()
const getcheckAns = () => {
    let answer;
    anwers.forEach((curAns) => {
        if (curAns.checked) {
            answer = curAns.id;
        }
    });
    return answer;
}
submit.addEventListener('click', () => {
    const checkAns = getcheckAns();
    console.log(checkAns);

    if(checkAns == quize[questionCount].ans){

        score++;
    }
    questionCount++;
    const desellectAll = () =>{
        anwers.forEach((curAns) => curAns.checked = false)
    }
    desellectAll()
    if(questionCount < quize.length){
        loadQuestion()
    }
    else{
        show.innerHTML = `
        <h3> Your score ${score}/${quize.length} ✌ </h3>
        <button id="btn" onclick="location.reload()">Play Again</button>
        `;
        show.classList.remove('show')
    }
});




