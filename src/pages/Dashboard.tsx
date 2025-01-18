import * as React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BarChart from "../charts/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DashboardPage: React.FC = () => (
  <Box
    sx={{
      flexGrow: 1,
      padding: 0,
      margin: 0,
      left: 0,
      right: 0,
      width: "100%",
    }}
  >
    <Box sx={{ height: 1 }} />
    <Grid container spacing={3} id="home-page">
      <Grid size={{ xs: 6, md: 8 }}>
        <Stack direction="row" spacing={2}>
          <Card sx={{ maxWidth: "49%", height: 100, width: "49%" }}>
            <CardContent className="bg-gradient-to-r from-blue-900 to-blue-500 ">
              <Typography
                gutterBottom
                variant="h5"
                fontFamily={"Droid Sans"}
                fontWeight={"550"}
                sx={{ color: "white" }}
                component="div"
              >
                Active Users
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Droid Sans"}
                fontWeight={"550"}
                fontSize={"1.1rem"}
                sx={{ color: "white" }}
              >
                10 : Total Active Users
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: "49%", height: 100, width: "49%" }}>
            <CardContent className="bg-gradient-to-r from-green-900  to-green-600 ">
              <Typography
                gutterBottom
                variant="h5"
                fontFamily={"Droid Sans"}
                fontWeight={"550"}
                sx={{ color: "white" }}
                component="div"
              >
                Roles
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Droid Sans"}
                fontWeight={"550"}
                fontSize={"1.1rem"}
                sx={{ color: "white" }}
              >
                2 : Active Roles
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Stack direction="column" spacing={2}>
          <Card sx={{ maxWidth: 345, height: 80 }}>
            <CardContent>
              <Stack direction="row" className="flex flex-start " spacing={2}>
                <Box className="flex flex-col items-center justify-center">
                  <PeopleIcon />
                </Box>

                <Box className="flex flex-col items-start justify-center">
                  <span className="text-blue-500 font-bold text-lg">15 </span>
                  <span className="text-sm ">Total Users</span>
                </Box>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, height: 80 }}>
            <CardContent>
              <Stack direction="row" className="flex flex-start " spacing={2}>
                <Box className="flex flex-col items-center justify-center">
                  <GroupAddRoundedIcon />
                </Box>

                <Box className="flex flex-col items-start justify-center">
                  <span className="text-blue-500 font-bold text-lg f">10 </span>
                  <span className="text-sm ">Active Users</span>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Grid>
    <Box sx={{ height: 10 }} />
    <Grid container spacing={3}>
      <Grid size={{ xs: 6, md: 8 }} sx={{ backgroundColor: "red" }}>
        <Card sx={{ height: "55vh" }}>
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography> */}
            <BarChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }} sx={{ backgroundColor: "blue" }}>
        <Card sx={{ height: "55vh" }}>
          <CardContent>
            <Typography
              fontFamily={"Droid Sans"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Actions Items
            </Typography>

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography fontFamily={"Droid Sans"} component="span">
                  Onboard Users
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{"Create the New Joined Users"}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography fontFamily={"Droid Sans"} component="span">
                  Create New Roles
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{"Create all Financial Roles"}</Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default DashboardPage;
