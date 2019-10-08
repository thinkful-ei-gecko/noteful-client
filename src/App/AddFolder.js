import React from 'react';
import NotefulForm from '../NotefulForm/NotefulForm'
import ApiContext from '../ApiContext';

export default class AddFolder extends React.Component{

    static contextType = ApiContext;

    handleAddFolder = (e) => {
        const folder = {folder_name: e.target['folderInput'].value}
        console.log(folder)
        fetch ('http://localhost:8000/api/folders',{
            method: 'POST',
            headers: {'content-type': 'application/JSON'},
            body: JSON.stringify(folder)
        })
        .then(res => {
            if( res.ok) return res.json();
        })
        .then(folder => {
            this.props.history.push('/')
            this.context.AddFolder(folder)
        })
        .catch(error => console.log(error.message))
        }

    validateName = (event) => {
        event.preventDefault();
        console.log(this)
        const name = event.target['folderInput'].value.trim()
        if (name.length === 0){
            return this.context.setError(true)
        } else if (name.length < 2) {
            return this.context.setError(true)
        } else {
            this.handleAddFolder(event)
        }
    }

    render(){
        return(
            <div className="">
                <h2>Create A Folder</h2>
                <NotefulForm onSubmit={this.validateName}>
                
                {this.context.error ? 'invalid input' : ''}
                
                <div> 
                    <label htmlFor="folderInput">
                       name
                    </label>
                    <input type="text" id="folderInput"></input>

                <button type="submit">Add Folder</button>
                
                </div>
                </NotefulForm>
            </div>
        )
    }
}