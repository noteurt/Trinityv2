import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Alert,
  Collapse
} from '@mui/material';



export const TextInputForm = (props) => {

  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    message: 'Hallo',
    ip: "192.168.50.1",
    port: "65506",
    zeilen: "5",
    spalten: "36",
    r: "120",
    g: "120",
    b: "120",
    bgColor: "rgb(120,120,120)"
  });

  const handleChange = (event) => {
    if(event.target.name == "r" || event.target.name == "g" || event.target.name == "b"){
      setValues({
        ...values,
        bgColor: 
        `rgb(
          ${event.target.name == "r" ? event.target.value : values.r},
          ${event.target.name == "g" ? event.target.value : values.g},
          ${event.target.name == "b" ? event.target.value : values.b}
          )`,
          [event.target.name]: event.target.value
      });
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/setMessage", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
          },
        body: JSON.stringify({
          message: values.message,
          ip: values.ip,
          port: values.port,
          height: values.zeilen,
          width: values.spalten,
          r : values.r,
          g : values.g,
          b : values.b,
          animation : false
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setOpen(false);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Message Form"
        />
        <Divider />
        <CardContent>
        <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="Message"
                name="message"
                onChange={handleChange}
                required
                value={values.message}
                variant="outlined"
              />
            </Grid>            
          
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="IP Adresse"
                name="ipAdresse"
                onChange={handleChange}
                defaultValue="192.168.50.1"
                required
                value={values.ipAdresse}
                variant="outlined"
              />
            </Grid> 
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="Port"
                name="port"
                onChange={handleChange}
                defaultValue="65506"
                required
                value={values.port}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="Zeilen"
                name="zeilen"
                onChange={handleChange}
                defaultValue="5"
                required
                value={values.zeilen}
                variant="outlined"
              />
            </Grid> 
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="Spalten"
                name="spalten"
                onChange={handleChange}
                defaultValue="36"
                required
                value={values.spalten}
                variant="outlined"
              />
            </Grid> 
            <Grid
              item
              md={4}
              xs={4}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="R"
                name="r"
                onChange={handleChange}
                //type="number"
                defaultValue={255}
                inputProps={{ min: "0", max: "255", step: "1" }}
                required
                value={values.r}
                error={values.r >= 256 || values.r <= -1 || isNaN(values.r)}
                helperText={values.r >= 256 || values.r <= -1 || isNaN(values.r) ? '0 bis 255' : ' '}
                variant="outlined"
              />
            </Grid> 
            <Grid
              item
              md={4}
              xs={4}
            >
              <TextField
                fullWidth
                //helperText="Please specify the message you want to send"
                label="G"
                name="g"
                onChange={handleChange}
                //type="number"
                defaultValue={255}
                inputProps={{ min: "0", max: "255", step: "1" }}
                required
                value={values.g}
                error={values.g >= 256 || values.g <= -1 || isNaN(values.g)}
                helperText={values.g >= 256 || values.g <= -1 || isNaN(values.g) ? '0 bis 255' : ' '}
                variant="outlined"
              />
            </Grid> 
            <Grid
              item
              md={4}
              xs={4}
            >
              <TextField
                fullWidth
                InputProps={{ inputProps: { min: 0, max: 10 } }}
                //helperText="Please specify the message you want to send"
                label="B"
                name="b"
                onChange={handleChange}
                //type="number"
                defaultValue={255}
                inputProps={{ min: "0", max: "255", step: "1" }}
                required
                value={values.b}
                variant="outlined"
                error={values.b >= 256 || values.b <= -1 || isNaN(values.b)}
                helperText={values.b >= 256 || values.b <= -1 || isNaN(values.b) ? '0 bis 255' : ' '}
              />
            </Grid> 
            <Grid
              item
              md={12}
              xs={12}
            >
                 <div
                 style = {{
                  backgroundColor : `${values.bgColor}`,
                  height : "50px"
                }}
                 >
                  
                 </div>
            </Grid> 
                     
          </Grid>
          
        </CardContent>
        <Divider />
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Send Text
          </Button>
        </Box>
       
        <Collapse in={open}>
        <Alert onClose={() => {setOpen(false)}}>Success!</Alert>
        </Collapse>
      </Card>
    </form>
  );
};
