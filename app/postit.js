console.log('postit.js chargé');

const modelPostIt = { //?Réprésentation du post-it sous forme de données
    title: '',
    content: '',
    createStamp: 0,
    updateStamp: 0,
};

/**
 * *Retoune un élément html représentant un post-It
 * @param {object} postItData //*Données du post-it sous forme d'objet litérale
 * @returns //*L'élément DOM généré
 */

function postItGetDOM(postItData) {

/*<div class="post-it">  
    <div class="commands">    
        <div class="btn btn-success hidden" data-cmd="save" data-visible="edit-mode">💾</div>    
        <div class="btn" data-cmd="edit" data-visible="view-mode">🖊️</div>    
        <div class="btn btn-danger" data-cmd="delete" data-visible="view-mode">🗑️</div>  
    </div>  
    <div class="content">    
        <div class="timestamp create">Creation: Maintenant</div>    
        <div class="timestamp update">MàJ: Maintenant</div>    
        <div class="title">Hello</div>    
        <div class="message">Toto</div>  
    </div>
</div>*/

    const elPostIt = document.createElement('div'); //? Représentation du post-it à l'affichage
    elPostIt.classList.add('post-it');

    //TODO: Le code complet du post-it

    return elPostIt;
};