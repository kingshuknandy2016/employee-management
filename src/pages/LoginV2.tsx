import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";

const LoginV2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <Box>
      <Grid container flexDirection={"row"}>
        <Grid
          size={{ xs: 12, md: 6 }}
          height={"100vh"}
          sx={{ backgroundColor: "primary.main" }}
          padding={"80px"}
        >
          <Box sx={{ height: "20px" }} />
          <Box>
            <RocketLaunchIcon
              fontSize="large"
              sx={{ color: "white", height: "50px", width: "50px" }}
            />
          </Box>
          <Box sx={{ height: "20px" }} />
          <Typography color="white" fontFamily={"Droid Sans"} variant="h4">
            {"Users Management"}
          </Typography>
          <Box sx={{ height: "40px" }} />
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            <Stack direction={"column"} spacing={2}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{
                  height: "70px",
                  backgroundColor: "inherit",
                  color: "white",
                }}
              >
                <Box className="flex flex-col items-center justify-center w-20">
                  <Box
                    className="p-2 rounded-full flex items-center justify-center"
                    sx={{
                      backgroundColor: "rgba(122, 161, 245, 0.47)",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <PeopleIcon />
                  </Box>
                </Box>
                <Stack
                  direction={"column"}
                  alignItems={"flex-start"}
                  spacing={1}
                >
                  <Typography variant="body2" fontSize={"17px"} color="white">
                    Employee Management
                  </Typography>

                  <Typography
                    variant="body2"
                    fontSize={"12px"}
                    color="white"
                    textAlign={"left"}
                  >
                    Manage your employees and their details and also set
                    relavant permissions
                  </Typography>
                </Stack>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{
                  height: "70px",
                  backgroundColor: "inherit",
                  color: "white",
                }}
              >
                <Box className="flex flex-col items-center justify-center w-20">
                  <Box
                    className="p-2 rounded-full flex items-center justify-center"
                    sx={{
                      backgroundColor: "rgba(122, 161, 245, 0.47)",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <PeopleIcon />
                  </Box>
                </Box>
                <Stack
                  direction={"column"}
                  alignItems={"flex-start"}
                  spacing={1}
                >
                  <Typography variant="body2" fontSize={"17px"} color="white">
                    Roles Management
                  </Typography>

                  <Typography
                    variant="body2"
                    fontSize={"12px"}
                    color="white"
                    textAlign={"left"}
                  >
                    Manage your roles and their permissions and also set
                    relavant permissions
                  </Typography>
                </Stack>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{
                  height: "70px",
                  backgroundColor: "inherit",
                  color: "white",
                }}
              >
                <Box className="flex flex-col items-center justify-center w-20">
                  <Box
                    className="p-2 rounded-full flex items-center justify-center"
                    sx={{
                      backgroundColor: "rgba(122, 161, 245, 0.47)",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <PeopleIcon />
                  </Box>
                </Box>
                <Stack
                  direction={"column"}
                  alignItems={"flex-start"}
                  spacing={1}
                >
                  <Typography variant="body2" fontSize={"17px"} color="white">
                    Dashboard
                  </Typography>

                  <Typography
                    variant="body2"
                    fontSize={"12px"}
                    color="white"
                    textAlign={"left"}
                  >
                    View your dashboard and analytics and also get insights
                    about your employees
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ backgroundColor: "white", height: "100vh" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
            sx={{ boxShadow: 3 }}
          >
            <Typography
              variant="h5"
              className="text-primary-dark mb-4 text-center font-bold text-3xl"
              fontFamily={"Droid Sans"}
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box sx={{ height: "15px" }} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="mt-4"
              >
                Login
              </Button>
            </form>
            <Box sx={{ height: "15px" }} />
            <Typography variant="body2" className="text-center mt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-primary">
                Register
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginV2;
