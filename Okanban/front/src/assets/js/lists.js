const lists = {
  async getLists() {
    console.log('Envoi de la requête GET /Lists au serveur...');
    try {
      const response = await fetch('http://localhost:3000/lists', {
        method: 'GET',
      });

      console.log('Réponse reçue :', response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const lists = await response.json();
      console.log('Données reçues:', lists);
      return lists;
    } catch (error) {
      console.error('Erreur lors du fetching des listes:', error);
    }
  },

  async fetchAndDisplayLists() {
    const listData = await lists.getLists();
    lists.addListToListsContainer(listData);
  },

  addListToListsContainer(listData) {
    //ici on recupere le div container et on injecte le html avec le contenu de lists
    const listsContainer = document.querySelector(
      '.flex-container #lists-container',
    );
    if (listData.length > 1) {
      listData.forEach((list) => {
        let listSection = document.createElement('section');
        listSection.classList.add('message', 'is-info');
        listSection.id = list.id;
        listSection.innerHTML = `
              <div class="message-header">
                <div slot="list-name">${list.name}</div>
                <div class="card-header-icon">
                  <span class="icon is-clickable"><i class="fas fa-plus"></i></span>
                  <span class="icon has-text-danger ml-2"><i class="fas fa-trash-alt"></i></span>
                </div>
              </div>`;
        listsContainer.appendChild(listSection);
      });
    } else {
      let listSection = document.createElement('section');
      listSection.classList.add('message', 'is-info');
      listSection.id = listData.id;
      listSection.slot = 'list-id';
      listSection.innerHTML = `
              <div class="message-header">
                <div slot="list-name">${listData.name}</div>
                <div class="card-header-icon">
                  <span class="icon is-clickable"><i class="fas fa-plus"></i></span>
                  <span class="icon has-text-danger ml-2"><i class="fas fa-trash-alt"></i></span>
                </div>
              </div>`;
      listsContainer.appendChild(listSection);
    }
    //Une fois les elements integrés dans le DOM, on pose un écouteur d'evenement ici
    lists.listenToDeleteOnButtonList();
  },

  listenToSubmitOnAddListForm() {
    const modalAddButtonListener = document.querySelector(
      '.modal .modal-card form',
    );
    modalAddButtonListener.addEventListener('submit', (event) => {
      event.preventDefault();
      const formElm = event.target;
      const formData = new FormData(formElm);
      const formDataObj = Object.fromEntries(formData);
      //les deux lignes ci-dessous à retirer lorsque la liste de projets
      //sera intégrée à l'application et l'incrémentation automatique de "position" lors de l'enregistrement en BDD'
      formDataObj.position = '100';
      formDataObj.project_id = '5';
      //
      //On vide le formulaire et on désactive la modale
      const dataForm = document.querySelector('.modal-card-body .input');
      dataForm.value = '';
      const listModal = document.querySelector('.modal');
      listModal.classList.remove('is-active');
      lists.createList(formDataObj);
    });
  },

  async createList(listData) {
    console.log('Envoi de la requête POST /Lists au serveur');
    try {
      const response = await fetch('http://localhost:3000/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listData),
      });

      console.log('Réponse reçue :', response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const list = await response.json();
      console.log('Données reçues:', list);
      //On ajoute dynamiquement l'element créée à la liste
      lists.addListToListsContainer(list);
      return list;
    } catch (error) {
      console.error('Erreur lors du fetching des listes:', error);
    }
  },

  async listenToDeleteOnButtonList(selectedListSection) {
    if (selectedListSection) {
      //DELETE avec l'id du grand-parent (section) de la balise à laquelle appartient le bouton suppression cliqué
      await lists.deleteList(selectedListSection.id);
      //On supprime ICI l'élement du DOM
      selectedListSection.remove();
      const listModal = document.querySelector('.modal.modal3');
      if (listModal) {
        listModal.classList.remove('is-active');
      }
    }
  },

  async deleteList(listId) {
    console.log('Envoi de la requête DELETE /Lists au serveur');
    try {
      const response = await fetch(`http://localhost:3000/lists/${listId}`, {
        method: 'DELETE',
      });

      console.log('Réponse reçue :', response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const list = await response.json();
      console.log('Données reçues:', list);
      return list;
    } catch (error) {
      console.error('Erreur lors du fetching des listes:', error);
    }
  },

  async listenToUpdateOnButtonList(selectedListSection, newListName) {
    if (selectedListSection) {
      //préparation de la requete PATCH- recup data du form
      //position = '100';
      //project_id = '5';
      //A ENLEVER lorsque LA BDD SERA REPARAMETREE
      await lists.updateList(Number(selectedListSection.id), {
        name: newListName,
        position: 100,
        project_id: 5,
      });
      //Mise à jour du DOM
      const listDOMSection = document.getElementById(
        Number(selectedListSection.id),
      );
      listDOMSection.innerHTML = `
      <div class="message-header">
        <div slot="list-name">${newListName}</div>
        <div class="card-header-icon">
          <span class="icon is-clickable"><i class="fas fa-plus"></i></span>
          <span class="icon has-text-danger ml-2"><i class="fas fa-trash-alt"></i></span>
        </div>
      </div>`;
      // On désactive la modale
      const listModal = document.querySelector('.modal.modal2');
      if (listModal) {
        listModal.classList.remove('is-active');
      }
      //On vide le formulaire
      const dataForm = document.querySelector(
        '.modal2 .modal-card-body .input',
      );
      dataForm.value = '';
    }
  },

  async updateList(listId, newListObject) {
    console.log('Envoi de la requête PATCH /Lists au serveur');

    try {
      const response = await fetch(`http://localhost:3000/lists/${listId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListObject),
      });

      console.log('Réponse reçue :', response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const list = await response.json();
      console.log('Données reçues:', list);
      return list;
    } catch (error) {
      console.error('Erreur lors du fetching des listes:', error);
    }
  },
};

export default lists;
