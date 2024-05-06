import { useEffect, useState } from "react";

interface IModal {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const useModal = (): IModal => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleToggleModal = () => setIsModalOpen((prevState) => !prevState);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) handleCloseModal();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return {
    isOpen: isModalOpen,
    onToggle: handleToggleModal,
    onClose: handleCloseModal,
  };
};
