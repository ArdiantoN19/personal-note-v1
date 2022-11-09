import React from "react";
import autoBindReact from "auto-bind/react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        autoBindReact(this);
        this.state = {
            title: '',
            body: '',
            limit: 50
        };
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            if(event.target.value.length > 50) {
                return (
                    event.target.value = event.target.value.substring(0,50)
                )
            }else {
                return {
                    title: event.target.value,
                    limit: 50 - event.target.value.length        
                }
            }
        });
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if(this.state.body === '' || this.state.title === ''){
            alert("gagal menambahkan data");
        }else {
            this.props.addNote(this.state);
            this.setState(() => {
                return {
                    title: '',
                    body: '',
                    limit: 50
                }
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler} className='note-input'>
                <h2>Tambah Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {this.state.limit}</p>
                <input type="text" className='note-input__title' placeholder="Ketikkan judul disini..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea className="note-input__body" placeholder="Ketikkan catatan disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default NoteInput;