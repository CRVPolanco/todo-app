import React from "react";

function useStorageListener(sincronize){

    const [changeShow, setChangeShow] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if(change.key === 'TASKS_V1'){
        console.log('Hubo cambios en TASKS_V1');
        setChangeShow(true);
      }
    });

    const toggleShow = () => {
      sincronize();
      setChangeShow(false)
    }

    return {
      show: changeShow,
      toggleShow
    }

}

export { useStorageListener };
