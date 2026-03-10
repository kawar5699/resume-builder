function generateResume(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let phone=document.getElementById("phone").value
let education=document.getElementById("education").value
let projects=document.getElementById("projects").value

document.getElementById("rname").innerText=name
document.getElementById("remail").innerText=email
document.getElementById("rphone").innerText=phone
document.getElementById("reducation").innerText=education
document.getElementById("rprojects").innerText=projects

let file=document.getElementById("photo").files[0]

if(file){

let reader=new FileReader()

reader.onload=function(e){
document.getElementById("rphoto").src=e.target.result
}

reader.readAsDataURL(file)

}

let skill1=document.getElementById("skill1").value
let level1=document.getElementById("level1").value

document.getElementById("s1").innerText=skill1
document.getElementById("bar1").style.width=level1+"%"

let skill2=document.getElementById("skill2").value
let level2=document.getElementById("level2").value

document.getElementById("s2").innerText=skill2
document.getElementById("bar2").style.width=level2+"%"

let skill3=document.getElementById("skill3").value
let level3=document.getElementById("level3").value

document.getElementById("s3").innerText=skill3
document.getElementById("bar3").style.width=level3+"%"

let score=0

if(name) score++
if(email) score++
if(phone) score++
if(education) score++
if(projects) score++
if(skill1) score++

let result="Weak"

if(score>=4) result="Good"
if(score>=6) result="Strong"

document.getElementById("strength").innerText=result

let suggestions=[]
let scorePercent=0

if(name) scorePercent+=15
else suggestions.push("Add your full name")

if(email) scorePercent+=15
else suggestions.push("Add email address")

if(phone) scorePercent+=10
else suggestions.push("Add phone number")

if(education) scorePercent+=15
else suggestions.push("Add education details")

if(projects){
scorePercent+=20
}else{
suggestions.push("Add more projects")
}

if(skill1 || skill2 || skill3){
scorePercent+=15
}else{
suggestions.push("Add technical skills")
}

if(!file){
suggestions.push("Upload a profile photo")
}

if(scorePercent<70){
suggestions.push("Add certifications")
suggestions.push("Improve technical skills")
}

document.getElementById("score").innerText="Resume Score: "+scorePercent+"%"

let list=document.getElementById("suggestions")
list.innerHTML=""

suggestions.forEach(function(item){

let li=document.createElement("li")
li.innerText=item
list.appendChild(li)

})

document.getElementById("qrcode").innerHTML=""

new QRCode(document.getElementById("qrcode"),{
text:"Resume of "+name,
width:120,
height:120
})

}

function careerAI(){

let subject=document.getElementById("subject").value
let coding=document.getElementById("coding").value
let design=document.getElementById("design").value
let data=document.getElementById("data").value

let career=""

if(coding=="yes" && subject=="programming"){
career="Recommended Career: Software Developer"
}

else if(design=="yes"){
career="Recommended Career: Frontend Developer / UI Designer"
}

else if(data=="yes"){
career="Recommended Career: Data Analyst"
}

else if(subject=="network"){
career="Recommended Career: Network Engineer"
}

else{
career="Recommended Career: IT Support Specialist"
}

document.getElementById("aiResult").innerText=career

}

function toggleMode(){
document.body.classList.toggle("dark")
}