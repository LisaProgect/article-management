import * as React from "react";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { useRss } from "./hooks/rss.hook";
import { container, wrapperItems } from "./rss.style";

const Rss: React.FunctionComponent = () => {
  const [value, setValue] = React.useState("");
  const { setUrl, RSSArticle, isLoadingRSS } = useRss();

  return (
    <div className={container}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          width: 400,
        }}
      >
        <InputBase
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <Button
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => setUrl(value)}
        >
          Parse
        </Button>
      </Paper>
      {!!RSSArticle?.length &&
        !isLoadingRSS &&
        RSSArticle.map((item) => {
          return (
            <div key={item.link} className={wrapperItems}>
              <a href={item.link} target="_blank">
                <h2>{item.title}</h2>
              </a>
              <p>{item.pubDate}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Rss;
