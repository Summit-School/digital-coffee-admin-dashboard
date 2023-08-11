import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

const Table = ({ title, data, columns }) => {
  return <MaterialTable title={title} data={data} columns={columns} />;
};

Table.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array
};

export default Table;
