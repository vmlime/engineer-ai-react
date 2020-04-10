import React from 'react';
import '../App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ModalComponent from "./ModalComponents";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function DataTable({ shownData }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(false);

  const handleOpenModal = (row) => {
    setModalContent(row);
    setOpen(true);
  };

    return (
        <div className="dataTable">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>title</StyledTableCell>
                  <StyledTableCell align="left">URL</StyledTableCell>
                  <StyledTableCell align="right">created_at</StyledTableCell>
                  <StyledTableCell align="right">author</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shownData.map((row, index) => (
                  <StyledTableRow
                    key={index}
                    hover
                    onClick={() => handleOpenModal(row)}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                    >
                      <p className="linkTab"><a href={row.url}>{row.url}</a></p>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.created_at}</StyledTableCell>
                    <StyledTableCell align="right">{row.author}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <ModalComponent setOpen={setOpen} open={open} modalContent={modalContent} />
        </div>
    );
}