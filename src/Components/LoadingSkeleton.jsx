import React from "react";
import Skeleton from "@mui/material/Skeleton";
export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton
        width={270}
        height={200}
        variant="rounded"
        sx={{ bgcolor: "white" }}
      />
      <Skeleton sx={{ fontSize: "1rem", bgcolor: "white" }} />
      <Skeleton sx={{ fontSize: "0.7rem", bgcolor: "white" }} />
    </div>
  );
}
