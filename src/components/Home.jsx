import React from "react";
import bg from "../assets/images/backgroundmain.png";

import surah from "../assets/images/surah.png";
import wirid from "../assets/images/wirid.png";
import doa from "../assets/images/doa.png";
import khutbah from "../assets/images/khutbah.png";
import dalail from "../assets/images/dalail.png";
import tasbih from "../assets/images/tasbih.png";
import burdah from "../assets/images/burdah.png";
import simt from "../assets/images/simt.png";
import ma from "../assets/images/ma.png";

export default function Home() {
  const menus = [
    { title: "Surah", img: surah, route: "/surah" },
    { title: "Wirid", img: wirid, route: "/wirid" },
    { title: "Doa", img: doa, route: "/doa" },
    { title: "Khutbah", img: khutbah, route: "/khutbah" },
    { title: "Dalailul Khairat", img: dalail, route: "/dalail" },
    { title: "Tasbih", img: tasbih, route: "/tasbih" },
    { title: "Burdah", img: burdah, route: "/burdah" },
    { title: "Simthud dhoror", img: simt, route: "/simt" },
    { title: "Maulid Azab", img: ma, route: "/ma" },
  ];

  return (
    <div>
      <div style={{ width: "100%", maxWidth: 379, margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            border: "2px solid #2f4e31",
            overflow: "hidden",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Background */}
          <img
            src={bg}
            alt="background"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />

          {/* Overlay Menu */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 16,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
              }}
            >
              {menus.map((m, i) => (
                <div
                  key={i}
                  onClick={() => (window.location.href = m.route)}
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    padding: 8,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={m.img}
                    alt={m.title}
                    style={{ width: 40, height: 40, objectFit: "contain" }}
                  />
                  <div style={{ marginTop: 6, fontSize: 12, fontWeight: "bold" }}>
                    {m.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
