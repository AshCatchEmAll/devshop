import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ProfileTitleText from "./ProfileTitleText";
import { Grid } from "@mui/material";
import { useTheme,  } from "@mui/material/styles";
import { ProfileCardContext } from "../context/ProfileCardContext";

const ProfileDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

ProfileDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const open = props.open;
  const {name,image,bio} = React.useContext(ProfileCardContext)
  const theme = useTheme();
  const handleClose = () => {
    props.setOpen(false);
  };
 
  return (
    <div>
     
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent dividers>
          <Typography gutterBottom variant="h4" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <ProfileTitleText />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography gutterBottom>{ bio}</Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={image} alt={name}/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{ color: theme.palette.mode === "dark" ? "#7289da" : "#5a4fcf",fontWeight:"bold"}}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
