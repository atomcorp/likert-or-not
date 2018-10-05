import * as React from 'react';
import css from '../Matrix.css';

import {HeaderProps} from '../definitions';

const Header = (props: HeaderProps) => (
  <thead className={css.columns}>{props.children}</thead>
);

export default Header;
