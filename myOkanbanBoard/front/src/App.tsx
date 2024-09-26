import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "./components/custom/Header/Header";
import ListItem from "./components/custom/ListItem/ListItem";
import { initListsDragAndDrop } from "./lib/dragDrop";
import ModalManager from "./components/custom/ModalManager/ModalManager";
import type { ListType } from "./types/types";

function App() {
  const [lists, setLists] = useState<ListType[]>([]);
  const [listId, setListId] = useState<number>(0);
  const [cardId, setCardId] = useState<number>(0);

  // États des modales
  const [modalAddList, setModalAddList] = useState(false);
  const [modalDeleteList, setModalDeleteList] = useState(false);
  const [modalEditList, setModalEditList] = useState(false);
  const [modalAddCard, setModalAddCard] = useState(false);
  const [modalDeleteCard, setModalDeleteCard] = useState(false);
  const [modalEditCard, setModalEditCard] = useState(false);

  const listsContainerRef = useRef<HTMLDivElement>(null);

  // Fetch des listes via l'API
  useEffect(() => {
    async function fetchLists() {
      const response = await axios.get<ListType[]>(
        "http://localhost:3000/api/lists"
      );
      setLists(response.data);
    }

    fetchLists();
  }, []);

  // Initialisation du drag-and-drop
  useEffect(() => {
    if (listsContainerRef.current && lists) {
      initListsDragAndDrop(listsContainerRef.current, lists, setLists);
    }
  }, [lists]);

  return (
    <div className="relative h-full w-full min-h-screen min-w-screen p-8">
      {/* HEADER */}
      <Header setModalAddList={setModalAddList} />

      {/* LISTES */}
      <div
        id="lists-container"
        ref={listsContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {lists?.map((list) => (
          <ListItem
            key={list.id}
            list={list}
            setListId={setListId}
            setCardId={setCardId}
            setModalEditList={setModalEditList}
            setModalDeleteList={setModalDeleteList}
            setModalAddCard={setModalAddCard}
            setModalEditCard={setModalEditCard}
            setModalDeleteCard={setModalDeleteCard}
          />
        ))}
      </div>

      {/* Gestion centralisée des modales */}
      <ModalManager
        modalAddList={modalAddList}
        setModalAddList={setModalAddList}
        modalDeleteList={modalDeleteList}
        setModalDeleteList={setModalDeleteList}
        modalEditList={modalEditList}
        setModalEditList={setModalEditList}
        modalAddCard={modalAddCard}
        setModalAddCard={setModalAddCard}
        modalDeleteCard={modalDeleteCard}
        setModalDeleteCard={setModalDeleteCard}
        modalEditCard={modalEditCard}
        setModalEditCard={setModalEditCard}
        listId={listId}
        cardId={cardId}
        setLists={setLists}
      />
    </div>
  );
}

export default App;
