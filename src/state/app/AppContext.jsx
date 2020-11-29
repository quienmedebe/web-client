import React, {useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  loaded: false,
  loggedId: null,
};

const AppContext = React.createContext(defaultState);

const Provider = ({children, value}) => {
  const [loaded, setLoaded] = useState(value?.loaded || defaultState);
  const [loggedId, setLoggedId] = useState(value?.loggedId || defaultState);

  const changeLoaded = useCallback(loaded => {
    setLoaded(Boolean(loaded));
  }, []);

  const changeLoggedId = useCallback(loggedId => {
    setLoggedId(loggedId);
  }, []);

  const contextValue = useMemo(() => {
    return {
      loaded,
      changeLoaded,

      loggedId,
      changeLoggedId,
    };
  }, [loaded, changeLoaded, loggedId, changeLoggedId]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
  value: PropTypes.object,
};

export const AppProvider = Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
