import { Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, List, ListItem, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'

export const MenuItems = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button colorScheme='#0c0c0c' onClick={onOpen}><HamburgerIcon  w={10} h={10} /></Button>
  
        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent bg="#0c0c0c">
            <DrawerCloseButton color="white" fontSize="30px"/>
            <DrawerBody bg="#0c0c0c" color="white">
                <Center mt="90px">
                    <List spacing={3} fontSize="xxx-large" >
                        <NavLink to="/"><ListItem onClick={()=> onClose()}> Home </ListItem></NavLink>
                        <NavLink to="/about"><ListItem onClick={()=> onClose()}> About </ListItem></NavLink>
                        <NavLink to="/portfolio"><ListItem onClick={()=> onClose()}> Portfolio </ListItem></NavLink>
                        <NavLink to="/contact"><ListItem onClick={()=> onClose()}> Contact </ListItem></NavLink>
                    </List>
                </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}
