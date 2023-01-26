import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../ulits/constant";

// const selectedCategory = "New";

const Sidebar = ({ selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
        // SIDEBAR MENUS
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
      >
        {/* CATEGORY NAME */}
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15",
          }}
        >
          {category.icon}
        </span>

        {/* CATEGORY ICON */}
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
