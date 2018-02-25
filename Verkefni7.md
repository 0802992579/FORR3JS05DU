Verkefni 7– DOM og Events (6%) 
Ólafur Ásdísarson 080299-2579

1. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi. (0.5%)  
Fall sem er kallað í eftir að annað fall hefur keyrt. 
Javascript er event driven mál og því er alls ekki víst að fall sem er á undan öðru falli klárist áður en seinna fallið keyrir. 
Í dæmi hér er aðeins kallað í allertFinished þegar búið er að keyra doHomework

```javascript
function doHomework( callback_fall) {
  alert(`Started`);
  callback_fall();
}
function alertFinished(){
  alert('Finished');
}
doHomework(alertFinished);
```

2. Hvað er EventLoop? Úrskýrðu með eigin orðum. (0.25%) 
 
3. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa). (0.25%) 

```javascript 
var el = document.getElementById('username');  
if(el){
  el.addEventListener('blur', checkUsername, false); 
}
```
  
 
4. Event flow, Hvað þýðir false í Event Listener? (0.25%) 
 
elUsername.addEventListener('blur' , function() {  checkUsername(5);  }, false) 
 
 
5. Hvað gera eftirfarandi aðferðir? (0.25%) a. stopPropagation() b. preventDefault() 



 setTimeout( function(){
    console.log(1);
  }, 500 );





1.
```css
.active {
   color: red;
	}
```

```javascript
document.getElementsByTagName("div")[0].setAttribute("class", "active"); 
document.getElementsByTagName("div")[2].innerHTML = ""; 
```

2. Finnur fyrsta link og skrifar hann út

3.
```javascript
var div = document.createElement("div");
document.body.appendChild(div);
document.getElementsByTagName("div")[0].setAttribute("id", "quiz"); 

div = document.createElement("div");
var t = document.createTextNode("Spurning 1");
div.appendChild(t);
document.getElementById("quiz").appendChild(div);
document.getElementsByTagName("div")[1].setAttribute("id", "question"); 

div = document.createElement("div");
document.getElementById("quiz").appendChild(div);
document.getElementsByTagName("div")[2].setAttribute("id", "answers"); 

div = document.createElement("div");
t = document.createTextNode("Svarmöguleiki 1");
div.appendChild(t);
document.getElementById("answers").appendChild(div);
document.getElementsByTagName("div")[3].setAttribute("class", "answer"); 
document.getElementsByTagName("div")[3].setAttribute("data-active", "answer"); 

div = document.createElement("div");
t = document.createTextNode("Svarmöguleiki 2");
div.appendChild(t);
document.getElementById("answers").appendChild(div);
document.getElementsByTagName("div")[4].setAttribute("class", "answer"); 
document.getElementsByTagName("div")[4].setAttribute("data-active", "answer"); 
```

4. HTMl Event Handlers, Traditional Event Handlers & DOM Level 2 Event Listeners.
DOM Level 2 eru bestir af því að einn event getur kallað í mörg föll