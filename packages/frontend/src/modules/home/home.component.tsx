import * as React from "react";
import { useHome } from "./hooks/home.hook";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination } from "@mui/material";
import { container, textWrapper } from "./home.styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Home: React.FunctionComponent = () => {
  const {
    isLoading,
    article,
    metaData,
    setPage,
    page,
    setSort,
    setSearch,
    sort,
    search,
  } = useHome();

  const onSetSort = () => (sort === "asc" ? setSort("desc") : setSort("asc"));
  return (
    <div className={container}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(1);
          }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={onSetSort}
        >
          {sort === "asc" ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </IconButton>
      </Paper>
      {!!article?.length &&
        article.map((item) => {
          return (
            <div key={item.id} className={textWrapper}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!!metaData?.totalCountOfPages && (
        <Pagination
          count={metaData?.totalCountOfPages}
          page={page}
          onChange={(_, page) => setPage(page)}
        />
      )}
    </div>
  );
};

export default Home;
