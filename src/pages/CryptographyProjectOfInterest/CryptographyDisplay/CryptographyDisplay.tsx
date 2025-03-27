/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import { useState } from "react";

import { applySortFilter, getComparator } from "../../../utils/sortFilter";
import SearchCyptographyList from "../CryptographyTable/SearchCyptographyList";
import CyptographyListHead from "../CryptographyTable/CyptographyListHead";

const TABLE_HEAD = [
  { id: "id", label: "Cbom Id", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "description", label: "Description", alignRight: false }
];

function filterDataBasedOnUserSelecrtionOnTag(
  filterData: any[],
  getUSERLIST: any[]
): any {
  const filteredArray = getUSERLIST.filter((item) =>
    filterData.every((tag) => item.tags.includes(tag))
  );
  return filteredArray;
}

export default function ProjectDisplay() {
  const [page, setPage] = useState(0);
  const [filterName, setFilterName] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [rowsPerPage, setRowsPerPage] = useState(15);

  let getUSERLIST: any = [
    {
      id: 1,
      name: "flick",
      description: "Apache Flink is an open-source, distributed stream-processing framework for high-performance, real-time data analytics. It enables scalable, stateful computations over bounded and unbounded data streams.",
      html_url: "https://github.com/apache/flink"
    },
    {
      id: 2,
      name: "kafka",
      description: "Apache Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant data streaming, messaging, and real-time analytics at scale.",
      html_url: "https://github.com/apache/kafka"
    },
    {
      id: 3,
      name: "keycloak",
      description: "Keycloak is an open-source identity and access management solution that provides authentication, authorization, and single sign-on (SSO) for applications and services.",
      html_url: "https://github.com/keycloak/keycloak"
    }
  ];
  // if (projectOfInterestData.getPoiData("Project_of_interest")) {
  //   getUSERLIST = projectOfInterestData.getPoiData("Project_of_interest");
  // }
  const filterData: any = [];
  if (Object.values(filterData).length !== 0) {
    getUSERLIST = filterDataBasedOnUserSelecrtionOnTag(filterData, getUSERLIST);
  }

  const handleFilterByName: any = (event: any) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getUSERLIST.length) : 0;

  const filteredUsers = applySortFilter(
    getUSERLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const openGithubLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <SearchCyptographyList
        placeholderName="Search project..."
        filterName={ filterName }
        onFilterName={ handleFilterByName }
      />
      <TableContainer>
        <Table>
          <CyptographyListHead
            order={ order }
            orderBy={ orderBy }
            headLabel={ TABLE_HEAD }
            rowCount={ getUSERLIST.length }
            onRequestSort={ handleRequestSort }
          />
          <TableBody>
            { filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (row: {
                  id: any;
                  name: string;
                  description: any;
                  html_url: string;
                }) => {
                  const {
                    id,
                    name,
                    description,
                    html_url
                  } = row;
                  return (
                    <TableRow hover key={ id } tabIndex={ -1 }>
                      <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={ 2 }>
                          <Typography
                            sx={ {
                              position: "relative",
                              left: "16px"
                            } }
                            variant="subtitle2"
                            noWrap
                          >
                            {/* <Button onClick={ () => { openGithubLink(html_url); } }> */}
                              { " " }
                              { id }{ " " }
                            {/* </Button> */}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">
                        <a
                          href={ `/CBOM/Cbom-Of-Interest/Cryptography_details/:${id}/:${name}` }
                        >
                          { name }{ " " }
                        </a>
                      </TableCell>
                      <TableCell align="left">{ description }</TableCell>
                    </TableRow>
                  );
                }
              ) }
            { emptyRows > 0 && (
              <TableRow style={ { height: 53 * emptyRows } }>
                <TableCell colSpan={ 6 } />
              </TableRow>
            ) }
          </TableBody>
          { isNotFound && (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={ 6 } sx={ { py: 3 } }>
                  <Paper
                    sx={ {
                      textAlign: "center",
                      boxShadow: "none"
                    } }
                  >
                    <Typography variant="h6" paragraph>
                      Not found
                    </Typography>

                    <Typography variant="body2">
                      No results found for &nbsp;
                      <strong>&quot;{ filterName }&quot;</strong>.
                      <br /> Try checking for typos or using complete words.
                    </Typography>
                  </Paper>
                </TableCell>
              </TableRow>
            </TableBody>
          ) }
        </Table>
        {/* <TablePagination
          sx={ {
            ".MuiTablePagination-selectLabel": {
              margin: "auto"
            },
            ".MuiTablePagination-displayedRows": {
              margin: "auto"
            }
          } }
          rowsPerPageOptions={ [15, 30, 45] }
          component="div"
          count={ getUSERLIST.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        /> */}
      </TableContainer>
    </>
  );
}
