"use client";

import { AppBar, Container, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <h1>React Query Tutorial (YT: @HoFaDev)</h1>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
