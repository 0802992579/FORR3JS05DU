Verkefni 6 – DOM og Events (6%) 
Ólafur Ásdísarson 080299-2579

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