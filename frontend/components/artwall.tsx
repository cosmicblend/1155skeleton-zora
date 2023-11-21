import React from 'react';
import MintButton from './mintButton';
import { 
    Image,
    Stack,
    Heading,
    Text,
    Button,
    Card,
    CardBody, 
    Link
  } from '@chakra-ui/react';

interface ArtWallProps {
    artTitle: string;
    artistName: string;
    imageUrl: string;
    description: string;
    contractAddress: string;
    tokenID: string;  
    id: string;
    artistLink: string;
    zoraLink: string;
    explorerLink: string;
}

  const ArtWall: React.FC<ArtWallProps> = ({ 
    artTitle, 
    artistName, 
    imageUrl, 
    description,
    contractAddress,
    tokenID,
    id,
    artistLink,
    zoraLink,
    explorerLink
 }) => {
    return <Card variant="filled" borderRadius='0' p={['2', '8']} bg='#fff' className={id}>
  
    <CardBody>
      <Image
        src={imageUrl}
        alt={artTitle}
        borderRadius='0'
        mb={4}
      />
      <Stack>
        <Heading as='h3' fontSize='h5' fontWeight='aecBlack'>{artTitle}</Heading>
        <Heading as='h4' fontSize='h6'>By: <Link href={artistLink} isExternal color='#DF257E' textDecoration='underline'>{artistName}</Link></Heading>
        <Text my={2}>{description}</Text>
      </Stack>
      <Stack my={2}>
        <MintButton contractAddress={contractAddress} tokenId={tokenID} />
      </Stack>
      <Stack mt={8} align="center" justifyContent="center" fontFamily="acumin-pro-extra-condensed, sans-serif" direction='row'>
        <Link href={zoraLink} isExternal>
          <Button 
            w="100%"
            borderRadius="0"
            backgroundColor="#fff" 
            borderColor="#EBF3E6"
            borderWidth="3px"
            _hover={{bg:'#EBF3E6'}}
          >ON ZORA</Button>
        </Link>
        <Link href={explorerLink} isExternal>
          <Button 
            w="100%"
            borderRadius="0"
            backgroundColor="#fff"
            borderColor="#EBF3E6"
            borderWidth="3px" 
            _hover={{bg:'#EBF3E6'}}
          >ON EXPLORER</Button>
        </Link>
      </Stack>
    </CardBody>
  </Card>

  };
  
  export default ArtWall;