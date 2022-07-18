let inpEl=document.getElementById("inp-el")
let disEl=document.getElementById("ans-el") 
let π=Math.PI
let TAN=document.getElementById('tan')
 let COS=document.getElementById('cos')
 let sTin=document.getElementById("tsin")
//let x=JSON.stringify('*')
    function num(digit){
    let π=Math.PI
    inpEl.value+=digit
}
function sht(){
// document.write(5)
let TAN=document.getElementById('tan')
 let COS=document.getElementById('cos')
 let SIN=document.getElementById("sin")
 let INTAN=document.getElementById('intan')
 let INCOS=document.getElementById('incos')
 let INSIN=document.getElementById("insin")
 let INCOT=document.getElementById("incot")
 let INSEC=document.getElementById("insec")
 let INCSC=document.getElementById("incsc")
 
/*let COT=document.getElementById("cot")
 let SEC=document.getElementById("sec")
 let CSC=document.getElementById("csc")
 let ACOT=document.getElementById("acot")
 let ASEC=document.getElementById("asec")
 let ACSC=document.getElementById("acsc")*/
 
 let TANH=document.getElementById('tanh')
 let COSH=document.getElementById('cosh')
 let SINH=document.getElementById("sinh")
 let INTANH=document.getElementById('intanh')
 let INCOSH=document.getElementById('incosh')
 let INSINH=document.getElementById("insinh")
//if(SIN.style.display=="inline") {
    SIN.classList.toggle('style1')
    COS.classList.toggle('style1')
    TAN.classList.toggle('style1')
    INSIN.classList.toggle('style3')
    INCOS.classList.toggle('style3')
    INTAN.classList.toggle('style3')
    
    CSC.classList.toggle('style1')
    SEC.classList.toggle('style1')
    COT.classList.toggle('style1')
   ACSC.classList.toggle('style3')
    ACOT.classList.toggle('style3')
    ASEC.classList.toggle('style3')
    
    SINH.classList.toggle('style1')
    COSH.classList.toggle('style1')
    TANH.classList.toggle('style1')
    INSINH.classList.toggle('style3')
    INCOSH.classList.toggle('style3')
    INTANH.classList.toggle('style3')
//   }
}

function random(){
    inpEl.value=Math.random()
}
function exe(){
    disEl.value= eval(inpEl.value)
    if(inpEl.value===undefined) {
       disEl.value='Invalid' 
    }
    
}
function cancel(){
    inpEl.value=inpEl.value.substr(0,inpEl.value.length-1)
}
function cls(){
    inpEl.value=""
    disEl.value=""
}
const navBar=document.getElementById('nav-bar')
function cons(){
    navBar.style.display="block"
}

timesEl.addEventListener("click", function(){
    
    navBar.style.display='none'
})
function factorial(num) {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}

function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
}
/*function combination(n, r) 
{
  if (n==r || r==0) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}

function permutations(n,r){
    r=(r<n-r)?n-r:r;
    return productRange(r,n)/product_Range(1,n-r)
}*/
function sin(num){
    
    return Math.sin(Math.PI/180*num)
}
function cos(num){
    
    return Math.cos(Math.PI/180*num)
}
function tan(num){
    
    
    if(num===90||num===270) {
       return 'Undefined'
    }else{
        return Math.tan(Math.PI/180*num)
    }
}
function sinh(num){
    
    return Math.sinh(num)
}
function cosh(num){
    
    return Math.cosh(num)
}
function tanh(num){
    
    return Math.tanh(num)
}
function log(num){
    return Math.log10(num)
}
function ln(num){
    return Math.log(num)
}
function pi(){
let π=Math.PI
inpEl.value+='π'
}
function csc(num){
   return 1/Math.sin(Math.PI/180*num)
}
function sec(num){
   return 1/Math.cos(Math.PI/180*num)
}
function cot(num){
   return 1/Math.tan(Math.PI/180*num)
}

