import React from "react";
import './forms.css'

class Form extends React.Component {
    render() {
      return(
          <div className="formDiv">
              <div>
                <form>
                    <label>
                        <input type="text" name="name" value="filter by (property)" />
                    </label>
                </form>
              </div>
              <div>
                <form>
                    <label>
                        <input type="text" name="name" value="filter by (property)" />
                    </label>
                </form>
              </div>
          </div>
      )}}

export default Form;