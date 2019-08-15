export const addFeature = feature => dispatch => {
  dispatch ({ 
    type: 'ADD_FEATURE',
    feature: feature
  })
}

export const removeFeature = feature => dispatch => {
  dispatch ({
    type: 'REMOVE_FEATURE',
    feature: feature
  })
}