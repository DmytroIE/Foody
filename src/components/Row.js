import React from 'react';

function Row(props) {
  const { cells } = props;
  return (
    <tr>
      {cells.map(cell => (
        <td>{cell}</td>
      ))}
    </tr>
  );
}

export default Row;
