//***************************app.js****************************** */

const app = {
    elBtnClear: document.getElementById('clear-btn'), //? Récupération du bouton "effacer tout" du html
    elPostItsContainer: document.getElementById('post-its-w'), //? Récupération de la div Post-it du html
    elCreateForm: null //? je mets un objet inexistant pour préparer la variable qui va contenir le formulaire
};





//? commentaire en dessous permet de commander le code ici si on passe la souris sur la function d'en dessous
//? peut permettre de documenter une application
/**
 ** Démarrage de l'application
 */

function appInit() {
    console.log('Application démarré');


    //? Création  du formulaire
    appCreateFormDOM(); //? créer le formualaire et le stocke dans le DOM

    //? Reconstitution des Post-it enregistrés

    //? Injection du formulaire
    app.elPostItsContainer.append(app.elCreateForm)
};

/**
 * * Fabrique le formulaire d'ajout d'un Post-it
 */

function appCreateFormDOM() {  //?Application qui va créer le formulaire
    /*
    <div id="create-form" class="post-it">  
        <div class="content">    
            <div class="title">Ajouter un Post-It</div>    
            <input type="text" id="form-title" placeholder="Titre">    
            <textarea id="form-content" placeholder="Message"></textarea>    
            <div class="btn btn-success" id="form-save">Enregistrer</div>  
        </div>
    </div> */

    //? Préparation du Post-It contenant le formulaire
    app.elCreateForm = document.createElement('div');//?Création d'une div
    app.elCreateForm.classList.add('post-it'); //? Création d'une classe sur la div
    app.elCreateForm.id = 'create-form'; //? Création de l'id sur la div


    //? Préparation du contenu de elCreateForm
    let htmlContent = '<div class="content">'; //? on lui rajoute à chaque fois une partie de l'HTML pour que le code soit lisible
    htmlContent += '<div class="title">Ajouter un Post-It</div>';
    htmlContent += '<input type="text" id="form-title" placeholder="Titre"></input>';
    htmlContent += '<textarea id="form-content" placeholder="Message"></textarea>';
    htmlContent += '<div class="btn btn-success" id="form-save">Enregistrer</div>';
    htmlContent += '</div>';


    //? Injection du contenu dans elCreateForm
    app.elCreateForm.innerHTML = htmlContent; //? On rajoute le contenu de la variable dans le texte html (innerHTML) pour qu'il existe


    // ? Gestion du bouton d'enregistrement  
    const elBtnNewPostIt = app.elCreateForm.querySelector('#form-save'); //? Récupération du bouton
    elBtnNewPostIt.addEventListener('click', appHandlerNewPostIt); // ? On lui applique un écouteur

};

/**
 * * Gestionnaire de l'enregistrement d'un nouveau Post-It
 */
function appHandlerNewPostIt() {
    console.log('cliqué');

}