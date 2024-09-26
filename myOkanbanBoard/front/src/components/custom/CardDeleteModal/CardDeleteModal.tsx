import axios from "axios";
import { useRef } from "react";
import type { CardType, ListType } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type modalCardProps = {
  setModalDeleteCard: React.Dispatch<React.SetStateAction<boolean>>;
  setLists: React.Dispatch<React.SetStateAction<ListType[]>>;
  cardId: number;
  listId: number;
};

function CardDeleteModal({
  setModalDeleteCard,
  setLists,
  cardId,
  listId,
}: modalCardProps) {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  async function deleteCard(data: number) {
    await axios.delete(`http://localhost:3000/api/cards/${data}`);
    setLists((prevLists) =>
      prevLists?.map((list: ListType) => {
        if (list.id === Number(listId)) {
          return {
            ...list,
            cards: list.cards.filter(
              (card: CardType) => card.id !== Number(cardId)
            ),
          };
        }
        return list;
      })
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    deleteCard(cardId);
    console.log("Tache supprimée");
    setModalDeleteCard(false);
  }

  function handleCancel() {
    setModalDeleteCard(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key === "Enter") {
      event.preventDefault();
      if (
        cancelButtonRef.current &&
        cancelButtonRef.current === document.activeElement
      ) {
        handleCancel();
      } else {
        handleSubmit(event);
      }
    }
  }

  return (
    <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
      <Card className="w-[350px] p-6 shadow-lg rounded-lg bg-white">
        <CardHeader className="space-y-1.5">
          <CardTitle className="text-xl font-semibold text-gray-500">
            Supprimer une tâche
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-between mt-4">
          <Button
            ref={cancelButtonRef}
            variant="outline"
            className="px-4 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={handleCancel}
          >
            Annuler
          </Button>
          <Button className="px-4 py-1 text-sm border text-white rounded-md ">
            Supprimer
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default CardDeleteModal;
