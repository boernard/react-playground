import * as React from 'react'

export const ModalContext = React.createContext({
    handleOpenModal: (event) => null,
    handleCloseModal: (event) => null,
    isModalOpen: false,
    selectedEventData: {}
});

export function ModalProvider(props) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedEventData, setSelectedEventData] = React.useState({});

    const handleOpenModal = (event) => {
        setIsModalOpen(true);
        setSelectedEventData(event);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEventData({});
    }

    return (
        <ModalContext.Provider value={{
            isModalOpen,
            selectedEventData,
            handleOpenModal,
            handleCloseModal
        }}>
            { props.children }
        </ModalContext.Provider>
    );
}
