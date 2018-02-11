Verkefni 5 - DOM – 6% 
Ólafur Ásdísarson 080299-2579

1. 0.25%   Afhverju er getElementById() fljótleglegasta aðferðin? 
Af því að id er unique og þá þarf ekki leita meira þegar það er fundið

2. 0.25%   Hvað gerir querySelectorAll()? komdu með kóðasýnidæmi ásamt skýringu. 
Skilar öllum elementum með ákveðnum css selector sem NodeList object.  Hér er náð í sem er merkt með class="change" og lit á fyrsta node (0) og öðru node (1) er breytt

```javascript
   var x = document.querySelectorAll(".change");
    x[0].style.backgroundColor = "red";
    x[1].style.backgroundColor = "blue";
```

3.    1%   Hvað er NodeList? Útskýrðu útfrá eftirfarandi kóðasýnidæmi, útskýrðu línu fyrir línu. 
NodeList er safn af node. 
```javascript
var elements = document.getElementsByTagName('li');  	//getElementsByTagName skilar NodeList sem er sett í elements
	if (elements.length > 0) {     			//ef length á elements er stærri en 0 þá er eitthvað í elements = NodeList skilaði einhverju
		var el = elements[2];      		//það er hægt að ná í ákveðna Node út frá númer. el nær í þriðja Node frá element
		el.className = 'cool'; } 		// og setur class="cool"
```

4. 0.25%   Hvað gerir getElementsByTagName()? Hverju eru skilað? komdu með kóðsýnidæmi. 
Skilar NodeList eftir HTML-tag, röðin er eins og á HTML síðunni
```javascript
 var x = document.getElementsByTagName("H2");		//Nær í öll element merkt <h2>
    var i;		
    for (i = 0; i < x.length; i++) {			//fer í gegnum öll Nodes í NodeList
        x[i].style.backgroundColor = "red";		//bakgrunnur settur rauður
```   

5. 0.25%   Hvað er málið með auða hnúta (e. whitespace nodes) og vafra? hvernig leysum við slíkt? 
Flestir vafara túlka bil, og carriage return milli elementa sem whitespace. 
Ef við erum að lesa næsta Node eða Node á undan þá getum við lesið þessa auðu hnúta óvart.
Við notum ekki skipanir eins og perviousSibling, nextSibling, firstChild, lastChild

6.    4%    Þú ert að smíða Quiz app. Búðu til tvær spurningar (frjálst efnisval). Útlit (css) er   algjört aukaatriði (frjáls útfærsla). 
Búðu til html í html skránni fyrir Quiz appið, notaðu div fyrir spurningar og svarmöguleika). Ekki nota JavaScript til að búa til Quiz. Það á eingöngu að vera eitt id fyrir Quiz í html.  b) Teiknaðu upp DOM tré af vefappinu ásamt hnútum (e. nodes). Notaðu t.d. https://www.draw.io/  til að ná þessu fram. c) Búðu til tvo objecta sem innihalda spurningu, svarmöguleika og rétta svar.  
 
d) Búðu til DOM elements (vísanir í html skrá) eftir þörfum. 
 
e) Notaðu Element.innerHTML aðferðina til að birta fyrstu spurningu ásamt svarmöguleikum í html skrá. Ath

<html>
<body>
<di v id="page">
<hl id="header">List</hl>
<h2>Buy groceries</h2>
<ul>
<li id="one" class="hot"><em>fresh</em> figs</li>
<li id="two" class="hot">pine nuts</l i>
<l i id="three" class="hot">honey</l i>
<l i id="four">balsamic vinegar</l i>
</ ul>
<script src="js/l i st. js "></scri pt>
</ div>
</ body>
</ html>

DOM-tree 194

