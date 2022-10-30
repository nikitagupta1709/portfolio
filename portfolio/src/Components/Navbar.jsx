import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { MenuItems } from '../Pages/MenuItems'

export const Navbar = () => {
  return (
    <Box bg="#0c0c0c">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md' color="white">Chakra App</Heading>
            </Box>
            <Spacer />
            <MenuItems/>
                
        </Flex>
    </Box>
  )
}