function e(num){
    return Math.exp(num)
}
function acot(num){
    
    return 1/(Math.atan(num)*180/Math.PI)
}
function asec(num){
    
    return 1/(Math.acos(num)*180/Math.PI)
}
function acsc(num){
    
    return 1/(Math.asin(num)*180/Math.PI)
}
function asin(num){
    
    return (Math.asin(num)*180/Math.PI)
}
function acos(num){
    
    return Math.acos(num)*180/Math.PI
}
function atan(num){
    
    return Math.atan(num)*180/Math.PI
}
function asinh(num){
    
    return Math.asinh(num)
}
function acosh(num){
    
    return Math.acosh(num)
}
function atanh(num){
    
    return Math.atanh(num)
}
function W(num){

   let y=num*Math.exp(num)
    return y
}
let Soln1=document.getElementById('soln1')
let LAMans=document.getElementById('lam-ans')
let SimulAns=document.getElementById('simul-ans')
let PolyAns=document.getElementById('poly-ans')
function ans1(){
let L1=parseFloat(document.getElementById('l1').value)
let N1=parseFloat(document.getElementById('n1').value)
let R1=parseFloat(document.getElementById('r1').value)
Soln1.innerHTML= `x = ${(R1-N1)/L1}`
}
function show1(){
let L1=parseFloat(document.getElementById('l1').value)
let N1=parseFloat(document.getElementById('n1').value)
let R1=parseFloat(document.getElementById('r1').value)

Soln1.innerHTML=`
     ${L1}x + ${N1}=${R1}<br>
     Subtract ${N1} from both sides<br>
     ${L1}x + ${N1} - ${N1} = ${R1} - ${N1}<br>
     ${L1}x = ${R1} - ${N1}<br>
     ${L1}x = ${R1-N1}<br>
     Divide both sides by ${L1}<br>
     x = ${(R1-N1)/L1}     
`
}
function simul2() {
SimulAns.innerHTML=`
<br>
 <input id="a1" type="number"> x +
      <input id="b1" type="number"> y =
      <input id="c1" type="number">  ...eqn 1
    <br>
    <input id="a2" type="number"> x +
    <input id="b2" type="number"> y =
    <input id="c2" type="number">  ...eqn 2<br>
<br><button onclick="simulAns2()" class="simulBut">Answer</button>
    <button onclick="simulShowSoln2()" class="simulBut">Solution</button>
    <p id="simul-soln"></p>
    <br>
    <hr>
`
}

