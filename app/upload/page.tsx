"use client";

import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { Result } from "postcss";
import { sources } from "next/dist/compiled/webpack/webpack";

interface CldUploadResult {
  public_id: string;
}

function UploadButton() {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} alt="image" width={270} height={140} />
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
          styles: {
            palette: {
              window: "#464040",
              sourceBg: "#292222",
              windowBorder: "#c7a49f",
              tabIcon: "#cc6600",
              inactiveTabIcon: "#E8D5BB",
              menuIcons: "#ebe5db",
              link: "#ffb107",
              action: "#ffcc00",
              inProgress: "#99cccc",
              complete: "#78b3b4",
              error: "#ff6666",
              textDark: "#4C2F1A",
              textLight: "#D8CFCF",
            },
            fonts: {
              default: null,
              "'Merriweather', serif": {
                url: "https://fonts.googleapis.com/css?family=Merriweather",
                active: true,
              },
            },
          },
        }}
        uploadPreset="pcfbiyp0"
        onSuccess={(result) => {
          const info = result.info as CldUploadResult;
          setPublicId(info?.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-accent" onClick={() => open()}>
            Open
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}

export default UploadButton;
