import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;

  return <div>hello world</div>;
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);
