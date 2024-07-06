"use client";

import { UpdateBoothForm } from "@/module/booth/UpdateBooth";
import { getBoothById } from "@/services/booth";
import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function BoothById() {
  const id = useParams().id as string;

  const { data, isLoading } = useQuery({
    queryKey: ["booth-by-id", id],
    queryFn: () => getBoothById(id),
  });

  return !data && isLoading ? (
    <>Loading</>
  ) : (
    <Stack gap={2}>
      <UpdateBoothForm />
      name:
      <div>{data?.data?.typeOfParticipation}</div>
      earlyPrice:
      <div>{data?.data?.earlyPrice}</div>
      normalPrice:
      <div>{data?.data?.normalPrice}</div>
      latePrice:
      <div>{data?.data?.latePrice}</div>
      description:
      <div>{data?.data?.description}</div>
    </Stack>
  );
}
