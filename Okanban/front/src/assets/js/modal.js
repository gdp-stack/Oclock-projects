import lists from './lists.js';

const modal = {
  // Modal Ajout de liste //
  listenToClickOnAddListModal() {
    const listAddButtonListener = document.querySelector(
      '.message .message-body .button',
    );
    if (listAddButtonListener) {
      listAddButtonListener.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut s'il y en a un
        const listModal = document.querySelector('.modal.modal1');
        if (listModal) {
          listModal.classList.add('is-active');
        }
      });
    }
  },

  // Modal Modification de liste //
  listenToClickOnUpdateListModal() {
    let selectedListSection;
    const listUpdateButtonListener =
      document.querySelectorAll('.icon.is-clickable');
    listUpdateButtonListener.forEach((list) => {
      list.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut s'il y en a un
        selectedListSection = list.parentElement.parentElement.parentElement;
        const listModal = document.querySelector('.modal.modal2');
        if (listModal) {
          listModal.classList.add('is-active');
        }
      });
    });
    const listValidateUpdateButtonListener =
      document.querySelector('.modal2 form');
    listValidateUpdateButtonListener.addEventListener('submit', (event) => {
      event.preventDefault();
      const formElm = event.target;
      const dataForm = new FormData(formElm);
      const newListName = Object.fromEntries(dataForm).name;
      lists.listenToUpdateOnButtonList(selectedListSection, newListName);
    });
  },

  // Modal Suppression de liste //
  listenToClickOnDeleteListModal() {
    let selectedListSection;
    const listUpdateButtonListener = document.querySelectorAll(
      '.icon.has-text-danger.ml-2',
    );
    listUpdateButtonListener.forEach((list) => {
      list.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut s'il y en a un
        selectedListSection = list.parentElement.parentElement.parentElement;
        const listModal = document.querySelector('.modal.modal3');
        if (listModal) {
          listModal.classList.add('is-active');
        }
        return selectedListSection;
      });
    });
    const listValidateDeleteButtonListener =
      document.querySelector('.modal3 form');
    listValidateDeleteButtonListener.addEventListener('submit', (event) => {
      event.preventDefault();
      lists.listenToDeleteOnButtonList(selectedListSection);
    });
  },

  // Fermeture des modales
  listenToClickOnModalClosingElements(modal) {
    const modalCloseButtonListener = document.querySelector(
      '.modal.' + modal + ' .modal-card-head .delete.close',
    );
    if (modalCloseButtonListener) {
      modalCloseButtonListener.addEventListener('click', (event) => {
        event.preventDefault();
        const listModal = document.querySelector('.modal.' + modal);
        if (listModal) {
          listModal.classList.remove('is-active');
        }
      });
    }
    const modalCancelButtonListener = document.querySelector(
      '.modal.' + modal + ' .modal-card-foot .button.close',
    );
    if (modalCancelButtonListener) {
      modalCancelButtonListener.addEventListener('click', (event) => {
        event.preventDefault();
        const listModal = document.querySelector('.modal.' + modal);
        if (listModal) {
          listModal.classList.remove('is-active');
        }
      });
    }
  },

  closeActiveModal(modal) {
    const listModalBackground = document.querySelector(
      '.' + modal + ' .modal-background',
    );
    if (listModalBackground) {
      listModalBackground.addEventListener('click', (event) => {
        event.preventDefault();
        const listModal = document.querySelector('.modal.' + modal);
        if (listModal && listModal.classList.contains('is-active')) {
          listModal.classList.remove('is-active');
        }
      });
    }
  },
};

export default modal;
