"use client";

import {
  Button,
  Container,
  Grid,
  Typography,
  Modal,
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo/page";
import BoxText from "@/components/BoxText/page";
import ChangeLanguage from "@/components/ChangeLanguage/page";
import Navigation from "@/components/NavigationBar";

const Bill = () => {
    return(
      <Box sx = {{backgroundColor: '#f2f2f2', minHeight: "100vh",overflow: "hidden"}}>
        <Navigation/>
      
        <Box sx={{ maxHeight: 'calc(100dvh - 115px)', overflowY: 'auto', pt: 6 }}>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px'}}>
                <Typography variant = "h6">สรุปรายการค่ารักษาพยาบาล</Typography>
            </Box>

            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'left', padding: '16px', backgroundColor: 'white', pt:1 }}>
                <Typography>ชื่อผู้รับบริการ</Typography>
                <Typography>เลขผู้รับบริการ</Typography>
                <Typography>วันที่เข้ารับบริการ</Typography>
                <Typography>เลขที่เอกสาร</Typography>
                <Typography>วันที่พบแพทย์</Typography>
                <Typography>แพทย์</Typography>
            </Stack>

                <TableContainer component={Paper} sx={{backgroundColor: '#f2f2f2', maxHeight: 'calc(100vh - 450px)', overflowY: 'auto' }}>
                    <Table>
                        <TableHead sx={{ backgroundColor: '#e4e4e4'}}>
                            <TableRow>
                                <TableCell sx={{ whiteSpace: 'pre', fontSize: '11px', textAlign: 'center' }}>ชื่อผู้รับบริการ</TableCell>
                                <TableCell sx={{ whiteSpace: 'pre', fontSize: '11px', textAlign: 'center' }}>จำนวนเงิน</TableCell>
                                <TableCell sx={{ whiteSpace: 'pre', fontSize: '11px', textAlign: 'center' }}>ส่วนลด</TableCell>
                                <TableCell sx={{ whiteSpace: 'pre', fontSize: '11px', textAlign: 'center' }}>จำนวนเงินสุทธิ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: 'white'}}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: 'none', whiteSpace: 'pre-line' }}>1.1.2(1)เวชภัณฑ์ที่มีชื่อที่ยาวยาวยาว</TableCell>
                                <TableCell sx={{ borderBottom: 'none', textAlign: 'right', whiteSpace: 'pre-line' }}>2,000</TableCell>
                                <TableCell sx={{ borderBottom: 'none', textAlign: 'right', whiteSpace: 'pre-line' }}>0</TableCell>
                                <TableCell sx={{ borderBottom: 'none', textAlign: 'right', whiteSpace: 'pre-line' }}>2,000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>1.1.2(1)เวชภัณฑ์</TableCell>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>2,000</TableCell>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>0</TableCell>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>2,000</TableCell>
                            </TableRow><TableRow sx={{pt: 1}}>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>1.1.2(1)เวชภัณฑ์</TableCell>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>2,000</TableCell>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>0</TableCell>
                                <TableCell sx={{ borderBottom: 'none',textAlign: 'right', whiteSpace: 'pre-line'  }}>2,000</TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                    
                </TableContainer>
                <Paper sx={{ backgroundColor: '#f2f2f2', pt:1 }}>
                    <Stack sx={{ backgroundColor: 'white' }} spacing={2} divider={<hr />}>
                        <Stack direction="row" justifyContent="space-between" sx={{ padding: '8px' }}>
                            <Typography sx={{ textAlign: 'right', }}>รวมเงิน</Typography>
                            <Typography sx={{ textAlign: 'right', }}>2,000</Typography>
                            <Typography sx={{ textAlign: 'right', }}>0</Typography>
                            <Typography sx={{ textAlign: 'right', }}>2,000</Typography>
                        </Stack>
                    </Stack>
                </Paper>

            
            <Box sx={{ position: 'fixed', bottom: '11px', left: 0, right: 0, backgroundColor: 'white', zIndex: 1000 }}>
                <Typography variant = "h6" sx={{pl: 3.5, pt: 2}}>รวมเงิน</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px' }}>
                    <Button
                        style={{
                            width: "90%",
                            height: "40px", /* ปรับความสูงของปุ่มลง */
                            backgroundColor: "#0C72BA",
                            color: "white",
                            borderRadius: "5px",
                            border: "1px solid #0C72BA",
                            textIndent: "11px",
                            marginTop: "8px", /* ปรับค่าระยะขอบของปุ่มลง */
                            marginLeft: "5%",
                            marginRight: "5%",
                        }}
                    >
                        ชำระเงิน
                    </Button>
                </Box>
            </Box>

            
        </Box>
        </Box>
    );
};

export default Bill;