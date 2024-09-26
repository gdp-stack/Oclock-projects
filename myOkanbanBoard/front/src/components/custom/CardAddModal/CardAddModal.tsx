import axios from "axios";
import { useRef } from "react";
import type { ListType } from "@/types/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

type modalCardProps = {
  setModalAddCard: React.Dispatch<React.SetStateAction<boolean>>;
  setLists: React.Dispatch<React.SetStateAction<ListType[]>>;
  listId: number;
};

function CardAddModal({ setModalAddCard, setLists, listId }: modalCardProps) {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  async function createNewCard(cardTitle: FormDataEntryValue) {
    const response = await axios.post("http://localhost:3000/api/cards", {
      content: cardTitle,
      color: "#5c3715",
      list_id: Number(listId),
    });
    setLists((prevList) =>
      prevList.map((list: ListType) => {
        if (list.id === Number(listId)) {
          if (list.cards) {
            return {
              ...list,
              cards: [response.data, ...list.cards],
            };
          }
          return {
            ...list,
            cards: [response.data],
          };
        }
        return list;
      })
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const newCard = Object.fromEntries(dataForm.entries()).cardTitle;
    createNewCard(newCard);
    console.log("Tâche créee");
    setModalAddCard(false);
  }

  function handleCancel() {
    setModalAddCard(false);
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
            Créer une tâche
          </CardTitle>
        </CardHeader>
        <CardContent>
          <input
            className="text-gray-500 text-sm"
            name="cardTitle"
            placeholder="test"
          />
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Button
            ref={cancelButtonRef}
            variant="outline"
            className="px-4 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={handleCancel}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="px-4 py-1 text-sm border text-white rounded-md "
          >
            Créer
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default CardAddModal;
