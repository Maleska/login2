import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useCallback } from "react";
<<<<<<< HEAD
//import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
import { BrowserRouter, Routes,Route,Link  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const SigninPage: React.FC = () => {

const navigate = useNavigate();
/*//    console.log(navigate);
  */
  const gotoQuestion = useCallback(() => {
     navigate("Home")
 }, [navigate]);
=======
import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
import { BrowserRouter, Route } from 'react-router-dom';

const SigninPage: React.FC = () => {

//    const navigate = useNavigate();
//    console.log(navigate);
  
//   const gotoQuestion = useCallback(() => {
//     navigate("./QuestionPage")
// }, [navigate]);
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b




  return (
<<<<<<< HEAD
    
=======
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
<<<<<<< HEAD
        <Box width="70%">
=======
        <Box width="50%">
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <Box
              sx={{
                mt: "60px",
<<<<<<< HEAD
                width: "170px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // boxShadow: `0 0 20px ${colors.teal[500]}`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                ConsulSoftware
=======
                width: "150px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.green[500]}`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                CareerAI
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
              </Typography>
            </Box>
            {/* LOGO END */}

            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', marginTop: 4,  marginBottom: 0}} mt={7} mb={1}>
<<<<<<< HEAD
            Simplifica tus conexiones y aumenta tu productividad
=======
            Simplifies connecting, augmenting your career
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b

            </Typography>
            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', margin: 0 }} mt={7} mb={3}>
            </Typography>
            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', marginTop: 4 }} mt={7} mb={3}>
<<<<<<< HEAD
                Inicia sesión en nuestro portal
=======
              Sign in to our ConnectU
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
            </Typography>
          </Box>

          {/* INPUTS */}
          <CustomInput
            label="Login"
<<<<<<< HEAD
            placeholder="Ingresa tus usuario..."
=======
            placeholder="Enter your login..."
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
            isIconActive={false}
          />
          <CustomInput
            label="Password"
<<<<<<< HEAD
            placeholder="Ingresa tu contraseña..."
=======
            placeholder="Enter your password..."
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
            isIconActive={true}
          />
          {/* <CustomInput
            label="MFA Code"
            placeholder="Enter your code..."
            isIconActive={true}
          /> */}
          {/* INPUT END */}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={2}
            width="100%"
            color="white"
          >
            <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
<<<<<<< HEAD
              <Typography>Recordarme</Typography>
=======
              <Typography>Remember me</Typography>
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
            </div>
            <a
              href="#yoyo"
              style={{
                color: colors.green[500],
                textDecoration: "none",
              }}
            >
<<<<<<< HEAD
              ¿Olvidaste tu contraseña?
            </a>
          </Box>
          <Button
            onClick={gotoQuestion}
=======
              Forget password?
            </a>
          </Box>
          <Button
            //onClick={gotoQuestion}
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
<<<<<<< HEAD
            Iniciar sesión
=======
            Login
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SigninPage;
