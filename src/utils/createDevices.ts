import axios from "axios";
import ICompData from "../types/ICompData.type";

const createDevices = (devices: ICompData[]) => {
  devices.forEach((item) => {
    const outputData = {
      name: item.name,
      status: item.status,
      ip: item.ip,
    };
    axios.post("http://localhost:1337/devices", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outputData),
    });
  });
};

export default createDevices;
