import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    background: "green",
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
  },
  image: {
    marginLeft: "20px",
    marginTop: "2%",
  },
  button: {
    "& .MuiButton-root": {
      textTransform: "capitalize",
      color: "#fff",
      fontWeight: "bold",
      marginRight: "8px",
    },
  },
}));
