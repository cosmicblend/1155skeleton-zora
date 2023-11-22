// artwalllist.tsx
import React from 'react';
import ArtWall from './artwall';
import artWallData from '../../data/artwalldata.json'; 
import { 
    SimpleGrid
} from '@chakra-ui/react';

const ArtWallList = ({ 
  startIndex = 0, 
  itemCount = artWallData.length,
  columnCount = 2
}) => {
  const sortedArt = artWallData.sort((a, b) => a.id - b.id);

  return (
    <SimpleGrid columns={[1, columnCount, null, null]} spacing="2rem">
      {sortedArt.slice(startIndex, startIndex + itemCount).map((artItem, index) => (
        <ArtWall
          key={index}
          artTitle={artItem.artTitle}
          artistName={artItem.artistName}
          imageUrl={artItem.imageUrl}
          description={artItem.description}
          contractAddress={artItem.contractAddress}
          tokenID={artItem.tokenID}
          id={artItem.id.toString()}
          artistLink={artItem.artistLink}
          zoraLink={artItem.zoraLink}
          explorerLink={artItem.explorerLink}
        />
      ))}
    </SimpleGrid>
  );
};

export default ArtWallList;
