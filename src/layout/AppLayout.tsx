import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { Box, styled } from "@mui/material";
import Footer from "./components/Footer";
import ResponsiveContainer from "../common/components/ResponsiveContainer";

const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const AppLayout = () => {
  return (
    <AppContainer>
      <Navbar />
      <ResponsiveContainer disableGutters>
        <Outlet />
      </ResponsiveContainer>
      <Footer />
    </AppContainer>
  );
};

export default AppLayout;
