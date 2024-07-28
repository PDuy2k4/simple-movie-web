import React from "react";
import Skeleton from "@mui/material/Skeleton";
export default function LoadingSkeleton(props) {
  return (
    <>
      {props.is_home ? (
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
      ) : (
        <>
          <div>
            <Skeleton
              width={450}
              height={650}
              variant="rounded"
              sx={{ bgcolor: "white" }}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col-gap-2">
              <Skeleton
                width={250}
                sx={{ fontSize: "2rem", bgcolor: "white" }}
              />
              <Skeleton
                width={150}
                sx={{ fontSize: "2rem", bgcolor: "white" }}
              />
            </div>
            <div className="flex gap-3">
              <Skeleton
                width={50}
                sx={{ fontSize: "1rem", bgcolor: "white" }}
              />
              <Skeleton
                width={50}
                sx={{ fontSize: "1rem", bgcolor: "white" }}
              />
              <Skeleton
                width={50}
                sx={{ fontSize: "1rem", bgcolor: "white" }}
              />
            </div>
            <div>
              <Skeleton
                width={600}
                sx={{ fontSize: "1rem", bgcolor: "white" }}
              />
              <Skeleton
                width={600}
                sx={{ fontSize: "1rem", bgcolor: "white" }}
              />
              <Skeleton
                width={250}
                sx={{ fontSize: "1rem", bgcolor: "white" }}
              />
            </div>
            <Skeleton width={150} sx={{ fontSize: "2rem", bgcolor: "white" }} />
            <div className="flex gap-3">
              <Skeleton
                variant="circular"
                width={70}
                height={70}
                sx={{ bgcolor: "white" }}
              />
              <Skeleton
                variant="circular"
                width={70}
                height={70}
                sx={{ bgcolor: "white" }}
              />
              <Skeleton
                variant="circular"
                width={70}
                height={70}
                sx={{ bgcolor: "white" }}
              />
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton
                variant="rounded"
                width={170}
                height={100}
                sx={{ bgcolor: "white" }}
              />
              <Skeleton
                variant="rounded"
                width={60}
                height={60}
                sx={{ bgcolor: "white" }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
