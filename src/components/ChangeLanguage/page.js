import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { styled } from "@mui/system";
import theme from "@/components/ThemeRegistry/promptnowTheme";
import { Margin } from "@mui/icons-material";

const StyledLanguageContainer = styled(Button)({
  display: "flex",
  border: "1px solid",
  borderColor: "#ffffff",
  borderRadius: "5px",
});

const StyledLanguageImage = styled("img")({
  width: "20px !important",
  height: "20px !important",
  position: "relative !important",
});

const StyledLanguageText = styled(Typography)({
  color: "#ffffff",
  textAlign: "center",
  fontFamily: theme.typography.fontFamily
});

const ChangeLanguage = () => {
  const handleLanguageClick = () => {
    // Add your language change logic here
  };

  return (
    <StyledLanguageContainer onClick={handleLanguageClick}>
      <StyledLanguageImage src="Logo&Icon/Icon-Language.png" />
      <StyledLanguageText style={{marginLeft: 5}}>TH</StyledLanguageText>
    </StyledLanguageContainer>
  );
};

export default ChangeLanguage;
