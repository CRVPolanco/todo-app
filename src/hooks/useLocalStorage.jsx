import React from 'react';

function useLocalStorage(saveName, initialValue){

  const [state, dispatch] = React.useReducer(reducer, {...iniState({ initialValue })})

  const { sincronize, loading, error, data } = state;

  const onError = (error) => dispatch({type: 'ERROR', payload: error})
  const onOk = (item) => dispatch({type: actionType.ok, payload: item});
  const onSave = (item) => dispatch({type: actionType.save, payload: item});
  const reSincronize = () => { dispatch({ type: actionType.resincronize }) }


  React.useEffect(() => {
    setTimeout(() => {
      try{
        const getItems = localStorage.getItem(saveName);
        let parsedItems;

        if(!getItems){
          localStorage.setItem(saveName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        }else{
          parsedItems = JSON.parse(getItems);
        }
        onOk(parsedItems)
      }catch(error){
        onError(error)
      }
    }, 1000)
  }, [sincronize]);

  const saveItem = (newItem) => {
    try{
      const itemStringifeado = JSON.stringify(newItem);
      localStorage.setItem(saveName, itemStringifeado);
      onSave(newItem);
    }catch(error){
      onError(error)
    }
  }

  return {data, saveItem, loading, error, sincronize, reSincronize};
}

const iniState = ({ initialValue }) => ({
  sincronize: true,
  loading: true,
  error: false,
  data: initialValue,
});

const actionType = {
  resincronize: 'RESINCRONIZE',
  error: 'ERROR',
  save: 'SAVE',
  ok: 'OK'
}

const reducer = (state, action) => {

  switch(action.type){

    case actionType.error:
      return{
        ...state,
        error: true
      }
    case actionType.ok:
      return {
        ...state,
        error: false,
        loading: false,
        sincronize: true,
        data: action.payload
      }
    case actionType.resincronize:
      return {
        ...state,
        loading: true,
        sincronize: false
      }
    case actionType.save:
      return {
        ...state,
        data: action.payload,
      }

  }

}

export { useLocalStorage };
