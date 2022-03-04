import { Grid, Box, Container, IconButton } from "@mui/material";
import React, { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileCard from "./ProfileCard";
import { profileData } from "../data/profiles";
import { ProfileCardContext } from "../context/ProfileCardContext";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../context/ColorModeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";


/**
 * pre-condition: ProfileGrid expects ColorModeContext.Provider as a parent component
 * Represents the centered Grid of ProfileCards
 * @returns 
 */
function ProfileGrid() {
  const phone = useMediaQuery("(max-width:412px)");
  const [profiles] = useState(profileData["documents"]);

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Container>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={phone === true ? "30vh" : "70vh"}
        margin={"auto"}
      >
        <Grid
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          container
          justifyContent="center"
          alignItems="center"
        >
          {profiles.map((_, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={4}
              sx={{ width: "100px", textAlign: "left" }}
              key={index}
            >
              <ProfileCardContext.Provider
                value={{
                  name: profiles[index]["name"],
                  image: profiles[index]["photo_url"],
                  title: profiles[index]["title"],
                  bio: profiles[index]["bio"],
                }}
              >
                <ProfileCard />
              </ProfileCardContext.Provider>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ProfileGrid;
