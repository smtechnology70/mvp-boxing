import * as React from "react";

export default function Loader(props) {
  const { loading, ...attributes } = props;

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
