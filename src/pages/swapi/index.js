import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './style.scss';

export default function Swapi() {
  const [people, setPeople] = useState();

  const fetchPeople = async () => {
    const { data } = await axios.get('https://swapi.co/api/people');

    setPeople(data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      {people &&
        people.map((person) => (
          <div>
            <ul className="list">
              <li>{person.name}</li>
              <li>{person.gender}</li>
              <li>{person.birth_year}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}
