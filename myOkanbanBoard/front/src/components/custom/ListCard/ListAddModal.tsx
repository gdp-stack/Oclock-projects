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

type modalListProps = {
  setModalAddList: React.Dispatch<React.SetStateAction<boolean>>;
  setLists: React.Dispatch<React.SetStateAction<ListType[]>>;
};

function ListAddModal({ setModalAddList, setLists }: modalListProps) {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  async function createNewList(listTitle: FormDataEntryValue) {
    const response = await axios.post("http://localhost:3000/api/lists", {
      title: listTitle,
    });
    setLists((prevList) => [response.data, ...prevList]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const newList = Object.fromEntries(dataForm.entries()).listTitle;
    createNewList(newList);
    console.log("liste créee");
    setModalAddList(false);
  }

  function handleCancel() {
    setModalAddList(false);
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
            Créer une liste
          </CardTitle>
        </CardHeader>
        <CardContent>
          <input
            className="text-gray-500 text-sm"
            name="listTitle"
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

export default ListAddModal;
