import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomizedDialogs from "./ProfileDIalog";
import ProfileTitleText from "./ProfileTitleText";
import { ProfileCardContext } from "../context/ProfileCardContext";
import { useTheme } from "@emotion/react";

/**
 * pre-condition: ProfileCard expects ProfileCardContext.Provider as Parent component
 * 
 * Represents individual Profile Cards
 */
function ProfileCard() {
  const [open, setOpen] = useState(false);
  const { name, image } = React.useContext(ProfileCardContext);

  const theme = useTheme()
  return (
    <>
      <Card sx={{ minWidth: 281, width: 281 }}>
        <CardMedia
          sx={{ width: 281, objectFit: "contain", height: 310 }}
          component="img"
          height="194"
          image={image}
          alt={name}
        />
        <CardContent sx={{ align: "left" }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <ProfileTitleText />
        </CardContent>
        <CardActions sx={{ align: "left", ml: "2px" }}>
          <Button size="small" onClick={() => setOpen(true)}>
          
            <Typography
              variant="caption"
              sx={{ mb: 1.5,  fontWeight: "bold",color:theme.palette.mode==="light"?"#000000":"#ffffff" }}
            >
              View Bio
            </Typography>
          </Button>
        </CardActions>
      </Card>
      <CustomizedDialogs setOpen={setOpen} open={open} />
    </>
  );
}

export default ProfileCard;
