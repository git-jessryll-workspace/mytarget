export default function ModalDialog({ modalId, children }) {
    return (
        <dialog id={modalId} className="modal">
            {children}
        </dialog>
    );
}
