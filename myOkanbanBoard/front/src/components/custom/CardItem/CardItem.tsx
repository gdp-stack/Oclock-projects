import { FaEdit, FaTrash } from "react-icons/fa";
import type { CardType } from "@/types/types";

interface CardItemProps {
  card: CardType;
  listId: number;
  setListId: (id: number) => void;
  setCardId: (id: number) => void;
  setModalEditCard: (open: boolean) => void;
  setModalDeleteCard: (open: boolean) => void;
}

const CardItem = ({
  card,
  listId,
  setListId,
  setCardId,
  setModalEditCard,
  setModalDeleteCard,
}: CardItemProps) => {
  return (
    <li className="flex justify-between border border-black border-solid p-2 px-4 m-2 bg-white text-sm">
      {card.content}
      <div className="flex gap-1">
        <FaEdit
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => {
            setListId(listId);
            setCardId(card.id);
            setModalEditCard(true);
          }}
        />
        <FaTrash
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            setListId(listId);
            setCardId(card.id);
            setModalDeleteCard(true);
          }}
        />
      </div>
    </li>
  );
};

export default CardItem;
