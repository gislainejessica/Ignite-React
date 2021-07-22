import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransationModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransationModal({ isOpen, onRequestClose }: NewTransationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2> Cadastrar Trasnsação </h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">

        </button>
      </Container>
    </Modal>

  )
}