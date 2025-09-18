import {useCallback, useMemo, useState} from "react";

export const FilteredList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ]);
    const [filter, setFilter] = useState("");
     const filteredUsers = useMemo(() => {
         return users.filter
         (user => user.name.toLowerCase().includes(filter.toLowerCase()))
     },[ users ,filter]);

     const addUser = useCallback(() => {
         setUsers( prevUsers =>[
             ...prevUsers,{
             id: prevUsers.length+1,
             name:`User${prevUsers.length + 1}`,
             }
         ])
     },[])

    return (
        <div>
            <h2>Filtered Users</h2>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter by name"
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};