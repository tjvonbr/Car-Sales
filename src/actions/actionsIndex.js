export const addFeature = feature => dispatch => {
  dispatch ({ 
    type: 'ADD_FEATURE',
    payload: feature
  })
}

export const removeFeature = feature => dispatch => {
  dispatch ({
    type: 'REMOVE_FEATURE',
    payload: feature
  })
}