import * as React from 'react';
import Matrix from '../Matrix/Matrix';
import dataset from './dataset';
const Page = () => (
  <div>
    <h1>Page</h1>
    <div>
      <Matrix title="The title" labels={['Good', 'OK', 'Bad']} rows={dataset} />
    </div>
  </div>
);

export default Page;
