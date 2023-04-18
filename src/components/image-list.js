import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function TitlebarImageList({itemData, search, handleSearch, loading}) {
    
    
    return (
    <div style={{position:'relative'}}>
       
    <ImageList sx={{ width: '100vw - 10px', height: '100vh - 100px' }} cols={3} >
      
      {loading?<span>loading...</span>:itemData.map((item) => (
        <ImageListItem key={item.title}>
          <img
            src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
            srcSet={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.owner}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

