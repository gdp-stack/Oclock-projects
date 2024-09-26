import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  setModalAddList: (open: boolean) => void;
}

const Header = ({ setModalAddList }: HeaderProps) => {
  return (
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
        onClick={() => setModalAddList(true)}
      >
        Ajouter une liste <FaPlus />
      </Button>
    </div>
  );
};

export default Header;
