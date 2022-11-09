import React from "react";
import PropTypes from 'prop-types';

function DeleteItemButton({id, onDelete}) {
    return <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
}

DeleteItemButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteItemButton;