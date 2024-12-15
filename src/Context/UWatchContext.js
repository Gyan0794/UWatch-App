import React from 'react'

const UWatchContext = React.createContext({
  lightTheme: true,
  changeThemeAndAttributes: () => {},
  changedAttributesOnThemeChange: () => {},
  likedList: [],
  dislikedList: [],
  savedList: [],
  addAsLikedVideos: () => {},
  addAsDislikedVideos: () => {},
  addOrRemoveAsOrFromSavedVideos: () => {},
})

export default UWatchContext
