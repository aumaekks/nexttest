"use client";

import {
  Button,
  Container,
  Grid,
  Typography,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";

const BoxText = () => {
  return (
      <div>
        <Typography color="white" style={{marginTop: 46, marginLeft: "7%", marginRight: '7%' }}> หมายเลขบัตรประชาชน/หมายเลขผู้ป่วย</Typography>
        <div>
            <form >
                <input placeholder="หมายเลขบัตรประชาชน/หมายเลขผู้ป่วย" style={{ width: '90%',
                    height: '55px',
                    borderRadius: "5px",
                    border: '1px solid #0C72BA',
                    textIndent: '11px',
                    marginTop: '1%',
                    marginLeft: '5%', marginRight: '5%'}}></input>
            </form>
        </div>
      </div>
      
  );
};

export default BoxText;