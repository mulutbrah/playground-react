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
    <div className="swapi">
      {people &&
        people.map((person) => (
          <ul className="list">
            <li>Name: {person.name}</li>
            <li>Gender: {person.gender}</li>
            <li>Birth Year: {person.birth_year}</li>
          </ul>
        ))}
    </div>
  );
}
