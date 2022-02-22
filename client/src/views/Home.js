import React from "react";
import { Headers, HomeContent } from "../components";
export default function Home() {
  return (
    <div>
      <Headers />
      <div style={{ marginTop: "4%" }}>
        <HomeContent />
      </div>
    </div>
  );
}
