import * as React from 'react'

export const ModalContext = React.createContext({} as any);

export function ModalProvider(props) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedEventDataId, setSelectedEventDataId] = React.useState({});

    const handleOpenModal = (id) => {
        setIsModalOpen(true);
        setSelectedEventDataId(id);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEventDataId('');
    }

    return (
        <ModalContext.Provider value={{
            isModalOpen,
            selectedEventDataId,
            handleOpenModal,
            handleCloseModal
        }}>
            { props.children }
        </ModalContext.Provider>
    );
}
