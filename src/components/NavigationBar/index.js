import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Stack} from "@mui/material";

import ChangeLanguage from "../ChangeLanguage/page";
import Logo from "../Logo/page";

const Navigation = ({ children, isOpen, onClose }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#0C72BA" }}>
        <Toolbar>
          <Stack direction="row" width="100%" justifyContent="space-between" sx={{display: "flex",
                alignItems: "center"}} >
           <Box sx={{ height: "50px !important",
                position: "relative !important",
                width: "180px !important",display: "flex",
                alignItems: "center"
               }}>
            <Logo />
           </Box>
            <ChangeLanguage />
            </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;