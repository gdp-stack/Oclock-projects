import Sortable from "sortablejs";
import axios from "axios";

// Fonction utilitaire pour PATCH les listes sur le backend
async function patchList(id: number, data: { position: number }) {
  try {
    await axios.patch(`http://localhost:3000/api/lists/${id}`, data);
    console.log(`List ${id} updated to position ${data.position}`);
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
  Sortable.create(listsContainer, {
    animation: 150,
    handle: '[slot="move-list-handle"]',
    onEnd: (event) => {
      const { oldIndex, newIndex } = event;
      if (oldIndex === newIndex) return;

      // Copier les listes, les réarranger et les mettre à jour dans l'état
      const updatedLists = [...lists];
      const movedItem = updatedLists.splice(oldIndex, 1)[0];
      updatedLists.splice(newIndex, 0, movedItem);

      setLists(updatedLists);

      // Sauvegarder la nouvelle position des listes dans le backend
      updatedLists.forEach(async (list, index) => {
        await patchList(list.id, { position: index + 1 });
      });
    },
  });
}
