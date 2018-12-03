import React from 'react';

function OrderHistory(props) {
  const { cells } = props;
  return (
    <tr>
      {cells.map(cell => (
        <td>{cell}</td>
      ))}
    </tr>
  );
}

export default OrderHistory;
