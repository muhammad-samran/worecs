import React from "react";
import Main from "../../components/verify_screem/main";
import { Container, Grid, Box } from "@mui/material";

import ImageSection from "../../components/signup/ImagaSection";
import SEO from "../../components/meta-tags";

const Verify = () => {
  return (
    <>
      <SEO title={"Verify Password"} />
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Main forgetPass={true} />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            sx={{
              "@media screen and (max-width:1100px)": {
                display: "none",
              },
            }}
          >
            <ImageSection active={3} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Verify;
