/* ================= TOPIC + SET DATA ================= */
const allTopics = {

january: {
set1: [
{q:"मौर्य साम्राज्य का संस्थापक कौन था?",options:["चंद्रगुप्त मौर्य","अशोक","हर्षवर्धन","समुद्रगुप्त"],answer:0,exp:"चंद्रगुप्त मौर्य"},
{q:`निम्नलिखित कथनों पर विचार कीजिए:
1. UNCCD COP16 का आयोजन वर्ष 2024 में सऊदी अरब के रियाद में किया गया।
2. यह सम्मेलन पहली बार पश्चिम एशिया एवं उत्तर अफ्रीका (MENA) क्षेत्र में आयोजित हुआ।
3. भारत ने इस सम्मेलन में 'अरावली ग्रीन वॉल परियोजना' की घोषणा की।

उपर्युक्त में से कौन-सा/से कथन सही है/हैं?`,options:["केवल 1 और 2","केवल 2 और 3","1, 2 और 3","केवल 1 और 3"],answer:2,exp:"तीनों कथन सही हैं। COP16 रियाद में आयोजित हुआ तथा भारत ने अरावली ग्रीन वॉल परियोजना प्रस्तुत की, जिसका उद्देश्य भूमि पुनर्स्थापन एवं मरुस्थलीकरण को रोकना है।"},

{q:"गुप्त काल को क्या कहा जाता है?",options:["स्वर्ण युग","लौह युग","आधुनिक युग","कांस्य युग"],answer:0,exp:"इसे स्वर्ण युग कहते हैं"},
{q:"अशोक किसके लिए प्रसिद्ध था?",options:["युद्ध","धर्म","व्यापार","कृषि"],answer:1,exp:"धम्म नीति"}
],
set2: [
{q:"चाणक्य किसके गुरु थे?",options:["चंद्रगुप्त","अशोक","नेहरू","पटेल"],answer:0,exp:"चंद्रगुप्त मौर्य"},
{q:"पाटलिपुत्र कहाँ था?",options:["बिहार","यूपी","गुजरात","राजस्थान"],answer:0,exp:"बिहार"}
],
set3: [
{q:"गुप्त काल को क्या कहा जाता है?",options:["स्वर्ण युग","लौह युग","आधुनिक","कांस्य"],answer:0,exp:"स्वर्ण युग"},
{q:"नालंदा कहाँ था?",options:["बिहार","MP","UP","राजस्थान"],answer:0,exp:"बिहार"}
],
set4: [
{q:"समुद्रगुप्त को क्या कहा जाता है?",options:["भारत का नेपोलियन","अशोक","चंद्रगुप्त","हर्ष"],answer:0,exp:"नेपोलियन ऑफ इंडिया"},
{q:"हर्षवर्धन कौन था?",options:["शासक","किसान","व्यापारी","सैनिक"],answer:0,exp:"शासक"}
]
},

february: {
set1: [
{q:"बिहार की राजधानी?",options:["पटना","गया","दरभंगा","भागलपुर"],answer:0,exp:"पटना"},
{q:"गंगा कहाँ से निकलती है?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"}
],
set2: [
{q:"कोसी नदी?",options:["बिहार का शोक","जीवन रेखा","गंगा","यमुना"],answer:0,exp:"शोक नदी"},
{q:"महाबोधि मंदिर कहाँ?",options:["बोधगया","पटना","राजगीर","नालंदा"],answer:0,exp:"बोधगया"}
],
set3: [
{q:"थार मरुस्थल?",options:["राजस्थान","बिहार","यूपी","MP"],answer:0,exp:"राजस्थान"},
{q:"हिमालय कहाँ?",options:["उत्तर भारत","दक्षिण","पूर्व","पश्चिम"],answer:0,exp:"उत्तर भारत"}
],
set4: [
{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},
{q:"सबसे बड़ा जिला?",options:["पश्चिम चंपारण","पटना","गया","नालंदा"],answer:0,exp:"पश्चिम चंपारण"}
]
},

march: {

set1:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set2:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set3:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}],
set4: [
{q:"गंगा उद्गम?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत की सबसे बड़ी नदी?",options:["गंगा","यमुना","गोदावरी","कावेरी"],answer:0,exp:"गंगा"}
],
set4: [
{q:"डेल्टा?",options:["सुंदरबन","थार","हिमालय","घाट"],answer:0,exp:"सुंदरबन"},
{q:"राजस्थान?",options:["रेगिस्तान","पहाड़","नदी","समुद्र"],answer:0,exp:"रेगिस्तान"}
]
},

