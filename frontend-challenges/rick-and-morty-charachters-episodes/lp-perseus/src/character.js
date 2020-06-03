import React from 'react';

class Character extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { characters } = this.props;
    
    return (
      <div className="row">
        {characters && characters.map((character) => (
          <div className="col-lg-3" key={character.id}>
            <div className="perseus-character-wrapper">
              <img className="perseus-character-logo" src={character.image} alt={character.name} />
              <span className="perseus-character-species">{character.species}</span>
              <h5>{character.name}</h5>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Character;