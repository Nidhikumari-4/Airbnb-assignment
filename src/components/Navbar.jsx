import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaAirbnb } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Header">
      <div className="Header_Container">
        {/* Logo Section */}
        <div className="Logo_section">
          <Box
            sx={{
              color: "#FF385C",
              fontSize: "35px",
              display: "flex",
            }}
          >
            <FaAirbnb />
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bolder",
                color: "#FF385C",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-1px",
              }}
            >
              airbnb
            </Typography>
          </Box>
        </div>

        {/* Location Section */}
        <div className="Location_section">
          <div className="Location_Anywhere">
            <a href="#">Anywhere</a>
          </div>

          <div className="Location_week">
            <a href="#">Week in Sep-Feb</a>
          </div>

          <div>
            <a href="#" className="Location_guests">
              Add guests
            </a>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "35px",
              color: "#FF385C",
            }}
          >
            <IoSearchCircleSharp />
          </Box>
        </div>

        {/* Profile Section */}
        <div className="Profile_section">
          <div className="host">
            <a href="#">Become a host</a>
          </div>
          <div className="globe">
            <FiGlobe />
          </div>
          <div className="user">
            <div className="menu">
              <FiMenu />
            </div>
            <div className="userCircle">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
