import ListAddModal from "../ListAddModal/ListAddModal";
import ListDeleteModal from "../ListDeleteModal/ListDeleteModal";
import ListEditModal from "../ListEditModal/ListEditModal";
import CardAddModal from "../CardAddModal/CardAddModal";
import CardDeleteModal from "../CardDeleteModal/CardDeleteModal";
import CardEditModal from "../CardEditModal/CardEditModal";
import type { ListType } from "@/types/types";

interface ModalManagerProps {
  modalAddList: boolean;
  setModalAddList: React.Dispatch<React.SetStateAction<boolean>>;
  modalDeleteList: boolean;
  setModalDeleteList: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditList: boolean;
  setModalEditList: React.Dispatch<React.SetStateAction<boolean>>;
  modalAddCard: boolean;
  setModalAddCard: React.Dispatch<React.SetStateAction<boolean>>;
  modalDeleteCard: boolean;
  setModalDeleteCard: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditCard: boolean;
  setModalEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  listId: number;
  cardId: number;
  setLists: React.Dispatch<React.SetStateAction<ListType[]>>;
}

const ModalManager = ({
  modalAddList,
  setModalAddList,
  modalDeleteList,
  setModalDeleteList,
  modalEditList,
  setModalEditList,
  modalAddCard,
  setModalAddCard,
  modalDeleteCard,
  setModalDeleteCard,
  modalEditCard,
  setModalEditCard,
  listId,
  cardId,
  setLists,
}: ModalManagerProps) => {
  return (
    <>
      {(modalAddList ||
        modalDeleteList ||
        modalEditList ||
        modalAddCard ||
        modalDeleteCard ||
        modalEditCard) && (
        <div className="bg-gray-800 bg-opacity-80 absolute top-0 left-0 w-full h-full inset-0 p-6 flex justify-center items-center">
          {modalAddList && (
            <ListAddModal
              setModalAddList={setModalAddList}
              setLists={setLists}
            />
          )}
          {modalDeleteList && (
            <ListDeleteModal
              setModalDeleteList={setModalDeleteList}
              setLists={setLists}
              listId={listId}
            />
          )}
          {modalEditList && (
            <ListEditModal
              setModalEditList={setModalEditList}
              setLists={setLists}
              listId={listId}
            />
          )}
          {modalAddCard && (
            <CardAddModal
              setModalAddCard={setModalAddCard}
              setLists={setLists}
              listId={listId}
            />
          )}
          {modalDeleteCard && (
            <CardDeleteModal
              setModalDeleteCard={setModalDeleteCard}
              setLists={setLists}
              cardId={cardId}
              listId={listId}
            />
          )}
          {modalEditCard && (
            <CardEditModal
              setModalEditCard={setModalEditCard}
              setLists={setLists}
              cardId={cardId}
              listId={listId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ModalManager;
