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
}

  const ArtWall: React.FC<ArtWallProps> = ({ 
    artTitle, 
    artistName, 
    imageUrl, 
    description,
    contractAddress,
    tokenID,
    id,
    artistLink
 }) => {
    return <Card variant="filled" borderRadius='0' p={['4', '8']} bg='#fff' className={id}>
  
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
        <MintButton />
      </Stack>
      <Stack my={4}>
        <Button>ON ZORA</Button>
        <Button>ON EXPLORER</Button>
        <Text>{contractAddress}</Text>
      </Stack>
    </CardBody>
  </Card>

  };
  
  export default ArtWall;