import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack, 
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBack from "@mui/icons-material/VideoCameraBack";
import { PersonAdd, Image, DateRange } from "@mui/icons-material";
import { CssBaseline } from '@mui/material/';


const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign={"center"}>
            {" "}
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
              sx={{ width: 30, height: 30 }}
            ></Avatar>
            <Typography fontWeight={500} variant="h6">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
