import { TableCell, TableContainer } from "@material-ui/core";
import { Table, TableBody, TableRow, Paper } from "@material-ui/core";
import React from "react";
import MainContainer from "./components/MainContainer";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "20px",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
}));

const Result = () => {
  const { data } = useData();
  const entries = Object.entries(data)
    .reverse()
    .filter(
      (entry) =>
        entry[0] !== "files" && !entry[0].toLowerCase().includes("password")
    );
  const fullInfo = [...entries.reverse()];
  const titlesList = ["Имя", "Фамилия", "Email", "Город", "Улица", "Дом"];
  const { files } = data;
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };
  const styles = useStyles();
  return (
    <MainContainer>
      <Typography component="h2" variant="h5" className={styles.root}>
        Спасибо за регистрацию
      </Typography>
      <Typography component="h3" className={styles.root}>
        Контактная информация
      </Typography>
      <img
        className={styles.image}
        alt="User Avatar"
        src={
          files
            ? files
            : "https://lh3.googleusercontent.com/proxy/Jl93UVXgU_eUPd50BzVnnFKY3RuSvZqRddALOUvdLexJGdTNToX5T4L4tRpsIEJdsn2PeRcPARANXM8"
        }
      />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {fullInfo.map((entry, index) => (
              <TableRow key={entry[0]}>
                <TableCell>{titlesList[index]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PrimaryButton onClick={goBack}>Back to start page</PrimaryButton>
    </MainContainer>
  );
};
export default Result;
