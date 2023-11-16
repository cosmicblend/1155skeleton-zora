import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { 
    Flex, 
    Box, 
    Text, 
    Center
} from '@chakra-ui/react';

const HeaderNav = () => {
    // const imageUrl = 'http://localhost:3001/images/tus_cd_face.jpg'; 
    return (
        <Flex
         as="header"
         position="sticky"
         top="0"
         zIndex="sticky"
         bg="white"
         shadow="md"
         width="full"
         px={4}
         py={2}
        >
            <Center>
                <Text fontSize="lg" fontWeight="bold">BrandName</Text>
            </Center>
            <Box spacing={4} ml="auto">
                <ConnectButton />
            </Box>
        </Flex>
    );
  };
  
export default HeaderNav;
