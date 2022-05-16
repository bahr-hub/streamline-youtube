import React from "react";

const FormControl = (props) => {
  const { handleChange } = props;
  return (
    <React.Fragment>
      <div className="form-input">
        <form onSubmit={handleChange}>
          <div className="label-style">
            <h4>Video Id</h4>
          </div>
          <div className="form-group m-2">
            <input
              className="input-style"
              name="url"
              type="text"
              required
              placeholder="Enter Video ID"
            />
          </div>
          <div className="form-action">
            <button
              type="submit"
              className="d-grid gap-2 col-6 mx-auto btn btn-primary "
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormControl;
