"use client";

import {
  Button,
  Typography,
  TextField,
  Box,
  Stack,
  Radio,
} from "@mui/material";
import * as React from 'react';
import { useEffect, useState } from "react";
import Logo from "@/components/Logo/page";
import theme from "@/components/ThemeRegistry/promptnowTheme";
import ChangeLanguage from "@/components/ChangeLanguage/page";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Register = () => {

    const [selectedValue, setSelectedValue] = React.useState('');
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [telno, setTelno] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [ndid, setNdid] = useState('');
    const [passport, setPassport] = useState('');
    const [uid, setUid] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleSurnameChange = (event) => {
        setSurName(event.target.value); 

    };const handleTelnoChange = (event) => {
        setTelno(event.target.value); 

    };const handleBrthdateChange = (newDate) => {
        setBirthdate(newDate.format('YYYYMMDD')); // ส่งค่าวันที่ที่เลือกมาเก็บไว้ในตัวแปร birthdate
    };const handleNdidChange = (event) => {
        setNdid(event.target.value); 
    };const handlePassportChange = (event) => {
        setPassport(event.target.value); 
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  const [remark , setremark] = useState('');

  const handleremark = (event) => {
    setremark(event.target.value)
  }
  const sendID = () => {
    console.log(name);
    console.log(surname);
    console.log(telno);
    console.log(ndid);
    console.log(passport);
    console.log(birthdate);
    console.log('UID:', uid);
  }

  const toggleFields = () => {
    const ndidField = document.getElementById('ndidField');
    const passportField = document.getElementById('passportField');

    if (nationality === 'Thai') {
      ndidField.style.display = 'block';
      passportField.style.display = 'none';
    } else if (nationality === 'Foreigner') {
      ndidField.style.display = 'none';
      passportField.style.display = 'block';
    }
  };

  const getUID = () => {
    liff.init({ liffId: '2002325712-8Ppdb4dx' }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        liff.getProfile().then((profile) => {
          const userId = profile.userId;
          setUid(userId); // Update the state with the retrieved UID
          console.log('User ID:', userId); // For testing purposes, you can log the UID
        }).catch((err) => {
          console.error('Error getting profile', err);
        });
      }
    }).catch((err) => {
      console.error('LIFF initialization failed', err);
    });
  };

  return (
      <Box sx={{height: "100vh",
      width: "100vw",
      overflow: "auto",
      backgroundImage: `${theme.palette.background.image2.image} !important`,
      backgroundSize: "cover",}} >
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <ChangeLanguage />
        </Box>
        <Box sx={{ mt:'3%' ,mb:'5%' , display: 'flex',justifyContent: 'center'}}>
          <Logo/>
        </Box>
        <Typography sx={{color:'white', my: '1%',mx: '5%' ,fontFamily: theme.typography.fontFamily,}}>Register</Typography>
        <Stack spacing={5} sx={{my: '1%',mx: '10%'}}>
          <TextField placeholder="ชื่อ" sx={{ 
                      borderRadius: "5px",
                      border: '1px solid #0C72BA',
                      textIndent: '11px',
                      background:'white',
                      }} 
                      onChange={handleNameChange}>
                      
          </TextField>
          <TextField placeholder="นามสกุล" sx={{ 
                      borderRadius: "5px",
                      border: '1px solid #0C72BA',
                      textIndent: '11px',
                      background:'white',
                      }} 
                      onChange={handleSurnameChange}>
            </TextField>
            <TextField placeholder="เบอร์โทรศัพท์" sx={{ 
                      borderRadius: "5px",
                      border: '1px solid #0C72BA',
                      textIndent: '11px',
                      background:'white',
                      }} 
                      onChange={handleTelnoChange}>
            </TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DatePicker sx={{ 
                      borderRadius: "5px",
                      border: '1px solid #0C72BA',
                      textIndent: '11px',
                      background:'white',
                      }} 
                      onChange={handleBrthdateChange}
                      />
              </LocalizationProvider>
              <div>
                  <div>
                      <label style={{ color: 'white', fontFamily: theme.typography.fontFamily }}>
                          <input
                              type="radio"
                              name="typenationality"
                              value="Thai"
                              onChange={handleChange}
                          />{' '}
                          คนไทย
                      </label>
                      <label style={{ color: 'white', fontFamily: theme.typography.fontFamily }}>
                          <input
                              type="radio"
                              name="typenationality"
                              value="Foreigner"
                              onChange={handleChange}
                          />{' '}
                          ต่างชาติ
                      </label>
                  </div>
                  {selectedValue === 'Thai' && (
                      <div id="ndidField">
                          <TextField
                              placeholder="เลขบัตรประชาชน"
                              id="ndid"
                              name="ndid"
                              onChange={handleNdidChange}
                              sx={{
                                  borderRadius: "5px",
                                  border: '1px solid #0C72BA',
                                  textIndent: '11px',
                                  background: 'white',
                                  width: 'calc(100%)', // กำหนดขนาด TextField ให้มีขนาดเท่ากับครึ่งหนึ่งของขนาด Container (50%)
                                  marginRight: '10px', // เพิ่มขอบขวาเพื่อแยกช่องระหว่าง TextField
                              }}
                          />
                      </div>
                  )}
                  {selectedValue === 'Foreigner' && (
                      <div id="passportField">
                          <TextField
                              placeholder="Passport"
                              id="passport"
                              name="passport"
                              onChange={handlePassportChange}
                              sx={{
                                  borderRadius: "5px",
                                  border: '1px solid #0C72BA',
                                  textIndent: '11px',
                                  background: 'white',
                                  width: 'calc(100%)', // กำหนดขนาด TextField ให้มีขนาดเท่ากับครึ่งหนึ่งของขนาด Container (50%)
                                  marginRight: '10px', // เพิ่มขอบขวาเพื่อแยกช่องระหว่าง TextField
                              }}
                          />
                      </div>
                  )}
              </div>
          <Button  onClick={getUID}
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

export default Register;