april: {
set1: [
{q:"लोकसभा?",options:["निचला सदन","उच्च सदन","न्यायालय","राज्य"],answer:0,exp:"लोकसभा"},
{q:"प्रधानमंत्री?",options:["सरकार प्रमुख","राज्यपाल","राष्ट्रपति","जज"],answer:0,exp:"सरकार प्रमुख"}
],
set2: [
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","किसान","व्यापारी"],answer:0,exp:"राज्य प्रमुख"},
{q:"संविधान?",options:["कानून","धर्म","नदी","योजना"],answer:0,exp:"कानून"}
],
set3: [
{q:"न्यायपालिका?",options:["न्याय देती","कानून बनाती","टैक्स","सेना"],answer:0,exp:"न्याय देती"},
{q:"संसद?",options:["कानून बनाती","न्याय देती","लड़ाई","व्यापार"],answer:0,exp:"कानून बनाती"}
],
set4: [
{q:"मौलिक अधिकार?",options:["6","5","7","8"],answer:0,exp:"6"},
{q:"लोकतंत्र?",options:["जनता शासन","राजा","सेना","धर्म"],answer:0,exp:"जनता शासन"}
]
},

may: {
set1: [
{q:"गंगा कहाँ से?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत राज्य?",options:["राजस्थान","नेपाल","चीन","भूटान"],answer:0,exp:"भारत"}
],
set2: [
{q:"सबसे बड़ा राज्य?",options:["राजस्थान","बिहार","UP","MP"],answer:0,exp:"राजस्थान"},
{q:"डेल्टा?",options:["सुंदरबन","थार","हिमालय","घाट"],answer:0,exp:"सुंदरबन"}
],
set3: [
{q:"नदी?",options:["गंगा","थार","हिमालय","रेगिस्तान"],answer:0,exp:"गंगा"},
{q:"मरुस्थल?",options:["थार","गंगा","यमुना","नर्मदा"],answer:0,exp:"थार"}
],
set4: [
{q:"भारत?",options:["लोकतंत्र","राजशाही","तानाशाही","साम्राज्य"],answer:0,exp:"लोकतंत्र"},
{q:"राजधानी?",options:["नई दिल्ली","मुंबई","पटना","कोलकाता"],answer:0,exp:"नई दिल्ली"}
]
},

