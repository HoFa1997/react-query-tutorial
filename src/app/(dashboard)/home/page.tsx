"use client";
import { NewBoothForm } from "@/module/booth/NewBooth";
import { getBoothList } from "@/services/booth";
import { Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["booth-list"],
    queryFn: getBoothList,
  });

  return (
    <Stack p={2} gap={2}>
      <NewBoothForm />

      <Stack spacing={2}>
        {data &&
          !isLoading &&
          data?.data.map((booth) => (
            <Typography key={booth?._id}>
              {booth?.typeOfParticipation}
            </Typography>
          ))}
      </Stack>
    </Stack>
  );
}
