import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import {postData} from '../data/postData';



const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {postData.map((data, key) => {
        return (
          <Post avatar={data.avatar} name={data.name} image={data.image} description= {data.description} date={data.date}/>
        )
      })}
    </Box>
  )
}

export default Feed