import React from "react";

class Form extends React.Component {
    render() {
      return(
          <div className="container">
              <div className="form-container">
                <form>
                    <label>
                        <input type="text" name="name" value="filter by (property)" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
              </div>
              <div className="form-container">
                <form>
                    <label>
                        <input type="text" name="name" value="filter by (property)" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
              </div>
          </div>
      )}}

export default Form;