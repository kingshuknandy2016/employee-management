import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import People from "@mui/icons-material/People";
import { useNavigate, useLocation } from "react-router-dom";
import Accessibility from "@mui/icons-material/Accessibility";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SegmentIcon from "@mui/icons-material/Segment";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root": {
    top: "64px",
    height: "calc(100% - 64px)",
    width: drawerWidth,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  minHeight: 48,
  px: 2.5,
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
}));

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: 0,
  justifyContent: "center",
  color: "black",
  marginLeft: "1rem",
});

const StyledListItemText = styled(ListItemText)({
  "& .MuiListItemText-primary": {
    fontWeight: "520",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    color: "black",
    fontSize: "1.1rem",
    fontFamily: "Droid Sans",
  },
});

interface LeftbarProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}

export default function Leftbar({ openDrawer }: LeftbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }} id="leftbar">
      <CssBaseline />
      <Drawer variant="permanent" open={openDrawer} id="leftbar-drawer">
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)" }} />
        <List>
          <ListItem key="Dashboard" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <GridViewIcon fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Dashboard"
                sx={openDrawer ? { opacity: 1 } : { opacity: 0 }}
              />
            </StyledListItemButton>
          </ListItem>
          <ListItem key="Users" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/users")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/users"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <People fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Users"
                sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
              />
            </StyledListItemButton>
          </ListItem>
          <ListItem key="Roles" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/roles")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/roles"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <Accessibility fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Roles"
                sx={openDrawer ? { opacity: 1 } : { opacity: 0 }}
              />
            </StyledListItemButton>
          </ListItem>
          <ListItem key="Departments" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/departments")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/departments"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <SegmentIcon fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Departments"
                sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
              />
            </StyledListItemButton>
          </ListItem>
          <ListItem key="Reports" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/reports")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/reports"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <SummarizeIcon fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Reports"
                sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
              />
            </StyledListItemButton>
          </ListItem>
          <ListItem key="Activity Log" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/activity-log")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/activity-log"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <SyncAltIcon fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Activity Log"
                sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
              />
            </StyledListItemButton>
          </ListItem>
          <ListItem key="Profile" disablePadding sx={{ display: "block" }}>
            <StyledListItemButton
              onClick={() => navigate("/profile")}
              sx={{
                justifyContent: openDrawer ? "initial" : "center",
                backgroundColor:
                  location.pathname === "/profile"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "transparent",
              }}
            >
              <StyledListItemIcon sx={openDrawer ? { mr: 3 } : { mr: "auto" }}>
                <AccountBoxIcon fontSize="small" />
              </StyledListItemIcon>
              <StyledListItemText
                primary="Profile"
                sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
              />
            </StyledListItemButton>
          </ListItem>
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <StyledListItemButton
                sx={
                  openDrawer
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" }
                }
              >
                <StyledListItemIcon
                  sx={openDrawer ? { mr: 3 } : { mr: "auto" }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </StyledListItemIcon>
                <StyledListItemText
                  primary={text}
                  sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
                />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
