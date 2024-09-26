import React, { useEffect } from "react";
import { FaArrowsAlt, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import CardItem from "../CardItem/CardItem";
import type { ListType } from "@/types/types";

interface ListItemProps {
  list: ListType;
  setListId: (id: number) => void;
  setCardId: (id: number) => void;
  setModalEditList: (open: boolean) => void;
  setModalDeleteList: (open: boolean) => void;
  setModalAddCard: (open: boolean) => void;
  setModalEditCard: (open: boolean) => void;
  setModalDeleteCard: (open: boolean) => void;
}

const ListItem = ({
  list,
  setListId,
  setCardId,
  setModalEditList,
  setModalDeleteList,
  setModalAddCard,
  setModalEditCard,
  setModalDeleteCard,
}: ListItemProps) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (list) {
      setLoading(false);
    }
  }, [list]);

  return (
    <div className="flex flex-col">
      <article className="w-full rounded p-2 gap-1 text-white font-bold bg-blue-700 flex justify-between text-base">
        <div className="break-words">{list.title}</div>
        <div className="flex gap-2 items-center">
          <FaArrowsAlt
            style={{ color: "white", cursor: "pointer" }}
            slot="move-list-handle"
          />
          <FaEdit
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => {
              setListId(list.id);
              setModalEditList(true);
            }}
          />
          <FaTrash
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => {
              setListId(list.id);
              setModalDeleteList(true);
            }}
          />
          <FaPlus
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => {
              setListId(list.id);
              setModalAddCard(true);
            }}
          />
        </div>
      </article>
      <div className="bg-cyan-200 text-center">
        <ul>
          {loading ? (
            <li>Chargement...</li>
          ) : list.cards && list.cards.length > 0 ? (
            list.cards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                listId={list.id}
                setListId={setListId}
                setCardId={setCardId}
                setModalEditCard={setModalEditCard}
                setModalDeleteCard={setModalDeleteCard}
              />
            ))
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default ListItem;
