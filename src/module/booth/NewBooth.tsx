import { NewBooth } from "@/services/booth/types";
import { Button, Modal, Stack, TextField } from "@mui/material";
import { useReducer, useState } from "react";

export const NewBoothForm = () => {
  const [open, toggle] = useReducer((state) => !state, false);
  const [formData, setFormData] = useState<NewBooth>({
    typeOfParticipation: "",
    type: "numerical",
    earlyPrice: 0,
    earlyDate: new Date().toISOString(),
    normalPrice: 0,
    normalDate: new Date().toISOString(),
    latePrice: 0,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mutate(
    //   {
    //     ...formData,
    //     earlyPrice: Number(formData.earlyPrice),
    //     normalPrice: Number(formData.normalPrice),
    //     latePrice: Number(formData.latePrice),
    //   },
    //   {
    //     onSuccess: () => {
    //       toggle();
    //     },
    //   }
    // );
  };
  return (
    <>
      <Button variant="contained" fullWidth onClick={toggle}>
        غرفه جدید
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
              دخیره
            </Button>
          </form>
        </Stack>
      </Modal>
    </>
  );
};
