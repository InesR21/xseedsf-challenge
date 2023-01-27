import React from "react";
import { Job } from "../pages/Home";

interface JobItemProps {
  job: Job;
}
function JobItem({ job }: JobItemProps) {
  const companyName = job.title.match(/^[^\s(]+/)[0];
  const getDate = (time: number) => {
    const date = new Date(time * 1000);
    return date.toLocaleDateString();
  };
  return (
    <div
      onClick={() =>
        window.open(
          job.url ? job.url : `https://news.ycombinator.com/item?id=${job.id}`,
          "_blank"
        )
      }
    >
      <div
        style={{
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {companyName}
        </span>
      </div>
      <div>
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            marginBottom: "1rem",
          }}
        >
          {job.text}
        </span>
        <span
          style={{
            width: "100%",
          }}
        >
          {getDate(job.time)}
        </span>
      </div>
    </div>
  );
}

export default JobItem;
