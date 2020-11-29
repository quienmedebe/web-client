import {useContext} from 'react';
import AppContext from './AppContext';

const useAppState = () => {
  const context = useContext(AppContext);

  return context;
};

export default useAppState;
