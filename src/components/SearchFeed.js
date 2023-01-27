import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Videos from "./Videos";
import { useEffect } from "react";
import { fetchFromAPI } from "../ulits/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  // FETCH APIS
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:
        <span style={{ color: "#f31503" }}>{searchTerm} </span> videos
      </Typography>

      {/* VIDEOS */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
