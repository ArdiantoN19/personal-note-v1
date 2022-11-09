import React from "react";
import PropTypes from 'prop-types';
import NoteCardItem from "./NoteCardItem";

function NoteList({datas,text,onDelete,onArchive}) {
    return (
        <div className="notes-list">
            {
                datas.map(data => (
                    <NoteCardItem {...data} key={data.id} id={data.id} text={text} onDelete={onDelete} onArchive={onArchive}/>
                    ))
                }
        </div>
    );
}

NoteList.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.object).isRequired,
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteList;