import React from "react";
import Data from "./Data";

class Output extends React.Component {
  state = {
    arr: [],
    data: {
      name: "",
      surname: "",
      dob: "",
      class: "",
      sport: ""
    }
  };
  handleChange = ({ target }) => {
    let data = { ...this.state?.data };
    data[target.name] = target.value;
    this.setState({ data: data });
    console.log(data);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ arr: [...this.state.arr, this.state.data] });
    console.log(this.state.arr);
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1 className="mb-8 text-3xl">Course details:</h1>
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <form onSubmit={this.handleSubmit}>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="name"
                name="name"
                value={data["name"]}
                onChange={this.handleChange}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="surname"
                name="surname"
                value={data["surname"]}
                onChange={this.handleChange}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="class"
                name="class"
                value={data["class"]}
                onChange={this.handleChange}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Date of Birth"
                name="dob"
                value={data["dob"]}
                onChange={this.handleChange}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="sport"
                name="sport"
                value={data["sport"]}
                onChange={this.handleChange}
              />
              <button
                className="shadow w-full bg-blue-800 hover:bg-blue-dark text-white font-bold focus:shadow-outline focus:outline-none py-2 px-6 rounded"
                type="submit"
              >
                Add student
              </button>
            </form>
          </div>
        </div>
        {this.state.arr.map((data, index) => (
          <Data
            key={index}
            name={data.name}
            surname={data.surname}
            class={data.class}
            dob={data.dob}
            sport={data.sport}
          />
        ))}
        {/* <p>
              {this.state.arr?.map((data) => (
                <Data
                  name={data.name}
                  surname={data.surname}
                  class={data.class}
                  dob={data.dob}
                  sport={data.sport}
                />
              ))}
            </p> */}
      </div>
    );
  }
}
export default Output;
