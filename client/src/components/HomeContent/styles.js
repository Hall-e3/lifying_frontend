import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    color: "#111",
    fontWeight: "bold",
    fontSize: 40,
  },
  image: {
    marginLeft: "15px",
  },
}));
