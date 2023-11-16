import React from 'react';
import MintButton from './mintButton';
import { 
    Image,
    Stack,
    HStack,
    Heading,
    Text,
    Button,
    Card,
    CardBody, 
  } from '@chakra-ui/react';

interface ArtWallProps {
    artTitle: string;
    artistName: string;
    imageUrl: string;
    description: string;
    contractAddress: string;
    tokenID: string;  
    id: string;
}

  const ArtWall: React.FC<ArtWallProps> = ({ 
    artTitle, 
    artistName, 
    imageUrl, 
    description,
    contractAddress,
    tokenID,
    id,
 }) => {
    return <Card variant="filled" borderRadius='0' p={['8', '16']} className={id}>
  
    <CardBody>
      <Image
        src={imageUrl}
        alt={artTitle}
        borderRadius='0'
      />
      <Stack>
        <Heading size='lg'>{artTitle}</Heading>
        <Heading size='md'>Artist: <a href=''>{artistName}</a></Heading>
        <Text my={2}>{description}</Text>
      </Stack>
      <Stack my={2}>
        <MintButton />
      </Stack>
      <HStack my={4}>
        <Button>FIND ON ZORA placeholder</Button>
        <Button>FIND ON EXPLORER placeholder</Button>
      </HStack>
      <Stack>
        <Text>contract placeholder:<br />{contractAddress}</Text>
        <Text>token placeholder:<br />{tokenID}</Text>
      </Stack>
    </CardBody>
  </Card>

  };
  
  export default ArtWall;