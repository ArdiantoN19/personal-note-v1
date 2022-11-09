import React from "react";
import PropTypes from 'prop-types';

function HeaderNoteApp({search, onSearch}) {
    return (
        <div className="note-app__header">
            <h1>Note App</h1>
            <div className="note-search">
                <input type="text" placeholder="Seacrh Here" value={search} onChange={onSearch}/>
            </div>
        </div>
    )
}

HeaderNoteApp.propTypes = {
    search: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
}

export default HeaderNoteApp;