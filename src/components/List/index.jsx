import React from 'react';
import '../../styles/ListItems.css';

function List({loading, onLoading, filtedTasks, searchState, allTasks, onEmpty, onEmptySearch, children, sincronize, render}){

  const renderFunc = children ?? render;

  return(
  <React.Fragment>

    <ul className='ListItems'>

      {loading && onLoading()}
      {(!loading && !allTasks) && onEmpty()}
      {(!!allTasks && !filtedTasks.length) && onEmptySearch(searchState)}
      {sincronize && filtedTasks.map(renderFunc)}

    </ul>

  </React.Fragment>
  )
}

export { List };
