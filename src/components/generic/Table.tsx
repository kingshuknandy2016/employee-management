// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import * as React from "react";
// import { useState } from "react";

// interface Column {
//   id: string;
//   label: string;
//   minWidth?: number;
//   align?: "right" | "left" | "center";
//   format?: (value: number) => string;
// }

// interface BaseTableProps<T> {
//   columns: Column[];
//   filteredRows: T[];
//   showAction?: boolean;
//   showEdit?: boolean;
//   showDelete?: boolean;
//   onEdit?: (row: T) => void;
//   onDelete?: (row: T) => void;
//   setOpenDeleteDialog?: (open: boolean) => void;
//   setDeleteUserId?: (id: string) => void;
// }

// const BaseTable = <T,>(tableProps: BaseTableProps<T>) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
//   const [data, setData] = React.useState<T[]>(tableProps.filteredRows);
//   const [deleteUserId, setDeleteUserId] = React.useState("");

//   return (
//     <TableContainer>
//       <Table size="small" aria-label="sticky table">
//         <TableHead>
//           <TableRow className="bg-slate-200">
//             {tableProps.columns.map((column) => (
//               <TableCell
//                 key={column.id}
//                 align={column.align}
//                 style={{ minWidth: column.minWidth }}
//               >
//                 {column.label}
//               </TableCell>
//             ))}
//             {tableProps.showAction && (
//               <TableCell style={{ minWidth: 100 }} align="right">
//                 {"Action"}
//               </TableCell>
//             )}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row) => {
//               return (
//                 <TableRow
//                   hover
//                   role="checkbox"
//                   tabIndex={-1}
//                   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//                   key={(row as any).id}
//                 >
//                   {tableProps.columns.map((column) => {
//                     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//                     const value = (row as any)[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === "number"
//                           ? column.format(value)
//                           : value}
//                       </TableCell>
//                     );
//                   })}
//                   <TableCell align="right">
//                     <Tooltip title="Edit">
//                       <IconButton color="primary" size="small">
//                         <EditIcon />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Delete">
//                       <IconButton
//                         color="error"
//                         size="small"
//                         onClick={() => {
//                           setOpenDeleteDialog(true);
//                           setDeleteUserId(row.id);
//                         }}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </Tooltip>
//                     {renderDeleteUserDialog()}
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default BaseTable;
