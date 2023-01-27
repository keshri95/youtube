import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../ulits/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  // // console.log(channelDetail, videos);
  // useEffect(() => {
  //   // CHANNEL DETAILS
  //   fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
  //     setChannelDetail(data?.items[0])
  //   );

  //   // VIDEOS
  //   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
  //     (data) => setVideos(data?.items)
  //   );
  // }, [id]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,56,140,1) 42%, rgba(9,9,121,1) 49%, rgba(9,9,121,1) 59%, rgba(86,0,255,1) 68%)",
          zIndex: 10,
          height: "300px",
        }}
      />

      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
