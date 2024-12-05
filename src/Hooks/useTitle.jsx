import {useEffect} from 'react'

const useTitle = (title) => {
    useEffect(()=>{
        document.title =`${title} -ARPON`;
    },[title]);
  return null;
    
  
}

export default useTitle
