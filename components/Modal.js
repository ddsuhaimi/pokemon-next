// import './modal.css';
import Button from "../components/Button";
const Modal = ({ onClose, show, children, isValid, actionBtn, title }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal__header">{title}</div>
                <div className="modal_body">{children}</div>
                <div className="modal__footer">
                    {actionBtn}
                    {/* <Button onClick={onClose}>Close</Button> */}
                </div>
            </section>
            <style jsx>
                {`
                    .modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1000;
                        background: rgba(0, 0, 0, 0.6);
                    }

                    .modal-main {
                        position: fixed;
                        background: white;
                        max-width: 400px;
                        width: 80%;
                        height: auto;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 10px;
                        padding: 1rem;
                    }

                    .display-block {
                        display: block;
                    }

                    .display-none {
                        display: none;
                    }
                    .modal__body {
                        width: 100%;
                    }
                    .modal__footer {
                        margin-top: 1rem;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .modal__header {
                        margin-bottom: 1rem;
                        font-size: 1.2rem;
                        font-weight: bold;
                        color: #3e5481;
                    }
                `}
            </style>
        </div>
    );
};

export default Modal;
