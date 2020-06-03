import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import Characters from '../characters';

configure({ adapter: new Adapter() });

jest.mock('axios');

describe('CharactersComponent', () => {

  let data = {
    "info": {
      "count": 591,
      "pages": 30,
      "next": "https://rickandmortyapi.com/api/character/?page=2",
      "prev": null
    },
    "results": [
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
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      }
    ]
  };


  it('Characters: onPreviousClick() ', () => {
    let onPreviousClick = jest.fn(),
      currentPage = 4;

    const wrapper = shallow(<Characters onPreviousClick={onPreviousClick} />);
    const instance = wrapper.instance();

    wrapper.setState({ currentPage: currentPage });
    instance.onPreviousClick();
    expect(wrapper.state().currentPage).toEqual(currentPage-1);
  });

  it('Characters: onNextClick() ', () => {
    let onNextClick = jest.fn(),
      currentPage = 4;

    const wrapper = shallow(<Characters onNextClick={onNextClick} />);
    const instance = wrapper.instance();

    wrapper.setState({ currentPage: currentPage });
    instance.onNextClick();
    expect(wrapper.state().currentPage).toEqual(currentPage+1);
  });

  it('Characters: onChangeSearchText() ', () => {
    let onChangeSearchText = jest.fn(),
    getCharacters = jest.fn(),
      e = {
        target: {
          value: 'Smith'
        }
      };

    const wrapper = shallow(<Characters onChangeSearchText={onChangeSearchText} />);
    const instance = wrapper.instance();

    wrapper.setState({ currentPage: 4 });
    instance.onChangeSearchText(e);

    expect(wrapper.state().currentPage).toEqual(1);
    expect(wrapper.state().searchText).toEqual(e.target.value.toLowerCase());

  });

  it('fetches Characters successfully data from an API', async () => {

    const wrapper = mount(<Characters />);
    const instance = wrapper.instance();
    wrapper.setState({
      currentPage: 1,
      searchText: ''
    });

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
 
    await expect(instance.fetchCharactersFromApi()).resolves.toEqual(data);
  });

  it('Receives an errow while fetching Characters data from an API', async () => {

    const wrapper = mount(<Characters />);
    const instance = wrapper.instance();
    wrapper.setState({
      currentPage: 1,
      searchText: ''
    });

    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(instance.fetchCharactersFromApi()).rejects.toThrow(errorMessage);
  });

});

