import * as React from 'react';
import Matrix, {Title, Columns, Rows} from '../Matrix/Matrix';

const Page = () => (
  <div>
    <h1>Page</h1>
    <div>
      <Matrix>
        <Title>The title</Title>
        <Columns labels={['Good', 'OK', 'Bad']} />
        <Rows
          statements={[
            'Willingness to help',
            'Efficiency/quickness',
            'Ability to complete transaction',
          ]}
        />
      </Matrix>
    </div>
  </div>
);

export default Page;
