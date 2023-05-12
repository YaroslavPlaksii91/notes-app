import { useNotes } from 'services/context';
import s from './Modal.module.css';

export const Modal = () => {
  const { deleteNote, activeNote, setShowModal } = useNotes();

  const handleConfirm = () => {
    deleteNote(activeNote.id);
    setShowModal(false);
  };

  const handleReject = () => {
    setShowModal(false);
  };

  return (
    <div className={s.modal}>
      <div className={s.content}>
        <p className={s.title}>Are you sure?</p>
        <div className={s.buttons}>
          <button
            onClick={handleReject}
            className={s.btn}
            style={{ backgroundColor: 'red' }}
          >
            No
          </button>
          <button
            onClick={handleConfirm}
            className={s.btn}
            style={{ backgroundColor: 'green' }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
