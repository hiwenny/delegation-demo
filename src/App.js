import React from 'react';
import logo from './logo.svg';
import ComponentWithListener from './ComponentWithListener';

function App() {
  return (
    <>
      <ComponentWithListener />
          <ComponentWithListener
            optionalComponent={(onClickHandler) => (
              <div
                onClick={onClickHandler}
                style={{
                  color: 'white',
                  background: '#c3d9c9',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  borderRadius: '20px',
                }}
              >
                Custom Button, handler from ComponentWithListener
              </div>
            )}
          />
          <ComponentWithListener
            optionalComponent={(onClickHandler) => (
              <div
                onClick={onClickHandler}
                style={{
                  color: 'white',
                  background: '#c3d9c9',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  borderRadius: '20px',
                }}
              >
                Custom Button, handler from ComponentWithListener
                <div
                  onClick={() => alert('Nested inside renderProps component with own onClick')}
                  style={{
                    color: '#84a38c',
                    background: '#e6e6e6',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '20px',
                  }}
                >
                  Nested inside renderProps component with own onClick
                </div>
              </div>
            )}
          />
          <ComponentWithListener
            optionalComponent={(onClickHandler) => (
              <div
                onClick={onClickHandler}
                style={{
                  color: 'white',
                  background: '#c3d9c9',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  borderRadius: '20px',
                }}
              >
                Custom Button, handler from ComponentWithListener
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Nested inside renderProps component with own onClick');
                  }}
                  style={{
                    color: '#84a38c',
                    background: '#e6e6e6',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '20px',
                  }}
                >
                  Nested inside renderProps component with own onClick and stopPropagation
                </div>
              </div>
            )}
          />
          <div
            role="placeholder"
            onClick={() => alert('Default Component')}
            style={{
              color: 'white',
              background: '#84a38c',
              padding: '5px 10px',
              cursor: 'pointer',
              borderRadius: '20px',
            }}
          >
            Default Button (on parent)
            <div
              onClick={(e) => {
                e.stopPropagation();
                alert('nested on parent');
              }}
              style={{
                color: '#84a38c',
                background: '#e6e6e6',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '20px',
              }}
            >
              with Nested onClick (not a renderProp)
            </div>
          </div>
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
