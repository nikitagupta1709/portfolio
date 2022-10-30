import { EmailIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export const Home = () => {
  return (
    <Box bg="#0c0c0c" >
      <Flex flexDirection="row" w="100%" gap="20px" border="1px solid yellow" justifyContent="space-between">
            <Box mt="240px" p={2}>
              <VStack spacing='24px' align >
              <IconButton w='40px' h='40px' variant='outline'color='white' aria-label='Send email'icon={<EmailIcon />} />
              <IconButton w='40px' h='40px' variant='outline'color='white' aria-label='Send email'icon={<AiFillGithub />} />
              <IconButton w='40px' h='40px' variant='outline'color='white' aria-label='Send email'icon={<AiFillLinkedin />} />
              </VStack>
            </Box>
            <Box w="40%" color="white"mt="140px" border="1px solid blue" display="flex" alignItems="flex-start" flexDirection="column">
                <Text fontWeight="bold" fontSize="32px">I'am Nikita Gupta</Text>
                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum </Text>
            </Box>
            <Box w="50%" bg="black" border="1px solid red" ml="20px">
              <Image w="390px" m="auto" src="https://phonewalls.org/wp-content/uploads/2022/06/Aesthetic-Dark-Top-Walllpapers.jpg" alt=""/>
            </Box>
              
        </Flex>

    </Box>
  )
}
