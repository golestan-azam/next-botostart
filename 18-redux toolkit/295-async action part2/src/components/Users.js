import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

function Users(props) {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.loading ? <h3>Loading ...</h3> : null}
      {users.users.length
        ? users.users.map((users) => <p key={users.id}>{users.name}</p>)
        : null}
    </div>
  );
}

export default Users;
