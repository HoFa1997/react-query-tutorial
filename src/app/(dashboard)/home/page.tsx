"use client";
import { NewBoothForm } from "@/module/booth/NewBooth";
import { getBoothList } from "@/services/booth";
import { Button, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

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
            <Button key={booth?._id} onClick={() => push(`/home/${booth._id}`)}>
              {booth?.typeOfParticipation}
            </Button>
          ))}
      </Stack>
    </Stack>
  );
}
