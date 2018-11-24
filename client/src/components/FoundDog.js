import React, { Component } from "react";
import axios from "axios";

class FoundDog extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            message: null
        };
    }

    putDataToDB = message => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post("/api/putData", {
            id: idToBeAdded,
            message: message
        });
    };

    deleteFromDB = idTodelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
            if (dat.id == idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete("/api/deleteData", {
            data: {
                id: objIdToDelete
            }
        });
    };

    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        this.state.data.forEach(dat => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post("/api/updateData", {
            id: objIdToUpdate,
            update: { message: updateToApply }
        });
    };

    render () {
        return(
            <div>
                <div style={{padding: "10px"}}>
                    <input
                        type="text"
                        placeholder="add something in the database"
                        onChange={e => this.setState({message: e.target.value})}
                        style={{width: "200px"}}
                    />
                    <button onClick={() => {this.putDataToDB(this.state.message)}}>
                        ADD
                    </button>
                </div>
                <div style={{padding: "10px"}}>
                    <input
                        type="text"
                        style={{width: "200px"}}
                        onChange={e => this.setState({idToDelete: e.target.value})}
                        placeholder="put id of item to delete here"
                    />
                    <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                        DELETE
                    </button>
                </div>
                <div style={{padding: "10px"}}>
                    <input
                        type="text"
                        style={{width: "200px"}}
                        onChange={e => this.setState({idToUpdate: e.target.value})}
                        placeholder="id of item to update here"
                    />
                    <input
                        type="text"
                        style={{width: "200px"}}
                        onChange={e => this.setState({updateToApply: e.target.value})}
                        placeholder="put new value of the item here"
                    />
                    <button
                        onClick={() =>
                            this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                        }
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        )
    }
}

export default FoundDog;