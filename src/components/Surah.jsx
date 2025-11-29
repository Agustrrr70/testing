import React from "react";
import { surahList } from "../data/surahList";

const Surah = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar Surah</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {surahList.map((s) => (
          <li
            key={s.number}
            style={{
              padding: "10px 15px",
              marginBottom: "8px",
              borderRadius: "8px",
              background: "#f4f4f4",
            }}
          >
            <strong>{s.number}. {s.name}</strong>
            <div style={{ fontSize: "14px", color: "#555" }}>{s.meaning}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Surah;
