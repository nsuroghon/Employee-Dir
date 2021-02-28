import React from "react";

class Form extends React.Component {
    render() {
      return(
        <nav className="navbar navbar-light bg-light justify-content-center">
        <form className="form-inline m-2">
          <input
            className="form-control"
            // value={props.value}
            name="search"
            // onChange={props.handleInputChange}
            type="search"
            placeholder="Search"
          />
        </form>
        <form className="form-inline m-2">
          <input
            className="form-control"
            // value={props.value}
            name="search"
            // onChange={props.handleInputChange}
            type="search"
            placeholder="Search"
          />
        </form>
      </nav>
    )}}

    //       <div className="formDiv">
    //           <div>
    //             <form>
    //                 <label>
    //                     <input type="text" name="name" value="filter by (property)" />
    //                 </label>
    //             </form>
    //           </div>
    //           <div>
    //             <form>
    //                 <label>
    //                     <input type="text" name="name" value="filter by (property)" />
    //                 </label>
    //             </form>
    //           </div>
    //       </div>
    //   )}}

export default Form;