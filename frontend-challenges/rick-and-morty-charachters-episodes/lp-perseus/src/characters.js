import React from 'react';
import axios from 'axios';
import { APP_CONSTANTS } from './App.constants';
import CustomPagination from './custom-pagination';
import Character from './character';
import Recommendations from './recommendations';

class Characters extends React.Component {
  constructor(props) {
    super(props);
      
    // State
    this.state = {                           
      characters: [],
      pagination: {},
      currentPage: APP_CONSTANTS.CURRENT_PAGE,
      searchText: '',
      species: [],
      noCharacterFoundMessage: false
    };
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
  }

  componentDidMount() {
    let charactersComponent = this;
    this.getCharacters(charactersComponent);
  }

  getCharacters(charactersComponent) {
    let { currentPage, searchText } = this.state; 
    this.fetchCharactersFromApi(currentPage, searchText)
      .then(function (response) {

        const { info, results } = response.data;

        let species = results.map( result => result.species );
        species = [...new Set(species)];

        if( searchText.length && results.length ) {
          charactersComponent.getRecommendations(charactersComponent, species);
        }
        charactersComponent.setState({
            characters: results,
            pagination: info,
            species: species,
            noCharacterFoundMessage: false
        });
      })
      .catch(function (error) {
        charactersComponent.setState({
            characters: [],
            pagination: {},
            species: [],
            noCharacterFoundMessage: true
        });
      })
      .finally(function () {
        // always executed
      });
  }

  fetchCharactersFromApi = async (currentPage, searchText) => {
    const url = `${APP_CONSTANTS.REST_API_SERVER + APP_CONSTANTS.RESOURCE_CHARACTER}/?page=${currentPage}&name=${searchText}`;
    return await axios.get(url);
  };

  getRecommendations(charactersComponent, species) {
    let filteredSpecies = species[0];
    axios.get(APP_CONSTANTS.REST_API_SERVER + APP_CONSTANTS.RESOURCE_CHARACTER, {
        params: {
          species: filteredSpecies,
        }
      })
      .then(function (response) {
        const { results } = response.data;
        charactersComponent.setState({
            recommendations: results,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  onPreviousClick() {
    let charactersComponent = this;
    charactersComponent.setState({
        currentPage: charactersComponent.state.currentPage - 1
    }, function() {
        charactersComponent.getCharacters(charactersComponent);
    });
  }

  onNextClick() {
    let charactersComponent = this;
    charactersComponent.setState({
        currentPage: charactersComponent.state.currentPage+1
    }, function() {
        charactersComponent.getCharacters(charactersComponent);
    });
  }

  onChangeSearchText(e) {
    let charactersComponent = this;
    this.setState({
        searchText: e.target.value.toLowerCase(),
        currentPage: 1 // reset page otherwise throws an error
    }, function() {
        this.getCharacters(charactersComponent);
    });
  }

  render() {
    const { pagination, characters, searchText, recommendations, noCharacterFoundMessage } = this.state;
    
    return (
        <div>
            <div className="row perseus-mb-1">
                <div className="col-lg-6">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <input type="text" className="form-control" value={searchText} onChange={(e) => this.onChangeSearchText(e)} id="perseus-search-character" placeholder="Search character by name" aria-describedby="inputGroupPrepend" />
                        </div>
                    </div>
                </div>
            </div>
            {
                noCharacterFoundMessage ?
                <h4> No character found</h4> : ''
            }
            {
                characters && characters.length ?
                <CustomPagination
                    currentPage={this.state.currentPage}
                    pagination={pagination}
                    onNextClick={this.onNextClick}
                    onPreviousClick={this.onPreviousClick}
                /> : ''
            }
            <Character
              characters={characters}
            />
            {
                characters && characters.length ?
                <CustomPagination
                    currentPage={this.state.currentPage}
                    pagination={pagination}
                    onNextClick={this.onNextClick}
                    onPreviousClick={this.onPreviousClick}
                /> : ''
            }
            {
                characters && characters.length && searchText.length ?
                <Recommendations 
                  characters={recommendations}
                /> : ''
            }
        </div>
    )
  }
}

export default Characters;