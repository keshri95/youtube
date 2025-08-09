import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { demoChannelTitle, demoChannelUrl, demoVideoUrl } from "../ulits/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet)
  return (
    <Card sx={{ width: {  xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: '0'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

        {/* <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: '358px', md: '320px'}, height: 180 }}
        /> */}

        <CardMedia
          component="img"
          src={snippet?.thumbnails?.high?.url || "fallback-image-url.jpg"}
          alt={snippet?.title || "video thumbnail"}
          sx={{ width: { xs: "100%", sm: '358px', md: '320px'}, height: 180 }}
        />

      </Link>


      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoUrl.slice(0, 60)}
          </Typography>
        </Link>


        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>

      </CardContent>

    </Card>
  );
};

export default VideoCard;
