import Sortable from "sortablejs";
import axios from "axios";
import type { ListType } from "@/types/types";

// Fonction utilitaire pour PATCH les listes sur le backend
async function patchList(id: number, data: { position: number }) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/lists/${id}`,
      data
    );
    console.log(`Liste ${id} mise à jour à la position ${data.position}`);
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour de la position de la liste",
      error
    );
  }
}

// Fonction pour initialiser le drag & drop
export function initListsDragAndDrop(
  listsContainer: HTMLDivElement,
  lists: ListType[],
  setLists: (lists: ListType[]) => void
) {
  // Vérifier si la liste est bien initialisée avant d'activer le drag & drop
  if (!lists || lists.length === 0) {
    console.error("Les listes ne sont pas disponibles pour le drag-and-drop.");
    return null;
  }

  return Sortable.create(listsContainer, {
    animation: 150,
    handle: '[slot="move-list-handle"]',
    onEnd: (event) => {
      const { oldIndex, newIndex } = event;

      // Vérification des index
      console.log("Ancien Index :", oldIndex, "Nouvel Index :", newIndex);

      if (
        oldIndex === newIndex ||
        oldIndex === undefined ||
        newIndex === undefined
      )
        return;

      // Copier les listes avant de les modifier
      const updatedLists = [...lists];

      // Vérifier le contenu des listes avant la manipulation
      console.log("Listes avant déplacement :", updatedLists);

      // Essayer de retirer l'élément à déplacer
      const movedItem = updatedLists.splice(oldIndex, 1)[0];

      // Vérification de la validité de l'élément déplacé
      if (!movedItem) {
        console.error(
          "L'élément déplacé est indéfini. Vérifiez les données de la liste."
        );
        return;
      }

      // Insérer l'élément à la nouvelle position
      updatedLists.splice(newIndex, 0, movedItem);

      // Vérifier l'état des listes après le déplacement
      console.log("Listes après déplacement :", updatedLists);

      // Mettre à jour l'état avec les nouvelles positions
      setLists(updatedLists);

      // Sauvegarder la nouvelle position des listes dans le backend
      updatedLists.forEach(async (list, index) => {
        if (list?.id) {
          // Appel à l'API pour sauvegarder la nouvelle position
          await patchList(list.id, { position: index + 1 });
        } else {
          console.error("La liste ou son identifiant est indéfini.");
        }
      });
    },
  });
}
