import React from 'react';

function RemovableRow(props) {
  const { cells, onDelete, onMoreInfo } = props;
  return (
    <tr>
      {cells.map(cell => (
        <td key={cell}>{cell}</td>
      ))}
      <td>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
        <button type="button" onClick={onMoreInfo}>
          More Info
        </button>
      </td>
    </tr>
  );
}

export default RemovableRow;
