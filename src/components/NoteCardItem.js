import React from "react";
import PropTypes from 'prop-types';
import NoteCardItemHeader from "./NoteCardItemHeader";
import NoteCardItemBody from "./NoteCardItemBody";
import NoteItemAction from './NoteItemAction';
import {showFormattedDate} from '../utils/index'

function NoteCardItem({id,text,title,body,createdAt, onDelete, onArchive}){
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteCardItemHeader title={title} createdAt={showFormattedDate(createdAt)}/>
                <NoteCardItemBody body={body}/>
            </div>
                <NoteItemAction id={id} text={text} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    );
}

NoteCardItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteCardItem;