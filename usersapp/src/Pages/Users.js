import { useParams, Link } from "react-router-dom";

const Users = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Users</h1>
            <h3>This is the Users page</h3>
            <h4>Select a user:</h4>
            <ul>
                <li>
                    <Link to="/users/1">User 1</Link>
                </li>
                <li>
                    <Link to="/users/2">User 2</Link>
                </li>
                <li>
                    <Link to="/users/3">User 3</Link>
                </li>
            </ul>
            <h1>{id}</h1>
        </div>
    );
}

export default Users;