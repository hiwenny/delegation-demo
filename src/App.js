import React from 'react';
import logo from './logo.svg';
import ComponentWithListener from './ComponentWithListener';

function App() {
  return (
    <>
      Sample component with default renderProps
      <ComponentWithListener />
      <ComponentWithListener optionalComponent={(onClickHandler) => <div onClick={onClickHandler}>Custom Button</div>} />
      <ComponentWithListener optionalComponent={(onClickHandler) => (
        <div onClick={onClickHandler}>
          <div onClick={() => alert('nested')}>Custom Button with Nested onClick</div>
        </div>
      )} />
      {/* TODO test with other listeners */}
      {/* <ComponentWithListener optionalComponent={(onClickHandler) => (
        <div onClick={onClickHandler}>
          <div onClick={() => alert('nested')}>Custom Button with Nested onClick</div>
        </div>
      )} /> */}
    </>
  );
}

export default App;
