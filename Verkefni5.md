Verkefni 5 - DOM � 6% 
�lafur �sd�sarson 080299-2579

1. 0.25%   Afhverju er getElementById() flj�tleglegasta a�fer�in? 
Af �v� a� id er unique og �� �arf ekki leita meira �egar �a� er fundi�

2. 0.25%   Hva� gerir querySelectorAll()? komdu me� k��as�nid�mi �samt sk�ringu. 
Skilar �llum elementum me� �kve�num css selector sem NodeList object.  H�r er n�� � sem er merkt me� class="change" og lit � fyrsta node (0) og ��ru node (1) er breytt

```javascript
   var x = document.querySelectorAll(".change");
    x[0].style.backgroundColor = "red";
    x[1].style.backgroundColor = "blue";
```

3.    1%   Hva� er NodeList? �tsk�r�u �tfr� eftirfarandi k��as�nid�mi, �tsk�r�u l�nu fyrir l�nu. 
NodeList er safn af node. 
```javascript
var elements = document.getElementsByTagName('li');  	//getElementsByTagName skilar NodeList sem er sett � elements
	if (elements.length > 0) {     			//ef length � elements er st�rri en 0 �� er eitthva� � elements = NodeList skila�i einhverju
		var el = elements[2];      		//�a� er h�gt a� n� � �kve�na Node �t fr� n�mer. el n�r � �ri�ja Node fr� element
		el.className = 'cool'; } 		// og setur class="cool"
```

4. 0.25%   Hva� gerir getElementsByTagName()? Hverju eru skila�? komdu me� k��s�nid�mi. 
Skilar NodeList eftir HTML-tag, r��in er eins og � HTML s��unni
```javascript
 var x = document.getElementsByTagName("H2");		//N�r � �ll element merkt <h2>
    var i;		
    for (i = 0; i < x.length; i++) {			//fer � gegnum �ll Nodes � NodeList
        x[i].style.backgroundColor = "red";		//bakgrunnur settur rau�ur
```   

5. 0.25%   Hva� er m�li� me� au�a hn�ta (e. whitespace nodes) og vafra? hvernig leysum vi� sl�kt? 
Flestir vafara t�lka bil, og carriage return milli elementa sem whitespace. 
Ef vi� erum a� lesa n�sta Node e�a Node � undan �� getum vi� lesi� �essa au�u hn�ta �vart.
Vi� notum ekki skipanir eins og perviousSibling, nextSibling, firstChild, lastChild

6.    4%    �� ert a� sm��a Quiz app. B��u til tv�r spurningar (frj�lst efnisval). �tlit (css) er   algj�rt aukaatri�i (frj�ls �tf�rsla). 
B��u til html � html skr�nni fyrir Quiz appi�, nota�u div fyrir spurningar og svarm�guleika). Ekki nota JavaScript til a� b�a til Quiz. �a� � eing�ngu a� vera eitt id fyrir Quiz � html.  b) Teikna�u upp DOM tr� af vefappinu �samt hn�tum (e. nodes). Nota�u t.d. https://www.draw.io/  til a� n� �essu fram. c) B��u til tvo objecta sem innihalda spurningu, svarm�guleika og r�tta svar.  
 
d) B��u til DOM elements (v�sanir � html skr�) eftir ��rfum. 
 
e) Nota�u Element.innerHTML a�fer�ina til a� birta fyrstu spurningu �samt svarm�guleikum � html skr�. Ath

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

