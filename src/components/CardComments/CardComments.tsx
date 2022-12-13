import { Avatar } from '@mui/material'
import React from 'react'

export const CardComments = ({name, photo, message}:any) => {
  return (
    <div>
        <Avatar src={photo} />
        <p>{name}</p>
        <p>{message}</p>
    </div>
  )
}
