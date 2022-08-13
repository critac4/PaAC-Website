import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import E18311006 from '../../assets/members/18311006.jpeg';
import E18311019 from '../../assets/members/18311019.jpg';
import E19111003 from '../../assets/members/19111003.jpg';
import E19119001 from '../../assets/members/19119001.jpg';
import E19122010 from '../../assets/members/19122010.jpg';
import E19122024 from '../../assets/members/19122024.jpg';
import E19122026 from '../../assets/members/19122026.jpg';
import E19311011 from '../../assets/members/19311011.jpg';
import E19311013 from '../../assets/members/19311013.png';
import E19311019 from '../../assets/members/19311019.jpg';
import E19311020 from '../../assets/members/19311020.jpg';
import E19411032 from '../../assets/members/19411032.jpg';
import E20111012 from '../../assets/members/20111012.jpg';
import E20113044 from '../../assets/members/20113044.jpg';
import E20113125 from '../../assets/members/20113125.jpg';
import E20115150 from '../../assets/members/20115150.jpg';
import E20117003 from '../../assets/members/20117003.JPG';
import E20119001 from '../../assets/members/20119001.jpg';
import E20122002 from '../../assets/members/20122002.jpg';
import E20122014 from '../../assets/members/20122014.jpg';
import E20122023 from '../../assets/members/20122023.jpg';
import E20311006 from '../../assets/members/20311006.jpg';
import E20311007 from '../../assets/members/20311007.jpg';
import E20311012 from '../../assets/members/20311012.jpg';
import E20311013 from '../../assets/members/20311013.jpg';
import E20311014 from '../../assets/members/20311014.jpg';
import E20311018 from '../../assets/members/20311018.jpg';
import E20311020 from '../../assets/members/20311020.jpeg';
import E20410034 from '../../assets/members/20410034.jpg';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image src={E19311019}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Simardeep Singh Sandhu
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Secretary
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">LinkedIn</Button>
        <Button size="small">Email</Button>
      </CardActions>
    </Card>
  );
}