function simulShowSoln2(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2'). value)
let C2=parseFloat(document.getElementById('c2').value)
let simulSoln=document.getElementById('simul-soln')

simulSoln.innerHTML=
`
From eqn 1, ${A1}x + ${B1}y = ${C1}<br>
<b>Make x the subject of formula</b><br>
<b>Subtract ${B1}y from both sides.</b> <br>
${A1}x + ${B1}y - ${B1}y = ${C1} - ${B1}y<br>
${A1}x = ${C1} - ${B1}y<br>

<b>Divide Both sides By ${A1}</b><br>

x = ((${C1} - ${B1}y)/${A1})<br>
<b>Substitute the value of x in eqn 2.</b><br>
${A2}((${C1} - ${B1}y)/${A1}) + ${B2}y = ${C2}<br>
<b>Expand the bracket in the LHS</b><br>
${A2*C1/A1} - ${A2*B1/A1}y + ${B2}y = ${C2}<br>
<b>Simplifying result...<br></b>
${A1*B2-A2*B1}y = ${A1*C2-A2*C1}<br>
<b>y = ${(A1*C2-A2*C1)/(A1*B2-A2*B1)}</b><br>
<b>To get x, substitute the value of y in eqn 1.</b><br>
Say, ${A1}x + ${B1}(${(A1*C2-A2*C1)/(A1*B2-A2*B1)}) = ${C1}<br>
<b>Subtract ${B1}(${(A1*C2-A2*C1)/(A1*B2-A2*B1)}) from both sides.</b><br>
x = ${(C1*B2-C2*B1)/(A1*B2-A2*B1)}<br><br>
Hence, <b>x = ${(C1*B2-C2*B1)/(A1*B2-A2*B1)} and y = ${(A1*C2-A2*C1)/(A1*B2-A2*B1)}<b>

`
}
function simulAns2(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2'). value)
let C2=parseFloat(document.getElementById('c2').value)
let simulSoln=document.getElementById('simul-soln')

simulSoln.innerHTML=`
x = ${(C1*B2-C2*B1)/(A1*B2-A2*B1)}<br>

y = ${(A1*C2-A2*C1)/(A1*B2-A2*B1)}

`
}
function simul3() {
SimulAns.innerHTML=`
<br>
     <input id="a1" type="number"> x +
      <input id="b1" type="number"> y +
      <input id="c1" type="number"> z =
     <input id="d1" type="number">  ...eqn 1
    <br>
    <input id="a2" type="number"> x +
 <input id="b2" type="number"> y +
 <input id="c2" type="number"> z =
 <input id="d2" type="number">  ...eqn 2
 <br>
 <input id="a3" type="number"> x +
 <input id="b3" type="number"> y +
 <input id="c3" type="number"> z =
 <input id="d3" type="number">  ...eqn 3
<br><br><button onclick="simulAns3()" class="simulBut">Answer</button>
    <button onclick="simulShowSoln3()" class="simulBut">Solution</button>
    <p id="simul-soln"></p>
    <br>
    <hr>
`
}
function simulAns3(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let D1=parseFloat(document.getElementById('d1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2').value)
let C2=parseFloat(document.getElementById('c2').value)
let D2=parseFloat(document.getElementById('d2'). value)
let A3=parseFloat(document.getElementById('a3'). value)
let B3=parseFloat(document.getElementById('b3'). value)
let C3=parseFloat(document.getElementById('c3').value)
D3=parseFloat(document.getElementById('d3').value)
let P1=A1*B2-A1*A2*B1
let Q1=A1*C2-A1*A2*C1
let R1=A1*D2-A1*A2*D1
let P2=A1*B3-A1*A3*B1
let Q2=A1*C3-A1*A3*C1
let R2=A1*D3-A1*A3*D1

let Z=(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)
let Y=(R1-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2))/P1
let X=(D1-B1*Y-C1*Z)/A1
let simulSoln=document.getElementById('simul-soln')
simulSoln.innerHTML=`
<b>x = ${X}</b><br>
<b>y = ${Y}</b><br>
<b>z = ${Z}</b><br>
`
}
function simulShowSoln3(){
let A1=parseFloat(document.getElementById('a1').value)
let B1=parseFloat(document.getElementById('b1').value)
let C1=parseFloat(document.getElementById('c1'). value)
let D1=parseFloat(document.getElementById('d1'). value)
let A2=parseFloat(document.getElementById('a2'). value)
let B2=parseFloat(document.getElementById('b2').value)
let C2=parseFloat(document.getElementById('c2').value)
let D2=parseFloat(document.getElementById('d2'). value)
let A3=parseFloat(document.getElementById('a3'). value)
let B3=parseFloat(document.getElementById('b3'). value)
let C3=parseFloat(document.getElementById('c3').value)
D3=parseFloat(document.getElementById('d3').value)
let P1=A1*B2-A1*A2*B1
let Q1=A1*C2-A1*A2*C1
let R1=A1*D2-A1*A2*D1
let P2=A1*B3-A1*A3*B1
let Q2=A1*C3-A1*A3*C1
let R2=A1*D3-A1*A3*D1

let Z=(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)
let Y=(R1-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2))/P1
let X=(D1-B1*Y-C1*Z)/A1
let simulSoln=document.getElementById('simul-soln')
simulSoln.innerHTML=`
<b>From eqn 1, make x the subject of Formula.</b><br>
<b>Subtract ${B1}y + ${C1}z from both sides</b><br>
${A1}x = ${D1} - ${B1}y - ${C1}z<br>
<b>Divide all through by ${A1}</b><br>
x = (${D1} - ${B1}y - ${C1}z)/${A1}<br>
<b>Now, substitute the value of x in eqn's 2 and 3</b><br>
Eq2: ${A2}((${D1} - ${B1}y - ${C1}z)/${A1}) + ${B2}y + ${C2}z = ${D2}<br>
<b>Now simplify</b><br>
${A1*A2}(${D1} - ${B1}y - ${C1}z) + ${A1*B2}y + ${A1*C2}z = ${A1*D2}<br>
${A1*B2-A1*A2*B1}y + ${A1*C2-A1*A2*C1}z = ${A1*D2-A1*A2*D1}...eq4<br><br>
Eq 3: ${A3}((${D1} - ${B1}y -${C1}z)/${A1}) + ${B3}y + ${C3}z = ${D3}<br>
<b>Now simplify</b><br>
${A1*A3}(${D1} - ${B1}y - ${C1}z) + ${A1*B3}y + ${A1*C3}z = ${A1*D3}<br>
${A1*B3-A1*A3*B1}y + ${A1*C3-A1*A3*C1}z = ${A1*D3-A1*A3*D1}...eq5
<hr>
<b>Bringing eq4 and eq5 together.</b><br>

${P1}y + ${Q1}z = ${R1}...eq4<br>
${P2}y + ${Q2}z = ${R2}...eq5<br>
<b>Make y the subject of formula in eq5</b><br>
y = (${R1} + ${-Q1}z)/${P1}<br>
<b>Substitute the value of y in eq5</b><br>
(${P2})(${R1} + ${-Q1}z)/${P1}) + ${Q2}z = ${R2}<br>
<b>Multiply all through by ${P1}</b><br>
${P2}(${R1} + ${-Q1}z) + ${P1*Q2}z = ${R2*P1}<br>
${P2*R1} + ${-P2*Q1}z + ${P1*Q2}z= ${P1*R2}<br>
${-P2*Q1+P1*Q2}z = ${(P1*R2-P2*R1)}<br>
<b>z = ${(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)}</b><br>
<b>To get y, substitute the value of z in eq4;</b><br>
${P1}y +${Q1}(${(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)})=${R1}<br>
<b>Subtract ${-Q1}(${(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)}) from both sides.</b><br>
${P1}y = ${R1} + ${-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2)}<br>
<b>y=${(R1-Q1*(P1*R2-P2*R1)/(-P2*Q1+P1*Q2))/P1}</b><br>
<b>To get x, substitute the values of y and z in eq 1.</b>
${A1}x = ${D1} - ${B1}y - ${C1}z<br>
${A1}x = ${D1} - ${B1}(${Y}) - ${C1}(${Z})<br>
x = ${(D1-B1*Y-C1*Z)/A1}<br>
<b>Hence, x = ${X}, y = ${Y} and z = ${Z}</b>
`
}
function cubic() {
 PolyAns.innerHTML=`  
<br>
COMING SOON... 
 <br><br>
 `
}
function quartics(){
    PolyAns.innerHTML=`
<br>    
COMING SOON...   
<br><br>
    `
}
function quadr(){
    PolyAns.innerHTML=`
    <br>
 <input id="qA" type="number">x² +
 <input id="qB" type="number">x + 
 <input id="qC" type="number"> = 0<br><br>
 <button onclick="polyAns()" class="poly-but">Answer</button>
 <button onclick="polySoln()" class="poly-but">Solution</button>
 <p id='poly-answer'></p>
 
 <hr>
    `
}
function polyAns(){
    let polyAnswer=document.getElementById('poly-answer')
    let QA=parseFloat(document.getElementById('qA').value)
let QB=parseFloat(document.getElementById('qB').value)
let QC=parseFloat(document.getElementById('qC').value)

    polyAnswer.innerHTML=`
<b>x = ${(-QB/(2*QA))+((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b> or<br>
<b>x = ${(-QB/(2*QA))-((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b>

    `
}
function polySoln(){
    let polyAnswer=document.getElementById('poly-answer')
    let QA=parseFloat(document.getElementById('qA').value)
let QB=parseFloat(document.getElementById('qB').value)
let QC=parseFloat(document.getElementById('qC').value)
polyAnswer.innerHTML=`
    ${QA}x² + ${QB}x + ${QC} = 0<br>
    <b>Subtract both sides by ${QC}</b><br>
    ${QA}x² + ${QB}x = -${QC}<br>
    <b>Divide all through by ${QA}</b><br>
    x² + (${QB}/${QA})x = -${QC}/${QA}<br>
  <b>Add (${QB}/${2*QA})² to both sides</b><br>
 x² + (${QB}/${QA})x + (${QB}/${2*QA})²= -${QC}/${QA} + (${QB}/${2*QA})²<br>
 <b>By factorization</b><br>
 (x + ${QB}/${2*QA})² = -${QC}/${QA} + ${QB}²/${4*QA}²<br>
 <b>Further Simplification</b><br>
  (x + ${QB}/${2*QA})² = ${-4*QA*QC+QB**2}/${4*QA*QA}<br>
  <b>Square root both sides</b><br>
  x + ${QB}/${2*QA} = ±√(${-4*QA*QC+QB**2})/(${2*QA})
<b>Subtract ${QB/(2*QA)} from both sides</b><br>
x = -${QB/(2*QA)} ± √(${-4*QA*QC+QB**2})/(${2*QA})<br>
Hence, <b>x = ${(-QB/(2*QA))+((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b> or<br>
<b>x = ${(-QB/(2*QA))-((QB**2-4*QA*QC)**(1/2))/(2*QA)}</b>
`
}
function foLam() {
    LAMans.innerHTML=`
    xe<sup>x</sup> = <input id="cl1" type="number">
<br>
<button onclick="foLambertAns()" type="number">Answer</button>
 <button onclick="foLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
    `
}
function foLambertAns() {
let lamAns=document.getElementById('lam-answer')
let CL1=parseFloat(document.getElementById('cl1').value)

    lamAns.innerHTML=`
    x = W(${CL1})
    `
}
function foLambertSoln() {
let lamAns=document.getElementById('lam-answer')
let CL1=parseFloat(document.getElementById('cl1').value)

    lamAns.innerHTML=`
 <b>Apply Lambert Function to both sides</b><br>
 W(xe<sup>x</sup>) = W(${CL1})<br>
 
    x = W(${CL1})
    `
}
function fLam(){
LAMans.innerHTML=`
<br>
<input id="al1" type="number">x^(<input id="v1" type="number">x) =
 <input id="cl1" type="number"><br><br>

<button onclick="fLambertAns()">Answer</button>
 <button onclick="fLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
`
}
function fLambertAns() {
let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
  let V1=parseFloat(document.getElementById('v1').value)
  let CL1=parseFloat(document.getElementById('cl1').value)
  lamAns.innerHTML=`
    x = e <sup>W((1/${V1}(Ln(${CL1}/${AL1})))</sup><br>
    <b> x= e<sup>W(
    ${1/V1*Math.log(CL1/AL1) } ) 
     </sup><b>
`
}
function fLambertSoln() {
let lamAns=document.getElementById('lam-answer')
  let V1=parseFloat(document.getElementById('v1').value)
  let AL1=parseFloat(document.getElementById("al1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
  lamAns.innerHTML=`
  <b>Divide all through by ${AL1}</b><br>
  x<sup>${V1}x</sup> = ${CL1}/${AL1}<br>
<b> Find the ${V1}th root of both sides.</b><br>
 x<sup>x</sup> = (${CL1}/${AL1})<sup>1/${V1}</sup><br>
<b>Apply the Ln function to both sides.</b><br>
 xLn(x) = 1/${V1}(Ln(${CL1}/${AL1})<br>
 <b>By laws of Logarithm, x = e<sup>Lnx</sup></b><br>
 e<sup>Lnx</sup> × Lnx = (1/${V1}(Ln(${CL1}/${AL1})<br>
 <b>Apply Lambert Function to both sides</b><br>
 W(e<sup>Lnx</sup> × Lnx) = W((1/${V1}(Ln(${CL1}/${AL1}))<br>
 <b>But, W(ye<sup>y</sup>) = y</b><br>
 Lnx = W((1/${V1}(Ln(${CL1}/${AL1})))<br>
 .: x = e <sup>W((1/${V1}(Ln(${CL1}/${AL1})))</sup><br>
 <b> x= e<sup>W(
    ${1/V1*Math.log(CL1/AL1) } ) 
     </sup><b>
  `
}
function sLam() {
    LAMans.innerHTML=`
    <br>
 <input id="al1" type="number">Lnx = <input id="v1" type="number">x + 
 <input id="cl1" type="number">
 <br><br>
 <button onclick="sLambertAns()">Answer</button>
 <button onclick="sLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
    `
}
function sLambertAns(){
let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)
lamAns.innerHTML=`
x = e<sup>(${CL1}/${AL1}) - W(-(${V1}/${AL1}) e<sup>(${CL1}/${AL1})</sup>)<br>
<b>x = ${Math.exp(CL1/AL1)} - W(${-V1/AL1*Math.exp(CL1/AL1)})

`
}

function sLambertSoln() {
let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)
lamAns.innerHTML=`
${V1}x = ${AL1}Lnx - ${CL1}<br>
<b>Divide both sides by ${AL1}x</b><br>
${V1}/${AL1} = (1/x)(Lnx - (${CL1}/${AL1})<br>
${V1}/${AL1} = x-¹(Lnx - (${CL1}/${AL1}))<br>
<b>But, x = e<sup>Lnx</sup></b><br>
${V1}/${AL1} = e<sup>-Lnx</sup>(Lnx - (${CL1}/${AL1}))<br>
<b>Multiply all through by -e<sup>${CL1}/${AL1}.</b><br>
(${-V1}/${AL1})e<sup>${CL1}/${AL1}</sup> = e<sup>${CL1}/${AL1}-Lnx</sup>(${CL1}/${AL1} - Lnx)<br>
<b>Apply Lambert Function</b><br>
W(e<sup>${CL1}/${AL1}-Lnx</sup>(${CL1}/${AL1} - Lnx)) = W((${-V1}/${AL1})e<sup>${CL1}/${AL1}</sup>)<br>
${CL1}/${AL1} - Lnx = W((${-V1}/${AL1})e<sup>${CL1}/${AL1}</sup>)<br>
Lnx = ${CL1}/${AL1} - W((${-V1}/${AL1})e<sup>${CL1}/${AL1}</sup>)<br>
x = e<sup>(${CL1}/${AL1}) - W(-(${V1}/${AL1}) e<sup>(${CL1}/${AL1})</sup>)<br>
<b>x = ${Math.exp(CL1/AL1)} - W(${-V1/AL1*Math.exp(CL1/AL1)})

`
}

