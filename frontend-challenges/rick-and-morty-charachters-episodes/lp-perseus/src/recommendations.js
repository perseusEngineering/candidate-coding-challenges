import React from 'react';
import Character from './character';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { characters } = this.props;
    characters = characters && characters.length > 4 ? characters.slice(0,4) : characters;
    

    return (
      <div>
        <h3 className="perseus-mb-1"> Recommendations </h3>
        <Character
          characters={characters}
        />
      </div>
    )
  }
}

export default Recommendations;