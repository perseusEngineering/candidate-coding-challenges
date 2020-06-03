import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Character from '../character';

configure({ adapter: new Adapter() });

describe('CharacterComponent', () => {
  it('Character: Initialization and render ', () => {

    let characters = [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      }
    ];

    const wrapper = mount(<Character characters={characters} />);
    expect(wrapper.find('.perseus-character-wrapper').length).toEqual(characters.length);
    expect(wrapper.find('.perseus-character-logo').length).toEqual(characters.length);
    expect(wrapper.find('.perseus-character-species').length).toEqual(characters.length);

  });

});

