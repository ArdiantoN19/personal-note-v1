import React from "react";
import PropTypes from 'prop-types';

function NoteCardItemHeader({title, createdAt}) {
    return (
        <div>
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{createdAt}</p>
        </div>
    );
}

NoteCardItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteCardItemHeader;