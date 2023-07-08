let na=prompt("Name:","");
document.getElementById('nam').innerHTML=na;

let onn=prompt('One word that defines you...',"")
document.getElementById('onword').innerHTML=onn;

let ph=prompt('Mobile Number',"");
document.getElementById('phn').innerHTML=ph;

let mail=prompt('Email',"")
document.getElementById('email').innerHTML=mail;

let about=prompt('About Yourself',"")
document.getElementById('about').innerHTML=about;

let comp=prompt('Competence',"")
document.getElementById('competence').innerHTML=comp;

let skil=prompt('Skills...',"")
document.getElementById('skills').innerHTML=skil;

let col=prompt('Education-college',"")
document.getElementById('college').innerHTML="<b>"+col+"</b>";

let course=prompt('Education-course',"")
document.getElementById('course').innerHTML=course;

let lang=prompt('Languages You Know',"")
document.getElementById('lang').innerHTML=lang;

let wrk=prompt('Work Experience...',"")
document.getElementById('wrk').innerHTML=wrk;

let port=prompt('portfolio website...',"");

document.getElementById('site').innerHTML="<b>"+port+"</b>";
document.getElementById('link').innerHTML="<a href=${port}>"+"Visit site"+"</a>";

window.print();