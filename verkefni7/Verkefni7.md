Verkefni 7 
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

Ferli sem sko�ar stanslaust hvort call stack s� t�mt.
Ef �a� er ekkert �ar �� sko�ar �a� Event Queue. Ef eitthva� er �ar �� f�rir �a� �� call stack.
 
3. Lei�r�ttu eftirfarandi k��a �annig a� hann virki (ekki syntax villa). (0.25%) 

```javascript 
var el = document.getElementById('username');  
if(el){
  el.addEventListener('blur', checkUsername, false); 
}
```
  
 
4. Event flow, Hva� ���ir false � Event Listener? (0.25%) 
```javascript 
 elUsername.addEventListener('blur' , function() {  checkUsername(5);  }, false) 
``` 

A� Event Bubbling er nota� en ekki Event Capturing
� Event Bubbling �� fer atbur�urinn � fr� most specific node �t � �� minnst specific
En �fugt � Event Capturing.
 
5. Hva� gera eftirfarandi a�fer�ir? (0.25%) 
a. stopPropagation() 
Stoppar atbur�in � a� fara �fram til ancestors. Ancestorinn bregst �� aldrei vi� honum.
b. preventDefault()
Stoppar default heg�un atbur�arins 

