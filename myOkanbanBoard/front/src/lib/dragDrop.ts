import Sortable from "sortablejs";
import axios from "axios";

// Fonction utilitaire pour PATCH les listes sur le backend
async function patchList(id: number, data: { position: number }) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/lists/${id}`,
      data
    );
    console.log(`List ${id} updated to position ${data.position}`);
    return response.data;
  } catch (error) {
    console.error("Error updating list position", error);
  }
}

// Fonction pour initialiser le drag & drop
export function initListsDragAndDrop(
  listsContainer: HTMLDivElement,
  lists: any[],
  setLists: (lists: any[]) => void
) {
  // Vérifier si la liste est bien initialisée avant d'activer le drag & drop
  if (!lists || lists.length === 0) {
    console.error("Lists are not available for drag-and-drop.");
    return;
  }

  Sortable.create(listsContainer, {
    animation: 150,
    handle: '[slot="move-list-handle"]',
    onEnd: (event) => {
      const { oldIndex, newIndex } = event;

      // Vérification des index
      console.log("Old Index:", oldIndex, "New Index:", newIndex);

      if (oldIndex === newIndex) return;

      // Copier les listes avant de les modifier
      const updatedLists = [...lists];

      // Vérifier le contenu des listes avant la manipulation
      console.log("Lists before move:", updatedLists);

      // Essayer de retirer l'élément à déplacer
      const movedItem = updatedLists.splice(oldIndex, 1)[0];

      // Vérification de la validité de l'élément déplacé
      if (!movedItem) {
        console.error("Moved item is undefined. Check the list data.");
        return;
      }

      // Insérer l'élément à la nouvelle position
      updatedLists.splice(newIndex, 0, movedItem);

      // Vérifier l'état des listes après le déplacement
      console.log("Lists after move:", updatedLists);

      // Mettre à jour l'état avec les nouvelles positions
      setLists(updatedLists);

      // Sauvegarder la nouvelle position des listes dans le backend
      updatedLists.forEach(async (list, index) => {
        if (list && list.id) {
          // Appel à l'API pour sauvegarder la nouvelle position
          await patchList(list.id, { position: index + 1 });
        } else {
          console.error("List or list id is undefined.");
        }
      });
    },
  });
}
