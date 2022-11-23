export {}
// import * as React from "react"
// import { alpha } from "@mui/material/styles"
// import Box from "@mui/material/Box"
// import { Table as MuiTable } from "@mui/material"
// import TableBody from "@mui/material/TableBody"
// import TableCell from "@mui/material/TableCell"
// import TableContainer from "@mui/material/TableContainer"
// import TableHead from "@mui/material/TableHead"
// import TablePagination from "@mui/material/TablePagination"
// import TableRow from "@mui/material/TableRow"
// import TableSortLabel from "@mui/material/TableSortLabel"
// import Toolbar from "@mui/material/Toolbar"
// import Typography from "@mui/material/Typography"
// import Paper from "@mui/material/Paper"
// import Checkbox from "@mui/material/Checkbox"
// import Tooltip from "@mui/material/Tooltip"
// import { visuallyHidden } from "@mui/utils"
// import { styled } from "@mui/material/styles"
// import IconButton from "./IconButton"

// interface Data {
//   name: string
//   status: string
//   input: string
//   output: string
//   created: string
// }

// function createData(
//   name: string,
//   status: string,
//   input: string,
//   output: string,
//   created: string
// ): Data {
//   return {
//     name,
//     input,
//     output,
//     created,
//     status,
//   }
// }
// const now = new Date()
// const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000
// const koreaTimeDiff = 9 * 60 * 60 * 1000
// const date = new Date(utcNow + koreaTimeDiff)
// const createdDate = `${date.getFullYear()}-${
//   date.getMonth() + 1
// }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (orderBy === "created") {
//     if (new Date(b[orderBy]) < new Date(a[orderBy])) {
//       return -1
//     }
//     if (new Date(b[orderBy]) > new Date(a[orderBy])) {
//       return 1
//     }
//     return 0
//   }

//   if (b[orderBy] < a[orderBy]) {
//     return -1
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1
//   }
//   return 0
// }

// type Order = "asc" | "desc"

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key
// ): (a: { [key in Key]: string }, b: { [key in Key]: string }) => number {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy)
// }

// function stableSort<T>(
//   array: readonly T[],
//   comparator: (a: T, b: T) => number
// ) {
//   const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0])
//     if (order !== 0) {
//       return order
//     }
//     return a[1] - b[1]
//   })
//   return stabilizedThis.map((el) => el[0])
// }

// interface HeadCell {
//   disablePadding: boolean
//   id: keyof Data
//   label: string
//   numeric: boolean
// }

// const headCells: readonly HeadCell[] = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Name",
//   },
//   {
//     id: "status",
//     numeric: true,
//     disablePadding: false,
//     label: "Status",
//   },
//   {
//     id: "input",
//     numeric: true,
//     disablePadding: false,
//     label: "Input",
//   },
//   {
//     id: "output",
//     numeric: true,
//     disablePadding: false,
//     label: "Output",
//   },
//   {
//     id: "created",
//     numeric: true,
//     disablePadding: false,
//     label: "Created",
//   },
// ]

// interface EnhancedTableProps {
//   numSelected: number
//   onRequestSort: (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data
//   ) => void
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
//   order: Order
//   orderBy: string
//   rowCount: number
// }

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props
//   const createSortHandler =
//     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//       onRequestSort(event, property)
//     }

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               "aria-label": "select all desserts",
//             }}
//             sx={{
//               "&.Mui-checked": {
//                 color: "#C32632",
//               },
//               "&.MuiCheckbox-indeterminate": {
//                 color: "#C32632",
//               },
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   )
// }

// interface EnhancedTableToolbarProps {
//   numSelected: number
// }

// const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
//   const { numSelected } = props

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: "#F7F7F7",
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           프로젝트1
//         </Typography>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton icon="Delete" iconColor="#5E5E5E" sx={{ px: 0 }} />
//         </Tooltip>
//       ) : (
//         <>
//           <Tooltip title="List">
//             <IconButton icon="List" iconColor="#5E5E5E" sx={{ px: 0 }} />
//           </Tooltip>
//           <Tooltip title="Apps">
//             <IconButton icon="Apps" iconColor="#5E5E5E" sx={{ px: 0 }} />
//           </Tooltip>
//         </>
//       )}
//     </Toolbar>
//   )
// }

// const StyledTableRow = styled(TableRow)({
//   "&.Mui-selected": {
//     backgroundColor: "#F7F7F7",
//   },
//   "&.Mui-selected:hover": {
//     backgroundColor: "#eeeeee",
//   },
// })

// export default function Table(props) {
//   const { status, rows } = props
//   const statusList = ["Ready", "Running", "Success"]

//   const [order, setOrder] = React.useState<Order>("desc")
//   const [orderBy, setOrderBy] = React.useState<keyof Data>("created")
//   const [selected, setSelected] = React.useState<readonly string[]>([])
//   const [page, setPage] = React.useState(0)
//   const [rowsPerPage, setRowsPerPage] = React.useState(10)

//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data
//   ) => {
//     const isAsc = orderBy === property && order === "asc"
//     setOrder(isAsc ? "desc" : "asc")
//     setOrderBy(property)
//   }

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.name)
//       setSelected(newSelecteds)
//       return
//     }
//     setSelected([])
//   }

//   const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
//     const selectedIndex = selected.indexOf(name)
//     let newSelected: readonly string[] = []

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name)
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1))
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1))
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       )
//     }

//     setSelected(newSelected)
//   }

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number
//   ) => {
//     setPage(newPage)
//   }

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10))
//     setPage(0)
//   }

//   const isSelected = (name: string) => selected.indexOf(name) !== -1

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

//   return (
//     <Box sx={{ width: "100%" }}>
//       {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <TableContainer>
//           <MuiTable
//             sx={{ minWidth: 852 }}
//             aria-labelledby="tableTitle"
//             // size={dense ? "small" : "medium"}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name)
//                   const labelId = `enhanced-table-checkbox-${index}`

//                   return (
//                     <StyledTableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                       sx={{}}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             "aria-labelledby": labelId,
//                           }}
//                           sx={{
//                             // color: "white",
//                             "&.Mui-checked": {
//                               color: "#C32632",
//                             },
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{statusList[status]}</TableCell>
//                       <TableCell align="right">{row.input}</TableCell>
//                       <TableCell align="right">{row.output}</TableCell>
//                       <TableCell align="right">{row.created}</TableCell>
//                     </StyledTableRow>
//                   )
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: 53 * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </MuiTable>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </Box>
//   )
// }

// const rows = [
//   createData(
//     "Breakfast",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Burger",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Camera",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Coffee",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Hats",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Honey",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Basketball",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Fern",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Mushrooms",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Tomato basil",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Marshmallow",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Sea star",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
//   createData(
//     "Bike",
//     "Ready",
//     "Input: 640 x 425 px",
//     "Output: 1280 x 850 px",
//     createdDate
//   ),
// ]

// Table.defaultProps = { rows: rows }
