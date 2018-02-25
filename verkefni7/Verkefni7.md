Verkefni 7 
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

Ferli sem skoðar stanslaust hvort call stack sé tómt.
Ef það er ekkert þar þá skoðar það Event Queue. Ef eitthvað er þar þá færir það þá call stack.
 
3. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa). (0.25%) 

```javascript 
var el = document.getElementById('username');  
if(el){
  el.addEventListener('blur', checkUsername, false); 
}
```
  
 
4. Event flow, Hvað þýðir false í Event Listener? (0.25%) 
```javascript 
 elUsername.addEventListener('blur' , function() {  checkUsername(5);  }, false) 
``` 

Að Event Bubbling er notað en ekki Event Capturing
Í Event Bubbling þá fer atburðurinn á frá most specific node út í þá minnst specific
En öfugt í Event Capturing.
 
5. Hvað gera eftirfarandi aðferðir? (0.25%) 
a. stopPropagation() 
Stoppar atburðin í að fara áfram til ancestors. Ancestorinn bregst þá aldrei við honum.
b. preventDefault()
Stoppar default hegðun atburðarins 

