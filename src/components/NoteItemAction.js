import React from "react";
import PropTypes from 'prop-types';
import ArchiveItemButton from "./ArchivedItemButton";
import DeleteItemButton from "./DeleteItemButton";

function NoteItemAction({id,text,onDelete,onArchive}) {
    return (
        <div className="note-item__action">
            <DeleteItemButton id={id} onDelete={onDelete}/>
            <ArchiveItemButton id={id} onArchive={onArchive} text={text}/>
        </div>
    )
}

NoteItemAction.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteItemAction;