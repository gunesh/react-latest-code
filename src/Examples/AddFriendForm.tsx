import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { addNewFriend, getFriendList } from "../utility/DB/db";

export function AddFriendForm({ defaultAge } = { defaultAge: 21 }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState('');

  async function addFriend() {
    try {
      // Add the new friend!
      let id = await addNewFriend(name, age);

      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName('');
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <>
      <p>{status}</p>
      Name:
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      Age:
      <input
        type="number"
        value={age}
        onChange={(ev) => setAge(Number(ev.target.value))}
      />
      <button onClick={addFriend}>Add</button>
    </>
  );
}


export function FriendList({ minAge, maxAge }: any) {
  const friends = useLiveQuery(
    async () => {
      const friends = await getFriendList(minAge, maxAge);
      return friends;
    },
    [minAge, maxAge]
  );

  return (
    <ul>
      {friends?.map((friend) => (
        <li key={friend.id}>
          {friend.name}, {friend.age}
        </li>
      ))}
    </ul>
  );
}


export const Example = () => (
  <>
    <h1>My simple Dexie app</h1>

    <h2>Add Friend</h2>
    <AddFriendForm defaultAge={21} />

    <h2>Friend List</h2>
    <FriendList minAge={18} maxAge={65} />
  </>
);