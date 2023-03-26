import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LogoutIcon from "@mui/icons-material/Logout";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase-config/firebase";
import { arrayUnion, onSnapshot } from "firebase/firestore";
import Transactions from "./Transactions";
import { SingleBedOutlined } from "@mui/icons-material";
import { signOut } from "firebase/auth";



function DashboardContent() {
const drawerWidth = 240;


const {currentUser} = useContext(AuthContext);
const navigate = useNavigate()

const handlePage = () =>{
    navigate("/")
}


const handleNewUser = async () => {
    console.log(currentUser.uid)
    try{
        await setDoc(doc(db, "currency", currentUser.uid), {
            Carray: arrayUnion({
                type:"USD",
                amount:10000,
            })}
        )
    }
    catch(e){
        console.log(e);
    }
}

const getChats = () =>{
    
    const unsub = onSnapshot(doc(db, "currency", currentUser.uid), (doc) =>{

        if(!doc.data())handleNewUser();
    })
   
    return () =>{
        unsub();
    }
};


useEffect(()=>{
    getChats();
},[])




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100%)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const handleSignout = () =>{

  signOut(auth)
  navigate("/");
}

const mdTheme = createTheme();


  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar style={{ width: "100%" }} position="absolute" open={open}>
          <Toolbar
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <img width="10%" src={require("./forexlogo2.png")} />
            {/*<Typography
              component="h1"
              variant="h6"
              color="inherit"
              align="left"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            4X Trading Institute
          </Typography>*/}
            <div className="hover" onClick={()=>{handleSignout()}}>
            <LogoutIcon></LogoutIcon>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Transactions />
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
