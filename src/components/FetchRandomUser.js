import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api?results=5";
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    this.setState({
      people: data.results,
      loading: false,
    });
    console.log();
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>No user found!!!</div>;
    }

    // const peopleArray = [];

    // this.state.people.forEach = (person) => {
    //   peopleArray.push(
    //     <div key={person.name.first + person.name.last}>
    //       <div>{person.name.title}</div>
    //       <div>{person.name.first}</div>
    //       <div>{person.name.last}</div>
    //       <img src={person.picture.large}></img>
    //     </div>
    //   );
    // };

    return (
      <div>
        {/* {peopleArray} */}
        {this.state.people.map((person, i) => (
          <div key={`person-${i}`}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large}></img>
          </div>
        ))}
      </div>
    );
  }
}
