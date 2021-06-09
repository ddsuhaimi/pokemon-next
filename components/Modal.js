import styled from "@emotion/styled";

const Modal = ({ show, children, actionBtn, title }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <Container className={showHideClassName}>
            <div className="modal-main">
                <div className="modal-header">{title}</div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">{actionBtn}</div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
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
        .modal-body {
            width: 100%;
        }
        .modal-footer {
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;
        }
        .modal-header {
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
            color: #3e5481;
        }
    }
    &.display-block {
        display: block;
    }

    &.display-none {
        display: none;
    }
`;

export default Modal;
