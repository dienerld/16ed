import { ChangeEvent, useState } from 'react';

type Person = {
  name: string;
  lastName: string;
  age: number;
  address: string;
  cpf: string;
};

const initialState: Person = {
  name: '',
  lastName: '',
  age: 0,
  address: '',
  cpf: '',
};

export function Home() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState<Person>(initialState);

  const [checkbox, setCheckbox] = useState<boolean>();

  function increment() {
    setCount((prevState) => prevState + 1);
  }

  function printState() {
    console.log(person);
  }

  function toggleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    setCheckbox(e.target.checked);
  }

  function changePerson(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <div>
        <div>Home</div>
        <p>{count}</p>
        <button onClick={increment}>Incrementar</button>
        <hr />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <input
          type="text"
          value={person.name}
          placeholder="name"
          name="name"
          onChange={changePerson}
        />
        <input
          type="text"
          value={person.lastName}
          placeholder="last name"
          name="lastName"
          onChange={changePerson}
        />
        <input
          type="number"
          value={person.age === 0 ? '' : person.age}
          placeholder="Age"
          name="age"
          onChange={changePerson}
        />
        <input
          type="text"
          value={person.address}
          placeholder="Address"
          name="address"
          onChange={changePerson}
        />

        <label htmlFor="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            checked={checkbox}
            onChange={toggleCheckbox}
          />
          Checkbox
        </label>

        <button onClick={printState}>Log</button>
        <button onClick={() => setPerson(initialState)}>Reset</button>
      </div>
    </div>
  );
}
