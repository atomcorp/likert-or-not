import * as React from 'react';

interface RowProps {
  children?: React.ReactNode;
  className?: string;
}

const Row = (props: RowProps) => (
  <tr className={props.className}>{props.children}</tr>
);

export default Row;
