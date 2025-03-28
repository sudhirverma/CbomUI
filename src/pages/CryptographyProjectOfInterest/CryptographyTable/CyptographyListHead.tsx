/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from "prop-types";
// @mui
import {
  Box,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from "@mui/material";

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

UserListHead.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
  headLabel: PropTypes.array,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
  requestFromOtherComponent: PropTypes.bool
};

// fix me

export default function UserListHead({
  order,
  orderBy,
  headLabel,
  onRequestSort,
  requestFromOtherComponent,
}: any) {
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={ { display: 'contents' } }>
      <TableRow>
        { headLabel.map((headCell: any) => (
          <TableCell
            sx={ { color: "#637381", backgroundColor: "#F4F6F8" } }
            key={ headCell.id }
            align={ headCell.alignRight ? "right" : "left" }
            sortDirection={ orderBy === headCell.id ? order : false }
          >
            <TableSortLabel
              hideSortIcon
              active={ orderBy === headCell.id }
              direction={ orderBy === headCell.id ? order : "asc" }
              onClick={ createSortHandler(headCell.id) }
              style={ { position: "relative", minWidth: (requestFromOtherComponent) ? '' : "134px" } }
            >
              { headCell.label }
              { orderBy === headCell.id ? (
                <Box sx={ { ...visuallyHidden } }>
                  { order === "desc" ? "sorted descending" : "sorted ascending" }
                </Box>
              ) : null }
            </TableSortLabel>
          </TableCell>
        )) }
      </TableRow>
    </TableHead>
  );
}
