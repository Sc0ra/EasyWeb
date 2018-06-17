import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
const uuid = shortid.generate;

const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">

      </table>
    </div>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;
