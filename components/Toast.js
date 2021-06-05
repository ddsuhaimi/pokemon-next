import React, { useRef } from "react";
// import ErrorIcon from "./icons/error";
// import InfoIcon from "./icons/info";
// import SuccessIcon from "./icons/success";
// import WarningIcon from "./icons/warning";
// import styles from "./toast.module.css";
// import styles from "./toast.css";

const useToast = () => {
    const toastRef = useRef(null);
    const openToast = (message, variant = "success", style = {}) => {
        toastRef.current.classList.add("show");
        setTimeout(function () {
            toastRef.current.classList.remove("show");
        }, 3000);
    };
    let toastStyle, icon;
    switch (variant) {
        case "success":
            toastStyle = {
                backgroundColor: "#adebad",
                borderTop: "5px solid #2db92d",
            };
            // icon = <SuccessIcon className={styles.icon} fill="#2db92d" />;
            break;
        case "error":
            toastStyle = {
                backgroundColor: "#ffcccc",
                borderTop: "5px solid #ff0000",
            };
            // icon = <ErrorIcon className={styles.icon} fill="#ff0000" />;
            break;
        case "info":
            toastStyle = {
                backgroundColor: "#ccf2ff",
                borderTop: "5px solid #33ccff",
            };
            // icon = <InfoIcon className={styles.icon} fill="#33ccff" />;
            break;
        case "warning":
            toastStyle = {
                backgroundColor: "#fff0b3",
                borderTop: "5px solid #ffcc00",
            };
            // icon = <WarningIcon className={styles.icon} fill="#ffcc00" />;
            break;
        default:
            break;
    }
    const ToastComponent = () => (
        <React.Fragment>
            <div ref={toastRef} className="snackbar" style={{ ...toastStyle, ...style }}>
                <div className="content">
                    {/* {icon} */}
                    {message}
                </div>
            </div>
            <style jsx>{`
                .snackbar {
                    visibility: hidden;
                    min-width: 250px;
                    margin-left: -125px;
                    color: #111;
                    text-align: center;
                    border-radius: 2px;
                    padding: 16px;
                    position: fixed;
                    z-index: 1;
                    left: 50%;
                    bottom: 30px;
                }

                .content {
                    display: flex;
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                .icon {
                    height: 25px;
                    width: 25px;
                    margin-right: 10px;
                }

                /* Show the snackbar when clicking on a button (class added with JavaScript) */
                .snackbar.show {
                    visibility: visible;
                    animation: fadein 0.5s, fadeout 0.5s 2.5s;
                }

                @keyframes fadein {
                    from {
                        bottom: 0;
                        opacity: 0;
                    }
                    to {
                        bottom: 30px;
                        opacity: 1;
                    }
                }

                @keyframes fadeout {
                    from {
                        bottom: 30px;
                        opacity: 1;
                    }
                    to {
                        bottom: 0;
                        opacity: 0;
                    }
                }
            `}</style>
        </React.Fragment>
    );
    return { openToast, ToastComponent };
};

export default useToast;