june: {
set1: [
{q:"संविधान लागू?",options:["1950","1947","1952","1942"],answer:0,exp:"1950"},
{q:"लोकसभा?",options:["निचला","उच्च","न्यायालय","राज्य"],answer:0,exp:"निचला"}
],
set2: [
{q:"COP-29?",options:["जलवायु","युद्ध","व्यापार","कृषि"],answer:0,exp:"जलवायु"},
{q:"जलवायु सम्मेलन?",options:["COP","G20","BRICS","NATO"],answer:0,exp:"COP"}
],
set3: [
{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"},
{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"}
],
set4: [
{q:"बिहार विजन 2047?",options:["विकास","युद्ध","राजनीति","धर्म"],answer:0,exp:"विकास"},
{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"}
]
},

july: {set1:[{q:"बिहार?",options:["राज्य","देश","जिला","नगर"],answer:0,exp:"राज्य"},{q:"गंगा?",options:["नदी","पहाड़","रेगिस्तान","झील"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"राजस्थान?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"भारत?",options:["देश","राज्य","नगर","जिला"],answer:0,exp:"देश"},{q:"कोसी?",options:["नदी","पहाड़","झील","घाट"],answer:0,exp:"नदी"}],
set4:[{q:"डेल्टा?",options:["भूमि","जल","आग","हवा"],answer:0,exp:"भूमि"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}]
},

august: {set1:[{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"},{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकसभा?",options:["सदन","नदी","देश","राज्य"],answer:0,exp:"सदन"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

september: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

october: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

november: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

december: {set1:[{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},{q:"गांधी जयंती?",options:["2 अक्टूबर","15 अगस्त","26 जनवरी","1 मई"],answer:0,exp:"2 अक्टूबर"}],
set2:[{q:"COP?",options:["जलवायु","युद्ध","धर्म","राजनीति"],answer:0,exp:"जलवायु"},{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"}],
set3:[{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"},{q:"विजन 2047?",options:["विकास","युद्ध","धर्म","राजनीति"],answer:0,exp:"विकास"}],
set4:[{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}]
}

};

/* ================= GLOBAL ================= */
let currentTopic = "january";
let currentSet = "set1";
let questions = allTopics[currentTopic][currentSet];

let index = 0;

let selected = {};
let marked = {};
let resultStatus = {};

// Wrong Questions Retry Feature
let wrongQuestions = [];

// Timer
let timer;
let time = 20;

function saveProgress(){
    localStorage.setItem("quizState", JSON.stringify({
        currentTopic,
        currentSet,
        index,
        selected,
        marked,
        time
    }));
}

function loadProgress(){

    const data = localStorage.getItem("quizState");

    if(!data) return false;

    const state = JSON.parse(data);

    currentTopic = state.currentTopic || "january";
    currentSet = state.currentSet || "set1";
    index = state.index || 0;

    selected = state.selected || {};
    marked = state.marked || {};

    time = state.time || 20;

    questions = allTopics[currentTopic][currentSet] || [];

    return true;
}

// ================= ANALYTICS =================
let analytics = {
    total: 0,
    correct: 0,
    wrong: 0,
    negative: 0,
    percentage: 0
};

// Negative marking rule
let negativeMark = 0.25;

/* ================= SAFE INIT ================= */
function initApp(){
    if(!allTopics[currentTopic]){
        currentTopic = Object.keys(allTopics)[0];
    }

    currentSet = Object.keys(allTopics[currentTopic])[0];

    questions = shuffleArray(allTopics[currentTopic][set] || []);

    reset();
}

/* ================= LOAD TOPIC ================= */
function loadTopic(topic){

if(!allTopics[topic]){
alert("Topic not found: " + topic);
return;
}

currentTopic = topic;
currentSet = Object.keys(allTopics[topic])[0];

questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

index = 0;

reset();
updateActiveButtons();
}

/* ================= LOAD SET ================= */
function loadSet(set){

if(!allTopics[currentTopic] || !allTopics[currentTopic][set]){
alert("Set not found: " + set);
return;
}

currentSet = set;
questions = allTopics[currentTopic][currentSet] || [];

index = 0;

reset();
updateActiveButtons();
}

/* ================= RESET ================= */
function reset(){

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

index = 0;
selected = {};
marked = {};
resultStatus = {};
wrongQuestions = [];

clearInterval(timer);

load();
render();
startTimer();
updateActiveButtons();

}

/* ================= LOAD QUESTION ================= */
function load(){

if(!questions.length) return;

let q = questions[index];

document.getElementById("qText").innerText =
"Q" + (index + 1) + ": " + q.q;

document.getElementById("status").innerText =
currentTopic + " | " + currentSet + " | " + (index + 1) + "/" + questions.length;

let box = document.getElementById("options");
box.innerHTML = "";

q.options.forEach((o,i)=>{

let div = document.createElement("div");
div.className = "option";
div.innerText = o;

if(selected[index] === i){
div.classList.add("selected");
}

div.onclick = ()=>{

if(selected[index] === i){
delete selected[index];
} else {
selected[index] = i;
}

saveProgress();

load();
render();

};

box.appendChild(div);

});

updateBar();
}

/* ================= NAV ================= */
function next(){
if(index < questions.length - 1){
index++;

saveProgress();

load();
render();
startTimer();
}else{
submitQuiz();
}
}

function prev(){
if(index > 0){
index--;

saveProgress();

load();
render();
startTimer();
}
}

function mark(){
marked[index] = true;

saveProgress();

render();
}

/* ================= PALETTE ================= */
function render(){

let p = document.getElementById("palette");
p.innerHTML = "";

questions.forEach((q,i)=>{

let b = document.createElement("div");
b.className = "qbtn";
b.innerText = i + 1;

if(resultStatus[i] === "correct"){
b.classList.add("correct");
b.innerHTML = i + 1 + " ✔";
}
else if(resultStatus[i] === "wrong"){
b.classList.add("wrong");
b.innerHTML = i + 1 + " ❌";
}
else if(marked[i]){
b.classList.add("marked");
}
else if(selected[i] !== undefined){
b.classList.add("answered");
}

b.onclick = ()=>{
index = i;
load();
render();
startTimer();
};

p.appendChild(b);
});
}

/* ================= PROGRESS ================= */
function updateBar(){
document.getElementById("bar").style.width =
((index + 1) / questions.length) * 100 + "%";
}

/* ================= TIMER ================= */
function startTimer(){

clearInterval(timer);

time = 20;

timer = setInterval(()=>{

time--;
saveProgress();

document.getElementById("timerText").innerText = "⏳ " + time;
document.getElementById("timerBar").style.width = (time/20)*100 + "%";

if(time <= 0){
next();
}

},1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){

clearInterval(timer);

let score = 0;
resultStatus = {};
wrongQuestions = [];

questions.forEach((q,i)=>{

if(selected[i] === q.answer){
score++;
resultStatus[i] = "correct";
}else{
resultStatus[i] = "wrong";
wrongQuestions.push(q);
}
localStorage.removeItem("quizState");

});


document.getElementById("quizBox").style.display = "none";
document.getElementById("resultBox").style.display = "block";

let percent = Math.round((score / questions.length) * 100);

document.getElementById("scoreText").innerHTML =
`<h3>Score: ${score}/${questions.length}</h3>
<h3>Percentage: ${percent}%</h3>
<button onclick="retryWrongQuestions()">
🔄 Retry Wrong Questions (${wrongQuestions.length})
</button>`;

let rev = document.getElementById("review");
rev.innerHTML = "";

questions.forEach((q,i)=>{

let div = document.createElement("div");

let userAnswer = selected[i];
let isCorrect = userAnswer === q.answer;

div.className = isCorrect ? "result-correct" : "result-wrong";

div.innerHTML =
"<b>Q:</b> " + q.q +
"<br><b>Your Answer:</b> " +
(userAnswer !== undefined ? q.options[userAnswer] : "<span style='color:gray'>Not Attempted</span>") +
"<br><b>Correct Answer:</b> <span class='correct-answer'>" + q.options[q.answer] + "</span>" +
"<br><b>Explanation:</b> " + q.exp +
"<hr>";

rev.appendChild(div);

});

render();
}

/* ================= RETRY ================= */
function retryWrongQuestions(){

if(!wrongQuestions.length){
alert("🎉 कोई गलत प्रश्न नहीं है");
return;
}

questions = [...wrongQuestions];

index = 0;
selected = {};
marked = {};
resultStatus = {};

clearInterval(timer);

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

load();
render();
startTimer();
}

/* ================= SAFE INIT ================= */
function initApp() {
    // अगर current topic मौजूद नहीं है तो पहला topic set करो
    if (!allTopics[currentTopic]) {
        currentTopic = Object.keys(allTopics)[0];
    }

    // उस topic का पहला set auto select करो
    currentSet = Object.keys(allTopics[currentTopic])[0];

    // ✔️ IMPORTANT FIX: "set" नहीं, currentSet use करना है
    questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

    index = 0;

    reset();
}

function updateActiveButtons(){

    // TOPIC BUTTONS (MONTHS)
    document.querySelectorAll(".topic-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.topic === currentTopic) {
            b.classList.add("active-btn");
        }
    });

    // SET BUTTONS
    document.querySelectorAll(".set-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.set === currentSet) {
            b.classList.add("active-btn");
        }
    });

}


document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const topic = btn.getAttribute("data-topic");
        loadTopic(topic);
    });
});

document.querySelectorAll(".set-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const set = btn.getAttribute("data-set");
        loadSet(set);
    });
});

function shuffleArray(arr){
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

window.onload = () => {

    if(loadProgress()){

        load();
        render();
        startTimer();
        updateActiveButtons();

    }else{

        initApp();

    }

};

// TOPIC BUTTON CLICK
document.querySelectorAll(".topic-btn").forEach(btn=>{
    btn.onclick = () => loadTopic(btn.dataset.topic);
});

// SET BUTTON CLICK
document.querySelectorAll(".set-btn").forEach(btn=>{
    btn.onclick = () => loadSet(btn.dataset.set);
});