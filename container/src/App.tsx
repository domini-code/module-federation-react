import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Header from 'components/Header';

const App = () => (
  <>
    <Header />
    <div className='max-w-6xl mx-auto mt-10 text-3xl'>
      <div>Name: container</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
