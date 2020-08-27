import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState(
        {
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        },
        console.error
      );
    });
  }
  render() {
    return <div></div>;
  }
}

export default Details;
