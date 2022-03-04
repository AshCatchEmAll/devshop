import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { ProfileCardContext } from "../context/ProfileCardContext";

/**
 * pre-condition : ProfileTitleText expects ProfileCardContext.Provider as a Parent component
 * Represents Job Title text with added styling
 */
function ProfileTitleText() {
  const theme = useTheme();
  const {title} = useContext(ProfileCardContext);
  return (
    <Typography
      sx={{
        mb: 1.5,
        color: theme.palette.mode === "dark" ? "#7289da" : "#5a4fcf",
        fontWeight: "bold",
      }}
      color="primary"
    >
      {title}
    </Typography>
  );
}

export default ProfileTitleText;
