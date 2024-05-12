"use client";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack p={2}>
      Welcome to the React Query Tutorial by Hossein Fatemi!
      <Stack spacing={2}>
        <Typography>
          This is a simple tutorial to help you get started with React Query.
        </Typography>
      </Stack>
    </Stack>
  );
}
