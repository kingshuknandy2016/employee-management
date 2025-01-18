import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { Box, FormControl, FormLabel, Radio, Stack } from "@mui/material";

interface AddUserProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

type Role = "Admin" | "User";
type State = "Active" | "Inactive";
//type Gender = "Male" | "Female";
export default function AddUser(props: AddUserProps) {
  const allowedRoles: Role[] = ["Admin", "User"];
  const allowedStates: State[] = ["Active", "Inactive"];
  //const allowedGenders: Gender[] = ["Male", "Female"];
  const [role, setRole] = React.useState<Role>("User");
  const [active, setActive] = React.useState<State>("Active");
  //const [gender, setGender] = React.useState<Gender>("Male");
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={() => props.setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries(formData.entries());
            // const email = formJson.email;
            // console.log(email);
            props.setOpen(false);
            props.handleSubmit(event);
          },
        }}
      >
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            placeholder="Enter your name"
          />

          <TextField
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
          />
          <Box sx={{ height: "10px" }}></Box>
          <Stack direction="row" spacing={2}>
            <TextField
              required
              margin="dense"
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              sx={{ width: "49%" }}
              variant="outlined"
              placeholder="Enter your phone"
            />
            <Box sx={{ width: "2%" }}></Box>
            <TextField
              select
              required
              margin="dense"
              id="role"
              name="role"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              sx={{ width: "49%" }}
              variant="outlined"
              placeholder="Enter your role"
            >
              {allowedRoles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Box sx={{ height: "10px" }}></Box>
          <Stack direction="row" spacing={2}>
            <TextField
              select
              required
              margin="dense"
              id="active"
              name="active"
              label="Active"
              value={active}
              onChange={(e) => setActive(e.target.value as State)}
              sx={{ width: "47%" }}
              variant="outlined"
              placeholder="Enter your state"
            >
              {allowedStates.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={{ width: "5px" }}></Box>
            <FormControl variant="outlined" sx={{ paddingLeft: "10px" }}>
              <FormLabel id="gender-label">Gender</FormLabel>
              <RadioGroup row aria-labelledby="gender-label" name="gender">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button variant="outlined" onClick={() => props.setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.light" }}
            type="submit"
          >
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
