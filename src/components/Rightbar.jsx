import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { imageData } from "../data/imageData";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          {" "}
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Photos
          </Typography>
          <ImageList
            sx={{ width: 400, height: 200 }}
            cols={2}
            rowHeight={100}
            gap={5}
          >
            <ImageListItem>
              {imageData.map((data, key) => {
                return (
                  <img style={{ margin: 2 }} src={data.img} alt={data.title} />
                );
              })}
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100}>
            Latest Conversation
          </Typography>
          <List sx={{         width: '120%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
      )
};

export default Rightbar;
