import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Container,
  Paper,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const RegistrationV2: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
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
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Container maxWidth="sm">
              <Paper elevation={3} className="p-8">
                <Box className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <PersonAddOutlinedIcon className="text-white" />
                  </div>
                  <Typography
                    variant="h5"
                    className="text-primary-dark mb-4 text-center font-bold text-3xl"
                    fontFamily={"Droid Sans"}
                  >
                    Create your account
                  </Typography>
                </Box>
                <Box sx={{ height: "15px" }} />
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Grid
                    container
                    spacing={2}
                    direction={"column"}
                    sx={{ width: "400px" }}
                  >
                    <Grid component="div">
                      <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid component="div">
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid component="div">
                      <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        required
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid component="div">
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </Grid>
                    <Grid component="div">
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        required
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="mt-6 mb-4"
                  >
                    Create Account
                  </Button>

                  <div className="text-center mt-4">
                    <Typography variant="body2" color="textSecondary">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Sign in
                      </Link>
                      {/* <a href="/login" className="text-primary">
                        Sign in
                      </a> */}
                    </Typography>
                  </div>
                </form>
              </Paper>
            </Container>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationV2;
