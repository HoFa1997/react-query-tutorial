import { getBoothById, updateBoothById } from "@/services/booth";
import { NewBooth } from "@/services/booth/types";
import { Button, Modal, Stack, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useReducer, useState } from "react";

export const UpdateBoothForm = () => {
  const id = useParams().id as string;

  const { data } = useQuery({
    queryKey: ["booth-by-id", id],
    queryFn: () => getBoothById(id),
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateBoothById,
  });

  const [open, toggle] = useReducer((state) => !state, false);
  const [formData, setFormData] = useState<NewBooth>({
    typeOfParticipation: data?.data.typeOfParticipation || "",
    type: data?.data.type || "",
    earlyPrice: data?.data.earlyPrice || 0,
    earlyDate: data?.data.earlyDate || new Date().toISOString(),
    normalPrice: data?.data.normalPrice || 0,
    normalDate: data?.data.normalDate || new Date().toISOString(),
    latePrice: data?.data.latePrice || 0,
    description: data?.data.description || "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormData({
        typeOfParticipation: data?.data.typeOfParticipation || "",
        type: data?.data.type || "",
        earlyPrice: data?.data.earlyPrice || 0,
        earlyDate: data?.data.earlyDate || new Date().toISOString(),
        normalPrice: data?.data.normalPrice || 0,
        normalDate: data?.data.normalDate || new Date().toISOString(),
        latePrice: data?.data.latePrice || 0,
        description: data?.data.description || "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        id,
        payload: {
          ...formData,
          earlyPrice: Number(formData.earlyPrice),
          normalPrice: Number(formData.normalPrice),
          latePrice: Number(formData.latePrice),
        },
      },
      {
        onSuccess: (data, val) => {
          queryClient.invalidateQueries({ queryKey: ["booth-by-id", val.id] });
          toggle();
        },
      }
    );
  };
  return (
    <>
      <Button variant="contained" fullWidth onClick={toggle}>
        بروزرسانی غرفه
      </Button>

      <Modal open={open} onClose={toggle}>
        <Stack
          gap={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="نام"
              variant="outlined"
              fullWidth
              margin="normal"
              name="typeOfParticipation"
              value={formData.typeOfParticipation}
              onChange={handleChange}
            />
            <TextField
              label="قیمت زود هنگام"
              variant="outlined"
              fullWidth
              margin="normal"
              name="earlyPrice"
              value={formData.earlyPrice}
              onChange={handleChange}
            />

            <TextField
              label="قیمت زود معمولی"
              variant="outlined"
              fullWidth
              margin="normal"
              name="normalPrice"
              value={formData.normalPrice}
              onChange={handleChange}
            />

            <TextField
              label="قیمت دیر "
              variant="outlined"
              fullWidth
              margin="normal"
              name="latePrice"
              value={formData.latePrice}
              onChange={handleChange}
            />
            <TextField
              label="توضیحات"
              variant="outlined"
              fullWidth
              margin="normal"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
              {isPending ? "loading" : "بروزرسانی"}
            </Button>
          </form>
        </Stack>
      </Modal>
    </>
  );
};
