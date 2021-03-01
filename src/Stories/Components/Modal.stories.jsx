import React from 'react';
import Modal from '../../Components/Modal';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal modalIsOpen={args.modalIsOpen} closeModal={args.closeModal}>
    {args.children}
  </Modal>
);

export const Default = Template.bind({});

Default.args = {
  children: <div>Hello from modal</div>,
  modalIsOpen: true,
  closeModal: () => false,
};
