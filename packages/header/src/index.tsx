import React from 'react';

import { hello } from '@mmts/utils';

import Subheader from 'Subheader';

function Header(): JSX.Element {
  return (
    <header data-testid="header">
      <h1>Chupa que é aaaaaade uva</h1>
      <Subheader />
      <p>{hello()}</p>
    </header>
  );
}

export default Header;
