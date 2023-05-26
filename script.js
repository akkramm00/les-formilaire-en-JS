//création des varialbes par ciblage :

 let entertainment = document.querySelector('select');
 let animalRadioButtons = document.querySelectorAll('input[type = "radio"]');
 let tos = document.querySelector('input[type="checkbox"]')

 entertainment.addEventListener('change' ,(event) => {
    console.log(`${event.target.name} : ${event.target.value}`)
 });
 
 // On peut de ce fait changer la valeur du champ select depuis le fichier script comme cela :
 entertainment.value = 'movies';// il faut jste saisir une valeur existante 

 // pour les elements radio il faut à chaque un événement avec la  fonction 'forEach' comme cela :

 animalRadioButtons.forEach((animalRadioButton) => {
    animalRadioButton.addEventListener('change', function (event) {
        console.log(`${event.target.id}: ${event.target.checked}`);// on utilise 'id' pour spécifier chaque radio( les radios sont atchés tous par le meme 'name')
    }) ;
 });
 animalRadioButtons[3].checked = true;
 // le checked va nous permettre de récupérer une valeur booleen 'true'ou 'false' cad si une valeur parmis la liste  est cochée ou pas 

 tos.addEventListener('change' , function(event) {
    console.log(`${event.target.name} : ${event.target.checked}`);
 });

 // on peut cocher la case par defaut en manipulant la valeur du tos:
 tos.checked = true ;

 // Validation formulaire :
  // => designation du variable :

  let form = document.querySelector("form")
  form.addEventListener('submit', (event) => {
   event.preventDefault();
   console.log('Formulaire validé')
  });
  // la methode "eventPreventDefault" permet d'eviter le comportement par default de la validation
  // on peut déclencher la validation du formulaire manuelement avec l'automatisation de "submit":par exemple au bout de (2 sec)  
  //pour cela on utilise  la fonction (setTimeout()):
  setTimeout(() => {
   form.Submit()
  }, 2000);
  // REMARQUE IMPORTANT :il est préférable de se passer de ce type de validation avec "submit"
  //car les données ne sont pas vérifiées.

  // si on a vraiment besoin de validation manuelle on peut opter pour une autre approche:

  // on va chercher le bouton "envoyer" et on remplace le {form.submit()} par l'option{submitButton.click()};
  
  let submitButton = document.querySlelector('button');

  setTimeout(() => {
   submitButton.click();
  }, 2000);