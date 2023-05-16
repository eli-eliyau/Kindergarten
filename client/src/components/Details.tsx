import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PinDropIcon from "@mui/icons-material/PinDrop";
import GroupsIcon from "@mui/icons-material/Groups";
import "./details.css";
export const Details = () => {
  const details = [
    " משפחתון לגילאים: 3 - 0",
    " שעות פעילות: 16:00 - 7:30",
    " רחוב: סוקולוב 16 פתח תקווה",
    " מספר ילדים בגן: 6",
  ];

  return (
    <div className="container-main">
      <h3 className="h3-details">פרטים על המשפחתון</h3>
      {details.map((item, key) => {
        return (
          <Typography
            style={{
              fontSize: "x-large",
            }}
            sx={{
              color: "#ffffff",
              paddingLeft: 2,
              paddingTop: 4,
            }}
          >
            {key === 0 && <EscalatorWarningIcon />}
            {key === 1 && <AccessTimeIcon />}
            {key === 2 && <PinDropIcon />}
            {key === 3 && <GroupsIcon />}
            {`${item}`}
          </Typography>
        );
      })}
    </div>
  );
};
