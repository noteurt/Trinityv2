import { Avatar, Box, Card, CardContent, Grid, Typography, ButtonGroup, Button} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Hochschule = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>

    <Grid
        container
        spacing={3}
      >
        
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Räume
          </Typography>
        </Grid>

      </Grid>
    
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
        onClick={(e) => {
            alert(e.target.value);
        }}
        >
            <Button color="success" value='A103'>A103</Button>
            <Button color="error" value='A104'>A104</Button>
            <Button value='A105'>A105</Button>
            <Button value='A106'>A106</Button>
            <Button value='A107'>A107</Button>
            <Button value='A108'>A108</Button>
            <Button value='A109'>A109</Button>
            <Button value='A110'>A110</Button>

        </ButtonGroup>
    
      

    </CardContent>
  </Card>
);
