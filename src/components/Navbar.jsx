


import { Flex, Box, Heading, Button, Text, Spacer ,  HStack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" >
        <Heading as="h1">Dojo Task</Heading>

        <Spacer/>
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>mario@dg.com</Text>
            <Button colorScheme='purple'>logout</Button>
        </HStack>

    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red" textAlign="center">1</Box>
    //     <Box w="150px" h="50px" bg="blue" textAlign="center">2</Box>
    //     <Box w="150px" h="50px" bg="green" flexGrow="1" textAlign="center">3</Box>
    //     <Box w="150px" h="50px" bg="yellow" flexGrow="2" textAlign="center">4</Box>
    // </Flex>
  )
}

export default Navbar