eqn.addEventListener('click', function(){
 document.getElementById("equation").style.display="block"
 document.getElementById("container").style.display="none"
    
})
backEl.addEventListener('click', function(){
 document.getElementById("equation").style.display="none"
 document.getElementById("container").style.display="block"
    
})
function foLam(){
    LAMans.innerHTML=`
    <br>
 <input id="al1" type="number">x^(<input id="pl1" type="number">)e^(<input id="v1" type="number">x) = <input id="cl1" type="number">
    <br><br>
 <button onclick="sLambertAns()">Answer</button>
 <button onclick="sLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
    `
}
function sLambertAns() {
  let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
let PL1=parseFloat(document.getElementById("pl1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)  
lamAns.innerHTML=`
   x = (${PL1}/${V1})W[(${V1}/${PL1})(${CL1}/${AL1})<sup>1/${PL1}</sup>]<br>
   <b>x = ${PL1/V1}W(${V1/PL1*(CL1/AL1)**(1/PL1)})</b>
`
}
function sLambertSoln() {
  let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
let PL1=parseFloat(document.getElementById("pl1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)  
lamAns.innerHTML=`
<b>Divide both sides by ${AL1}</b><br>
x<sup>${PL1}</sup>e<sup>${V1}x</sup> = ${CL1}/${AL1}<br>
<b>Find the ${PL1}th root of both sides.</b><br>
xe<sup>${V1}x/${PL1}</sup> = $({CL1}/${AL1})<sup>1/${PL1}</sup><br>
<b>Multiply both sides by ${V1}/${PL1}</b><br>
(${V1}/${PL1})xe<sup>${V1}x/${PL1}</sup> = (${V1}/${PL1})$({CL1}/${AL1})<sup>1/${PL1}</sup><br>
<b>Apply Lambert function to both sides</b><br>
W((${V1}/${PL1})xe<sup>${V1}x/${PL1}</sup>) = W((${V1}/${PL1})(${CL1}/${AL1})<sup>1/${PL1}</sup>)<br>
   x = (${PL1}/${V1})W[(${V1}/${PL1})(${CL1}/${AL1})<sup>1/${PL1}</sup>]<br>
   <b>x = ${PL1/V1}W(${V1/PL1*(CL1/AL1)**(1/PL1)})</b>
`
}
function tLam() {
LAMans.innerHTML=`

 <br>
 <input id="v1" type="number"> <input id="al1" type="number">^x =  <input id="bl1" type="number">x +  <input id="cl1" type="number">
 <br><br>
 <button onclick="tLambertAns()">Answer</button>
 <button onclick="tLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
 `
}
function tLambertAns() {
    let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
let BL1=parseFloat(document.getElementById("bl1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)  
lamAns.innerHTML=`
x = [-W(-Ln${AL1}(${V1}/${BL1}×e<sup>(${-CL1}/${BL1})Ln${AL1}</sup>)) - (${CL1}Ln${AL1})/${BL1}]/Ln${AL1}<br>
<b>x = [-W(${-Math.log(AL1)*(V1/BL1*Math.exp(-CL1/BL1*Math.log(AL1)))} - ${CL1/BL1*Math.log(AL1)}]/(${Math.log(AL1)})
`
}
function tLambertSoln() {
    let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
let BL1=parseFloat(document.getElementById("bl1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)  
lamAns.innerHTML=`
${V1} = ${AL1}<sup>-x</sup>(${BL1}x + ${CL1})<br>
<b>But, a<sup>-x</sup> = e<sup>-xLna</sup></b><br>
${V1} = e<sup>-xLna</sup>(${BL1}x + ${CL1})<br>
<b>Divide both sides by ${BL1}</b><br>
${V1}/${BL1} = e<sup>-xLna</sup>(x + ${CL1}/${BL1})<br>
<b>Multiply both sides by 
-Ln${AL1}e<sup>-${CL1}Ln${AL1}/${BL1}</sup></b><br>
-Ln${AL1}(${V1}/${BL1}×e<sup>-${CL1}Ln${AL1}/${BL1}</sup>) = e<sup>-(xLn{AL1}+${CL1}Ln${AL1}/${BL1})</sup> × (-xLn{AL1}-${CL1}Ln${AL1}/${BL1})<br>
<b>Apply Lambert Function</b><br>
-xLn${AL1} - ${CL1}Ln${AL1}/${BL1} = W(-Ln${AL1}(${V1}/${BL1}×e<sup>-${CL1}Ln${AL1}/${BL1}</sup>))<br>
x = (-W(-Ln${AL1}(${V1}/${BL1}×e<sup>-${CL1}Ln${AL1}/${BL1}</sup>)) - ${CL1}Ln${AL1}/${BL1})<br>
x = [-W(-Ln${AL1}(${V1}/${BL1}×e<sup>(${-CL1}/${BL1})Ln${AL1}</sup>)) - (${CL1}Ln${AL1})/${BL1}]/Ln${AL1}<br>
<b>x = [-W(${-Math.log(AL1)*(V1/BL1*Math.exp(-CL1/BL1*Math.log(AL1)))} - ${CL1/BL1*Math.log(AL1)}]/(${Math.log(AL1)})
`
}
function fiLam() {
LAMans.innerHTML=`

 <br>
 <input id="al1" type="number">x + <input id="pl1" type="number">e^(<input id="v1" type="number">x) =  <input id="cl1" type="number">
 <br><br>
 <button onclick="fiLambertAns()">Answer</button>
 <button onclick="fiLambertSoln()">Solution</button>
 <p id='lam-answer'></p>
 
 <hr>
 `
}
function fiLambertAns() {
  let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
let PL1=parseFloat(document.getElementById("pl1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)  
lamAns.innerHTML=`  
x = - 
((W(${V1}e<sup>(${V1}×${CL1}/${AL1})</sup>×${PL1}/${AL1})/${V1}) + ${CL1}/${AL1}<br>
<b>x = -W(${V1*Math.exp(V1*CL1/AL1)*PL1/AL1}) + ${CL1/AL1}
`
}

function fiLambertSoln() {
  let lamAns=document.getElementById('lam-answer')
let AL1=parseFloat(document.getElementById("al1").value)
let PL1=parseFloat(document.getElementById("pl1").value)
  let CL1=parseFloat(document.getElementById('cl1').value)
let V1=parseFloat(document.getElementById('v1').value)  
lamAns.innerHTML=`  
${PL1}e<sup>${V1}x</sup> = ${CL1} - ${AL1}x<br>
<b>Divide both sides by e<sup>${V1}x</sup></b><br>
${PL1} = e<sup>${-V1}x</sup> (${CL1} - ${AL1}x)<br>
<b>Multiply all through by (${V1}e<sup>${V1}${CL1}/${AL1}</sup>)/${AL1}</b><br>

(${PL1}${V1}e<sup>${V1}${CL1})/${AL1}</sup> = e<sup>${-V1}x + ${V1}${CL1}/${AL1} </sup> (${V1}${CL1}/${AL1} - ${V1}x)<br>

<b>Apply Lambert Function to both sides</b><br>
W((${PL1}${V1}e<sup>${V1}${CL1})/${AL1}</sup>) = W(e<sup>${-V1}x + ${V1}${CL1}/${AL1} </sup> (${V1}${CL1}/${AL1} - ${V1}x))<br>

${V1}${CL1}/${AL1} -${V1}x = W((${PL1}${V1}e<sup>${V1}${CL1})/${AL1})<br>




x = - 
((W(${V1}e<sup>(${V1}×${CL1}/${AL1})</sup>×${PL1}/${AL1})/${V1}) + ${CL1}/${AL1}<br>
<b>x = -W(${V1*Math.exp(V1*CL1/AL1)*PL1/AL1}) + ${CL1/AL1}
`
}
