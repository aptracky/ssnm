import { Card, CardContent, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import ICompData from "../../types/ICompData.type";

const Computer = (params: ICompData) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent sx={{ marginBottom: 1 }}>
        <Typography variant="h5">
          {params.name}
          {params.status ? (
            <Chip color="success" label="Online" sx={{ marginLeft: 1 }} />
          ) : (
            <Chip color="error" label="Offline" sx={{ marginLeft: 1 }} />
          )}
        </Typography>
        <div style={{ textAlign: "left", margin: 1 }}>
          <Typography>IP Address: {params.ip}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Computer;
