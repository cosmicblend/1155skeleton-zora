import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { 
    Flex,  
    Text, 
    Box
} from '@chakra-ui/react';

const HeaderNav = () => {
    // const imageUrl = 'http://localhost:3001/images/tus_cd_face.jpg'; 
    return (
        <Flex
         as="header"
         position="sticky"
         top="0"
         zIndex="docked"
         bg="white"
         shadow="md"
         width="full"
         px={4}
         py={2}
         align='center'
         justify='space-between'
        >
            <Box flex="1"></Box>
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
                BrandName
            </Text>
            <Box flex="1" display="flex" justifyContent="flex-end">
                <ConnectButton />
            </Box>
        </Flex>
    );
  };
  
export default HeaderNav;
