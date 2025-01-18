import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Add from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { users as userData } from "../../mockData/userData";
import { useState } from "react";
import AddUser from "./AddUser";

interface Column {
  id: "name" | "role" | "email" | "phone" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

export interface UserInterface {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: string;
}

export default function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [users, setUsers] = useState(userData);
  const [deleteUserId, setDeleteUserId] = useState("");
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = users.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const id = Math.random().toString(36).substring(2, 15);
    const user: UserInterface = {
      id: id,
      name: formJson.name as string,
      role: formJson.role as string,
      email: formJson.email as string,
      phone: formJson.phone as string,
      status: formJson.status as string,
    };
    console.log("[UserList] user:", user);
    addUser(user);
  };

  const addUser = (user: UserInterface) => {
    console.log("[UserList] addUser:", user);
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  };

  const deleteUser = (id: string) => {
    console.log("Delete user with ID:", id);
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const renderDeleteUserDialog = () => {
    return (
      <Dialog
        open={openDeleteDialog}
        onClose={() => {
          setOpenDeleteDialog(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "white",
            color: "inherit",
          },
        }}
        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(1px)",
            backgroundColor: "rgba(0, 0, 0, 0)", // semi-transparent overlay
          },
          "& .MuiDialog-paper": {
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // Optional: adds depth
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "text.primary" }}>
          {"Are you sure you want to delete this user?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "text.secondary" }}
          >
            This action will permanently delete the user from the system.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDeleteDialog(false)}
            sx={{ color: "text.primary" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setOpenDeleteDialog(false);
              deleteUser(deleteUserId);
            }}
            color="error"
            variant="contained"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box sx={{ marginBottom: "64px" }} id="user-list">
      <Typography
        variant="h6"
        sx={{
          textAlign: "left",
          fontWeight: "550",
          fontSize: "1.5rem",
          marginBottom: 2,
          fontFamily: "Droid Sans",
        }}
      >
        {"Users"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <TextField
          placeholder="Search users..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "300px" }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.light" }}
          startIcon={<Add />}
          onClick={() => {
            setOpenAddUserDialog(true);
          }}
        >
          Add User
        </Button>
        <AddUser
          open={openAddUserDialog}
          setOpen={setOpenAddUserDialog}
          handleSubmit={handleSubmit}
        />
      </Box>
      <Box sx={{ height: 1 }} />

      <Paper sx={{ width: "100%", height: "60%", overflow: "hidden" }}>
        <TableContainer>
          <Table size="small" aria-label="sticky table">
            <TableHead>
              <TableRow className="bg-slate-200">
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell style={{ minWidth: 100 }} align="right">
                  {"Action"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell align="right">
                        <Tooltip title="Edit">
                          <IconButton
                            sx={{ color: "primary.light" }}
                            size="small"
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            color="error"
                            size="small"
                            onClick={() => {
                              setOpenDeleteDialog(true);
                              setDeleteUserId(row.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                        {renderDeleteUserDialog()}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
