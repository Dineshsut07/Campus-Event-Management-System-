import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black"
      }}
    >
      <Container maxWidth="lg" className="text-white bg-black ">
        <Grid container spacing={5} className="items-center pl-48">
          <Grid item xs={12} sm={4} >
            <Typography variant="h6"  gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" >
              Campus Event management || Akash | Akash | Naresh | Dinesh ||
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className="pl-28">
            <Typography variant="h6"  className="text-white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" >
              Mite Moodabidri
            </Typography>
            <Typography variant="body2" >
              Email: mite@ac.in
            </Typography>
            <Typography variant="body2">
              Phone: +9346735422
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2"  align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
               DAAN
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}