import React from 'react';

import { connect } from 'react-redux';

import ModalView from './ModalView';

import { getErrorModals } from '../../commonSelectors';

import { closeModal } from '../../commonActions';

const ModalContainer = ({ modals = [], onClose }) =>
  modals.map(modal => (
    <ModalView key={modal.uuid} onClose={onClose} message={modal.message} />
  ));

const mapState = state => ({
  modals: getErrorModals(state),
});

const mapDispatch = {
  onClose: closeModal,
};

export default connect(
  mapState,
  mapDispatch,
)(ModalContainer);
