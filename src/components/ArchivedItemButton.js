import React from "react";
import PropTypes from 'prop-types';

function ArchiveItemButton({id,text,onArchive}) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{text}</button>
}

ArchiveItemButton.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveItemButton;