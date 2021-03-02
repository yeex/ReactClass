import React from "react";

class Data extends React.Component {
  render() {
    return (
      <div className="mb-4 bg-purple-400 border-grey-200 border-2">
        <h2>Data details</h2>
        <p className="uppercase">
          Name: <strong>{this.props.name}</strong>
        </p>
        <p className="uppercase">
          Surname: <strong>{this.props.surname}</strong>
        </p>
        <p>
          DoB: <strong>{this.props.dob}</strong>
        </p>
        <p>
          Class: <strong>{this.props.class}</strong>
        </p>
        <p>
          Favorite sport: <strong>{this.props.sport}</strong>
        </p>
      </div>
    );
  }
}

export default Data;
