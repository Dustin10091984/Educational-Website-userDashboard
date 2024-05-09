// contexts/AvatarContext.js
import { createContext, useState, useContext } from 'react'

const AvatarContext = createContext(null)

export const useAvatar = () => useContext(AvatarContext)

export const AvatarProvider = ({ children }) => {
  const [avatar, setAvatar] = useState('')
  const [studentName, setStudentName] = useState('')

  const updateAvatar = (newAvatar) => {
    setAvatar(newAvatar)
  }
  const updateStudentName = (newName) => {
    setStudentName(newName)
  }

  return (
    <AvatarContext.Provider
      value={{ avatar, updateAvatar, studentName, updateStudentName }}
    >
      {children}
    </AvatarContext.Provider>
  )
}
