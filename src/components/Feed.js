import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { useEffect } from "react";
import { fetchFromAPI } from "../ulits/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // FETCH APIS
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items)) 
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >

        {/* CHANGE SIDEBAR CATEGORIES MENUS */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          &copy; 2022 Ashish Keshri
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>video</span>
        </Typography>


        {/* VIDEOS */}
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;