import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  parcels: []
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeParcel = (id) => {
    dispatch({
      type: 'REMOVE_PARCEL',
      payload: id
    })
  }

  const addParcel = (parcel) => {
    dispatch({
      type: 'ADD_PARCEL',
      payload: parcel
    })
  }

  const editParcel = (parcel) => {
    dispatch({
      type: 'EDIT_PARCEL',
      payload: parcel
    })
  }

  return (
    <GlobalContext.Provider value={{
      parcels: state.parcels,
      removeParcel,
      addParcel,
      editParcel
    }}>
      {children}
    </GlobalContext.Provider>
  )
}