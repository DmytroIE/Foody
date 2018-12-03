import React from 'react';

function Head(props) {
  const { headers } = props;
  return (
    <tr>
      {headers.map(header => (
        <th>{header}</th>
      ))}
    </tr>
  );
}

export default Head;
