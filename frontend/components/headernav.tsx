import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { 
    Flex,  
    Text, 
    Box,
    Image
} from '@chakra-ui/react';

const HeaderNav = () => {
    const logoUrl = '/images/tus_logo.png'; 
    const totUrl = '/images/cursivish-tot.png';

    return (
        <Flex
         as="header"
         position="sticky"
         top="0"
         zIndex="docked"
         //shadow="md"
         bg="rgba(255, 255, 255, 0.03)"
         backdropFilter="blur(0.707rem)"
         width="full"
         px={4}
         py={2}
         align='center'
         justify='space-between'
        >
            <Box flex="1">
                <Image
                    src={logoUrl}
                    width='3.999rem'
                    alt=''
                    borderRadius='0'
                    textAlign="center"
                />
            </Box>
            <Box>
                <Image
                    src={totUrl}
                    height='3.998rem'
                    alt=''
                    borderRadius='0'
                    textAlign="center"
                /> 
            </Box>
            <Box flex="1" display="flex" justifyContent="flex-end">
                <ConnectButton />
            </Box>
        </Flex>
    );
  };
  
export default HeaderNav;
