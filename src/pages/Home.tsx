import React, { useEffect, useState, useCallback } from "react";
import characterService from "../api/characters-service";
import JobItem from "../components/JobItem";

export interface Job {
  by: string;
  id: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

function Home() {
  const [jobs, setJobs] = useState<number[]>([]);
  const [job, setJob] = useState<Job[]>([]);
  const [lastsIds, setLastsIds] = useState<number>(9);

  const fetchDataJobsId = async () => {
    const responde = await characterService.getJobs();
    const jobsId = responde.data.slice(0, 9);
    setJobs(jobsId);
  };

  const getJob = useCallback(async () => {
    if (jobs.length > 0) {
      jobs.map(async (item) => {
        const responde = await characterService.getJob(item);
        setJob((prev) => [...prev, responde.data]);
      });
    } else {
      setJob([]);
    }
  }, [jobs]);

  const loadMore = async () => {
    const responde = await characterService.getJobs();
    const fist = lastsIds + 1;
    const last = lastsIds + 7;
    setLastsIds(last);
    const jobsId = responde.data.slice(fist, last);
    setJobs((prev) => [...prev, ...jobsId]);
  };

  useEffect(() => {
    getJob();
  }, [jobs, getJob]);

  useEffect(() => {
    fetchDataJobsId();
  }, []);

  if (job.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          fontSize: "2rem",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "0 auto",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        {job.map((item: Job) => (
          <div
            key={item.id}
            style={{
              padding: 30,
              margin: 30,
              border: "1px solid white",
              width: "22%",
              maxWidth: "400px",
              height: "300px",
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <JobItem job={item} />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <button onClick={loadMore} style={{ padding: 10 }}>
          View more
        </button>
      </div>
    </div>
  );
}

export default Home;
