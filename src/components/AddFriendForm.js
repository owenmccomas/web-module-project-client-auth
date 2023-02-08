import axios from "axios";
import React, { useState } from "react";

export default function AddFriendForm() {
  const [creds, setCreds] = useState({
    id: '',
    name: "",
    age: "",
    email: "",
  });

  const onChange = ( evt ) =>{
    setCreds({
        ...creds,
        id: Date.now,
        [evt.target.name]: evt.target.value
    }
    )
}

const handleSubmit = (evt) => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/friends', creds)
          .then(res => console.log(res))
          .catch(err => console.error(err))
}



  return (
    <div>
      <form>
        <label onSubmit={handleSubmit}>
          {" "}
          friend name
          <input type="text" 
                 value={creds.name}
                 name='name'
                 onChange={onChange}
                 />
        </label>
        <label>
          {" "}
          friend age
          <input type="text" 
                 name='age'
                 value={creds.age}
                 onChange={onChange}
                 />
        </label>
        <label>
          {" "}
          friend email
          <input type="text" 
                 name='email'
                 value={creds.email}
                 onChange={onChange}
                 />
        </label>
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}
