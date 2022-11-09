import React from "react";
import { getInitialData} from '../utils/index';
import HeaderNoteApp from './HeaderNoteApp';
import NoteList from './NoteList';
import NoteInput from "./NoteInput";
import autoBindReact from "auto-bind/react"

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        autoBindReact(this);
        this.state = {
            datas: getInitialData(),
            search: ''
        }
    }

    onSearchHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            }
        })
    }

    onDeleteHandler(id) {
        const datas = this.state.datas.filter(data => data.id !== id);
        this.setState({datas});
    }

    onAddNoteHandler({title, body}) {
        let today = new Date();
        let timeCreatedAt = today.toJSON();

        this.setState((prevState) => {
            return {
                datas: [
                    ...prevState.datas,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: timeCreatedAt,
                        archived: false
                    }
                ]
            }
        });
    }

    onArchivedHandler(id) {
        const datas = this.state.datas.map((data) => {
            if(data.id === id) {
                if(data.archived === false) {
                    return {...data, archived: true};
                }else {
                    return {...data, archived: false};
                }
            }
            return data;
        });
        this.setState({datas});
    }

    render() {
        const datas = this.state.datas.filter((data) => data.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const activeNotes = datas.filter((data) => {
            return data.archived === false;
        });
        const archivedNotes = datas.filter((data) => {
            return data.archived === true;
        });
        return(
            <>
                <HeaderNoteApp search={this.state.search} onSearch={this.onSearchHandler}/>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler}/>
                    <h2> Catatan Aktif</h2>
                    {
                        activeNotes.length === 0 ?
                        <p className="notes-list__empty-message">Tidak ada catatan</p> :
                        <NoteList datas={activeNotes} text="Arsipkan" onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
                    }
                    <h2>Arsip</h2>
                    {
                        archivedNotes.length === 0 ?
                        <p className="notes-list__empty-message">Tidak ada catatan</p> :
                        <NoteList datas={archivedNotes} text="Pindahkan" onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
                    }
                </div>
            </>
        );
    }
}

export default NoteApp;