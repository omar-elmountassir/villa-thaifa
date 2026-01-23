"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  if (!images || images.length === 0) {
    return (
      <div
        style={{
          height: "400px",
          backgroundColor: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          borderRadius: "8px",
        }}
      >
        No Image Available
      </div>
    );
  }

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "8px",
        marginBottom: "2rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
      ref={emblaRef}
    >
      <div style={{ display: "flex", height: "500px" }}>
        {" "}
        {/* Increased height for impact */}
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              minWidth: 0,
              position: "relative",
            }}
          >
            <img
              src={src}
              alt={`${alt} - View ${index + 1}`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
