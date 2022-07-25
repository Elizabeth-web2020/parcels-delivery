export default (state, action) => {
  switch(action.type) {
    case 'REMOVE_PARCEL':
      return {
        parcels: state.parcels.filter(user => {
          return user.id !== action.payload
        })
      }
    case 'ADD_PARCEL':
      return {
        parcels: [action.payload, ...state.parcels]
      }
    case 'EDIT_PARCEL':
      const updateParcel = action.payload;

      const updateParcels = state.parcels.map(parcel => {
        if(parcel.id === updateParcel.id) {
          return updateParcel;
        }
        return parcel;
      })

    return {
      parcels: updateParcels
    }

    default: 
      return state
  }
}