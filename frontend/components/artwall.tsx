import React from 'react';
import { 
    Image,
    Stack,
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
    return <Card className={id}>
  
    <CardBody>
      <Image
        src={imageUrl}
        alt={'An image of ${artistName} piece called ${artTitle}'}
        borderRadius='0'
      />
      <Stack>
        <Heading>{artTitle}</Heading>
        <Heading>Artist: <a href=''>{artistName}</a></Heading>
        <Text>{description}</Text>
      </Stack>
      <Stack>
        <Text>mint buttons here when ready</Text>
      </Stack>
      <Stack>
        <Text>contract placeholder: {contractAddress}</Text>
        <Text>token placeholder: {tokenID}</Text>
        <Button>FIND ON ZORA placeholder</Button>
        <Button>FIND ON EXPLORER placeholder</Button>
      </Stack>
    </CardBody>
  </Card>

  };
  
  export default ArtWall;