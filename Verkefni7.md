Verkefni 7� DOM og Events (6%) 
�lafur �sd�sarson 080299-2579

1. Hva� er callback? �tsk�r�u me� eigin or�um, komdu me� k��ad�mi. (0.5%)  
Fall sem er kalla� � eftir a� anna� fall hefur keyrt. 
Javascript er event driven m�l og �v� er alls ekki v�st a� fall sem er � undan ��ru falli kl�rist ��ur en seinna falli� keyrir. 
� d�mi h�r er a�eins kalla� � allertFinished �egar b�i� er a� keyra doHomework

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

2. Hva� er EventLoop? �rsk�r�u me� eigin or�um. (0.25%) 
 
3. Lei�r�ttu eftirfarandi k��a �annig a� hann virki (ekki syntax villa). (0.25%) 

```javascript 
var el = document.getElementById('username');  
if(el){
  el.addEventListener('blur', checkUsername, false); 
}
```
  
 
4. Event flow, Hva� ���ir false � Event Listener? (0.25%) 
 
elUsername.addEventListener('blur' , function() {  checkUsername(5);  }, false) 
 
 
5. Hva� gera eftirfarandi a�fer�ir? (0.25%) a. stopPropagation() b. preventDefault() 



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

2. Finnur fyrsta link og skrifar hann �t

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
t = document.createTextNode("Svarm�guleiki 1");
div.appendChild(t);
document.getElementById("answers").appendChild(div);
document.getElementsByTagName("div")[3].setAttribute("class", "answer"); 
document.getElementsByTagName("div")[3].setAttribute("data-active", "answer"); 

div = document.createElement("div");
t = document.createTextNode("Svarm�guleiki 2");
div.appendChild(t);
document.getElementById("answers").appendChild(div);
document.getElementsByTagName("div")[4].setAttribute("class", "answer"); 
document.getElementsByTagName("div")[4].setAttribute("data-active", "answer"); 
```

4. HTMl Event Handlers, Traditional Event Handlers & DOM Level 2 Event Listeners.
DOM Level 2 eru bestir af �v� a� einn event getur kalla� � m�rg f�ll