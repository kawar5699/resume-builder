function toggleMode(){
document.body.classList.toggle("dark")
}

function val(id){
return document.getElementById(id).value
}

function setText(id,v){
document.getElementById(id).innerText=v
}

function setWidth(id,v){
document.getElementById(id).style.width=v+"%"
}

// MAIN
function generateResume(){

setText("rname",val("name"))
setText("remail",val("email"))
setText("rphone",val("phone"))

setText("reducation",val("education"))
setText("rprojects",val("projects"))
setText("rcert",val("certifications"))
setText("rintern",val("internships"))
setText("rsummary",val("summary"))

setText("s1",val("skill1"))
setText("s2",val("skill2"))
setText("s3",val("skill3"))

setWidth("bar1",val("level1"))
setWidth("bar2",val("level2"))
setWidth("bar3",val("level3"))

uploadPhoto()
generateQR()
applyTemplate()
aiDetector()
}

// PHOTO
function uploadPhoto(){
let file=document.getElementById("photo").files[0]
if(file){
let reader=new FileReader()
reader.onload=e=>{
document.getElementById("previewPhoto").src=e.target.result
}
reader.readAsDataURL(file)
}
}

// AI DETECTOR
function aiDetector(){
let score=60
let sug=[]

if(val("projects").length<10) sug.push("Add more projects")
else score+=10

if(val("certifications").length<5) sug.push("Add certifications")
else score+=5

if(val("internships").length<5) sug.push("Add internships")
else score+=5

if(val("summary").length<10) sug.push("Add summary")
else score+=10

if(score>100) score=100

let text="Resume Score: "+score+"%\n\n"
sug.forEach(s=>text+="• "+s+"\n")

document.getElementById("score").innerText=text
}

// SUMMARY
function generateSummary(){
document.getElementById("summary").value=
"Motivated BCA student with strong technical skills."
}

// CAREER AI
function careerAI(){

let q1=val("q1")
let q2=val("q2")
let q3=val("q3")
let q4=val("q4")
let q5=val("q5")

let result=""

if(q1==="yes" && q5==="logic")
result="Software Developer"

else if(q2==="yes" && q5==="creative")
result="UI/UX Designer"

else if(q3==="yes" && q5==="analysis")
result="Data Analyst"

else if(q4==="yes")
result="Cyber Security"

else
result="General IT Roles"

document.getElementById("careerResult").innerText=
"🎯 Career: "+result
}

// PDF
function downloadPDF(){
const {jsPDF}=window.jspdf
let pdf=new jsPDF()
pdf.text("Resume: "+val("name"),10,10)
pdf.save("resume.pdf")
}

// QR
function generateQR(){
document.getElementById("qrcode").innerHTML=""
new QRCode(document.getElementById("qrcode"),{
text:"Resume",
width:100,
height:100
})
}

// TEMPLATE
function applyTemplate(){
let t=val("template")
let card=document.getElementById("resumeCard")

if(t=="2") card.style.background="#e3f2fd"
else if(t=="3") card.style.background="#fce4ec"
else card.style.background="white"
}

// 3D EFFECT
window.onload=function(){

let card=document.getElementById("resumeCard")

card.addEventListener("mousemove",(e)=>{
let rect=card.getBoundingClientRect()

let x=e.clientX-rect.left
let y=e.clientY-rect.top

let rx=(y-rect.height/2)/15
let ry=(rect.width/2-x)/15

card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`
})

card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0)"
})

}
