import * as React from 'react';
import css from '../index.css';

import LikertOrNot from '../index.d';

const Header = (props: LikertOrNot.HeaderProps) => (
  <thead className={css.columns}>{props.children}</thead>
);

export default Header;
