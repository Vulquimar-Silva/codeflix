import { Box, Container } from '@mui/material'
import React from 'react'

export function Layout({ children }: { children: React.ReactNode}) {
  return (
    <Box>
      <Container 
      maxWidth="lg" 
      sx={{ 
            color: "white",
            mt:4, 
            mb:4, 
            bg: 'white'
        }}>
        {children}
    </Container>
    </Box>
  )
}
