import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaArrowsAlt, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "./components/ui/button";
import ListAddModal from "./components/custom/ListCard/ListAddModal";
import ListDeleteModal from "./components/custom/ListDeleteModal/ListDeleteModal";
import ListEditModal from "./components/custom/ListEditModal/ListEditModal";
import CardAddModal from "./components/custom/CardAddModal/CardAddModal";
import CardDeleteModal from "./components/custom/CardDeleteModal/CardDeleteModal";
import CardEditModal from "./components/custom/CardEditModal/CardEditModal";
import { initListsDragAndDrop } from "./lib/dragDrop"; // Import de la fonction

function App() {
  const [lists, setLists] = useState([]);
  const [listId, setListId] = useState<number>();
  const [modalAddList, setModalAddList] = useState(false);
  const [modalDeleteList, setModalDeleteList] = useState(false);
  const [modalEditList, setModalEditList] = useState(false);
  const [cardId, setCardId] = useState<number>();
  const [modalAddCard, setModalAddCard] = useState(false);
  const [modalDeleteCard, setModalDeleteCard] = useState(false);
  const [modalEditCard, setModalEditCard] = useState(false);

  const listsContainerRef = useRef<HTMLDivElement>(null); // Use useRef to reference the lists container

  // Fetch lists from API on component mount
  useEffect(() => {
    async function fetchLists() {
      const response = await axios.get("http://localhost:3000/api/lists");
      setLists(response.data);
    }

    fetchLists();
  }, []);

  // Initialize Sortable.js for the lists container
  useEffect(() => {
    if (listsContainerRef.current && lists) {
      initListsDragAndDrop(listsContainerRef.current, lists, setLists); // Utilisation de la fonction importée
    }
  }, [lists]); // Reinitialize Sortable if the lists change

  return (
    <div className="relative h-full w-full min-h-screen min-w-screen p-8">
      <div className="m-12 flex items-center">
        <div className="flex flex-col items-center md:flex-row">
          <img
            className="h-20 rounded-full self-start"
            src="/logo-kanban.webp"
            alt="logo-kanban"
          />
          <span className="text-gray-600 font-bold text-2xl italic md:ml-4 mt-2 md:mt-0">
            myKanbanBoard
          </span>
        </div>
        <Button
          type="button"
          className="ml-auto gap-2 font-bold"
          onClick={(event) => {
            event.preventDefault();
            setModalAddList(true);
          }}
        >
          Ajouter une liste <FaPlus />
        </Button>
      </div>

      {/* Container des listes */}
      <div
        id="lists-container"
        ref={listsContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {lists?.map((list) => (
          <div key={list.id} className="flex flex-col">
            <article className="w-full rounded p-2 gap-1 text-white font-bold bg-blue-700 flex justify-between text-base">
              <div className="break-words ">{list.title}</div>
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
              <ul className="">
                {list.cards?.map((card) => (
                  <li
                    key={card.id}
                    className="flex justify-between border border-black border-solid p-2 px-4 m-2 bg-white text-sm"
                  >
                    {card.content}
                    <div className="flex gap-1">
                      <FaEdit
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={() => {
                          setListId(list.id);
                          setCardId(card.id);
                          setModalEditCard(true);
                        }}
                      />
                      <FaTrash
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          setListId(list.id);
                          setCardId(card.id);
                          setModalDeleteCard(true);
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* MODALES d'actions */}
      {modalAddList && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full inset-0 p-6 flex justify-center items-center">
          <ListAddModal setModalAddList={setModalAddList} setLists={setLists} />
        </div>
      )}
      {modalDeleteList && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full inset-0 p-6 flex justify-center items-center">
          <ListDeleteModal
            setModalDeleteList={setModalDeleteList}
            setLists={setLists}
            listId={listId}
          />
        </div>
      )}
      {modalEditList && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full inset-0 p-6 flex justify-center items-center">
          <ListEditModal
            setModalEditList={setModalEditList}
            setLists={setLists}
            listId={listId}
          />
        </div>
      )}
      {modalAddCard && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full inset-0 p-6 flex justify-center items-center">
          <CardAddModal
            setModalAddCard={setModalAddCard}
            setLists={setLists}
            listId={listId}
          />
        </div>
      )}
      {modalDeleteCard && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full inset-0 p-6 flex justify-center items-center">
          <CardDeleteModal
            setModalDeleteCard={setModalDeleteCard}
            setLists={setLists}
            cardId={cardId}
            listId={listId}
          />
        </div>
      )}
      {modalEditCard && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full inset-0 p-6 flex justify-center items-center">
          <CardEditModal
            setModalEditCard={setModalEditCard}
            setLists={setLists}
            cardId={cardId}
            listId={listId}
          />
        </div>
      )}
    </div>
  );
}

export default App;
