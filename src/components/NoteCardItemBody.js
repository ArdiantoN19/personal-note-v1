import React from "react";
import PropTypes from 'prop-types';

function NoteCardItemBody({body}) {
    return (
        <div className="note-item__body">
            <p>{body}</p>
        </div>
    )
}

NoteCardItemBody.propTypes = {
    body: PropTypes.string.isRequired,
}

export default NoteCardItemBody;