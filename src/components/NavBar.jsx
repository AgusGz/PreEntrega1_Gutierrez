import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
            <Flex bg='blue.400'>
                <Box p='4' bg='blue.600'>
                    Compu Comerico
                </Box>
                <Spacer />
                
         <Menu>
            <MenuButton bg='blue.600'> 
                Categorias
            </MenuButton>
            <MenuList>
                <MenuItem>Categoria 1</MenuItem>
                <MenuItem>Categoria 2</MenuItem>
            </MenuList>
        </Menu>


        <Spacer />

                
                <Box p='4' bg='blue.600'>
                    <CartWidget/>
                </Box>
            </Flex>

    </div>
  )
}

export default NavBar