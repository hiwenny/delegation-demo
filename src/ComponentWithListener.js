/* eslint-disable */
import React, { useCallback } from 'react';

const ComponentWithListener = ({ optionalComponent }: { optionalComponent?: any }) => {
  const onClickHandler = useCallback((event) => {
    alert('Handled from ComponentWithListener');
  }, []);

  let content;

  if (optionalComponent && typeof optionalComponent === 'function') {
    // try in safari

    content = optionalComponent(onClickHandler);
  } else {
    content = (
      <div
        role="placeholder"
        onClick={onClickHandler}
        style={{ color: 'white', background: '#84a38c', padding: '5px 10px', cursor: 'pointer', borderRadius: '20px' }}
      >
        Default Button
      </div>
    );
  }
  return <>{content}</>;
};

export default ComponentWithListener;
/* eslint-enable */
