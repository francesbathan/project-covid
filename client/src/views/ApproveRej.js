import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import LogoutBtn from "../components/LogoutBtn";
import TestingTable from "../components/TestingTable";
import DashboardTabs from "../components/DashboardTabs";
import ApprovedTesting from "../components/ApprovedTesting";

function ApproveRej() {
  const [testing, setTesting] = useState(false);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/testcenters", { withCredentials: true })
      .then(res => {
        setTesting(res.data);
      })
      .catch(() => navigate("/admin"));
  }, []);

  return (
    <>
      <LogoutBtn />
      <h1>Submitted Testing Centers</h1>
      <DashboardTabs
        setTesting={setTesting}
        setApproved={setApproved}
        testing={testing}
        approved={approved}
      />
      {testing ? (
        <TestingTable setApproved={setApproved} setTesting={setTesting} />
      ) : null}
      {approved ? <ApprovedTesting /> : null}
    </>
  );
}

export default ApproveRej;
