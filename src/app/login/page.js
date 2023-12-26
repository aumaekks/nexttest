"use client";

import {
  Button,
  Typography,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo/page";
import theme from "@/components/ThemeRegistry/promptnowTheme";
import ChangeLanguage from "@/components/ChangeLanguage/page";

const Home = () => {

  const [remark , setremark] = useState('');

  const handleremark = (event) => {
    setremark(event.target.value)
  }
  const sendID = () => {
    console.log(remark)
  }

  return (
      <Box sx={{height: "100vh",
      width: "100vw",
      overflow: "auto",
      backgroundImage: `${theme.palette.background.image2.image} !important`,
      backgroundSize: "cover",}} >
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <ChangeLanguage />
        </Box>
        <Box sx={{ mt:'5%' ,mb:'20%' , display: 'flex',justifyContent: 'center'}}>
          <Logo/>
        </Box>
        <Typography sx={{color:'white', my: '1%',mx: '5%' ,fontFamily: theme.typography.fontFamily,}}>หมายเลขบัตรประชาชน/หมายเลขผู้ป่วย</Typography>
        <Stack spacing={5} sx={{my: '1%',mx: '5%'}}>
          <TextField placeholder="หมายเลขบัตรประชาชน/หมายเลขผู้ป่วย" sx={{ 
                      borderRadius: "5px",
                      border: '1px solid #0C72BA',
                      textIndent: '11px',
                      background:'white',
                      }} 
                      onChange={handleremark}>
          </TextField>
          <Button  onClick={sendID}
          sx={{ 
            backgroundColor: theme.palette.primary.main, 
            color: theme.palette.primary.contrastText, 
            borderRadius: "5px", 
            border: "1px solid #0C72BA",
            textIndent: "11px",
            fontFamily: theme.typography.fontFamily,
            my: "56px"}}
            >ดำเนินการต่อ</Button> 
        </Stack>
    </Box>
  );
};

export default Home;
