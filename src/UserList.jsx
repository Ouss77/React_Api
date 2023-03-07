import { useState, useEffect } from "react";

const UserList = () => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
      function FetchData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => setErr(err));
      }
    FetchData()

    }, [data])
    return(<>
        <h1>The user informations from the API:</h1>
          <ul>
            {data.map(usr => (
              <div>
            <li> The user id is:{usr.id} </li>
            <li> The user name is:{usr.name} </li>
            <li> The username is:{usr.username} </li>
              </div>
            ))}
        </ul>
        </>
    )
};
export default UserList;