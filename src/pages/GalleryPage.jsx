import React, { useMemo } from "react";
import Gallery from "./Gallery";
import Navbar from "../components/Navbar";

const GalleryPage = () => {
  const galleryItems = [
    { type: "video", src: "/assets/videos/video1.mp4" },
    { type: "video", src: "/assets/videos/video2.mp4" },
    { type: "video", src: "/assets/videos/video3.mp4" },
    { type: "video", src: "/assets/videos/video4.mp4" },
    { type: "video", src: "/assets/videos/video5.mp4" }
  ];

  const randomizedGalleryItems = useMemo(() => {
    return [...galleryItems].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <h1 className="text-3xl font-bold text-center my-8">Our Gallery</h1>
        <Gallery items={randomizedGalleryItems} />
      </div>
    </div>
  );
};

export default GalleryPage;