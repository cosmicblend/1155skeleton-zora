import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { 
    Flex,  
    Text, 
    Box,
    Image,
    HStack
} from '@chakra-ui/react';

const HeaderNav = () => {
    const [scrollVelocity, setScrollVelocity] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [lastTime, setLastTime] = useState(Date.now());

    const easeRotation = (velocity: number) => {
        const maxRotation = 720; // Max rotation in degrees
        let rotation = velocity * 180; // Scale velocity to a usable value
        if (rotation > maxRotation) rotation = maxRotation; // Limit the rotation
        return rotation;
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const now = Date.now();
        const velocity = Math.abs(scrollTop - lastScrollTop) / (now - lastTime);
    
        const easedRotation = easeRotation(velocity); 
    
        setScrollVelocity(easedRotation); 
        setLastScrollTop(scrollTop);
        setLastTime(now);
    };
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, lastTime]);

    const logoUrl = '/images/tot-brand.png'; 
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
         boxShadow="0 0 0.062rem rgba(0, 0, 0, 0.38)"
        >
            <Box flex="1">
            <HStack>
                    <Image
                        src={logoUrl}
                        height='3.999rem'
                        alt=''
                        borderRadius='0'
                        textAlign="center"
                        style={{ transform: `rotate(${scrollVelocity}deg)` }}
                    />
                    <Image
                        src={totUrl}
                        height={['1.999rem', '2.827rem']}
                        alt=''
                        borderRadius='0'
                        textAlign="center"
                        ml='-1rem'
                    /> 
                </HStack>
            </Box><Box>
            </Box>
            <Box flex="1" display="flex" justifyContent="flex-end">
                <ConnectButton label="connect"/>
            </Box>
        </Flex>
    );
  };
  
export default HeaderNav;
