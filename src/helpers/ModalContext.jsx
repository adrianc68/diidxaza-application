import Modal from "../components/modal/Modal";
import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [statusModal, setStatusModal] = useState(false);

    const [component, setComponent] = useState({
        sizeHeight: "",
        sizeWidth: "",
        title: "",
        component: <></>,
        handleModal: () => {
            setStatusModal(false);
        },
    });

    const value = {
        component: null,
        setComponent: (value) => {
            setComponent(value);
        },
        status: statusModal,
        setStatusModal: (valueStatus) => {
            setStatusModal(valueStatus);
        },
    };

    return (
        <ModalContext.Provider value={value}>
            {statusModal && (
                <Modal sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title} handleModal={component.handleModal}>
                    {component.object}
                </Modal>
            )}
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
