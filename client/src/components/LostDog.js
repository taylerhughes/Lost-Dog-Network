import React from 'react';

const LostDog = (props) => {
    return (
        <div>
            <h2>These dogs are lost:</h2>
            <ul>
                {props.data.length <= 0 ? "NO DB ENTRIES YET" : props.data.map(dat => (
                    <div>
                        <li style={{ padding: "10px" }}>
                            <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                            <span style={{ color: "gray" }}> data: </span>
                            {dat.message}
                        </li>
                        <button>Message Owner</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default LostDog;