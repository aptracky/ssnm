import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ICompData from "../../types/ICompData.type";
import Computer from "../computer/Computer";

const HomePage = () => {
  const [data, setData] = useState<ICompData[]>();

  useEffect(() => {
    const listComputers = async () => {
      axios
        .get<ICompData[]>("http://localhost:1337/devices", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    };
    if (!data) {
      listComputers();
    }
  }, [data]);

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Stupid Simple Network Manager</Typography>
        <Grid container>
          {data?.map((item) => {
            return (
              <Computer
                key={item.id}
                id={item.id}
                name={item.name}
                status={item.status}
                lastUpdated={item.lastUpdated}
                ip={item.ip}
              />
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
