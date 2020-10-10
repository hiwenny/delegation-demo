import React, { useCallback } from 'react';

const ComponentWithListener = ({ optionalComponent }) => {
  const onClickHandler = useCallback(
    event => {
      console.log(event.currentTarget);
    },
  );

  let content;

  if (typeof optionalComponent === 'function') {
    // this renderprops has a bug where the nested onCLick event doesn't get actioned
    // show with colour change
    // try with other events as well
    // try in safari

    content = optionalComponent({
      onClickHandler,
    });
  } else {
    content = (
      <div
        onClick={onClickHandler}
        style={{color: 'blue'}}
      >
        Default Button
      </div>
    );
  }
return <div>{content}</div>
}

export default ComponentWithListener;