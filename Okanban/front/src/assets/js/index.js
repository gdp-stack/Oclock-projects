import modal from './modal.js';
import lists from './lists.js';

const app = {
  async init() {
    //Récuperation des données des listes
    await lists.fetchAndDisplayLists();

    //Activation des Event Listeners modale Ajout de Liste
    modal.listenToClickOnAddListModal();
    modal.listenToClickOnModalClosingElements('modal1');
    modal.closeActiveModal('modal1');
    lists.listenToSubmitOnAddListForm();

    //Activation des Event Listeners modale Modification de Liste
    modal.listenToClickOnUpdateListModal();
    modal.listenToClickOnModalClosingElements('modal2');
    modal.closeActiveModal('modal2');
    lists.listenToUpdateOnButtonList();

    //Activation des Event Listeners modale Suppression de Liste
    modal.listenToClickOnDeleteListModal();
    modal.listenToClickOnModalClosingElements('modal3');
    modal.closeActiveModal('modal3');
    lists.listenToDeleteOnButtonList();

    console.log('Application initialisée');
  },
};
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
