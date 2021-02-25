import React from "react";

class Form extends React.Component {
    render() {
      return(
        <div>
            <form>
                <label>
                    <input type="text" name="name" value="filter by (property)" />
                </label>
                    <input type="submit" value="Submit" />
            </form>

            <form>
                <label>
                    <input type="text" name="name" value="filter by (property)" />
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
      )}}

export default Form;