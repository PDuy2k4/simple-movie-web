import React, { useEffect, useState, memo } from "react";
import Vibrant from "node-vibrant";
import { useSelector } from "react-redux";
import axios from "axios";

function OverlayWithProminentColor() {
  const currentBanner = useSelector((state) => state.BannerReducer);
  const img_link = `https://image.tmdb.org/t/p/w500${currentBanner?.backdrop_path}`;
  const [bgStyle, setBgStyle] = useState({
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg,
            rgba(255,255, 255, 0.4) 12%,
            rgba(255,255, 255, 0.2) 23%,
            rgba(0, 0, 0, 0.25) 88%
          )`,
    pointerEvents: "none",
    zIndex: -1000,
  });

  useEffect(() => {
    async function fetchImageColors() {
      try {
        const response = await axios({
          url: img_link,
          responseType: "blob",
        });
        const imageBlob = response.data;
        const imageUrl = URL.createObjectURL(imageBlob);

        Vibrant.from(imageUrl).getPalette((err, palette) => {
          if (err) {
            console.error("Error:", err);
            return;
          }

          const vibrantColor = palette.Vibrant.getRgb();
          const darkVibrantColor = palette.DarkVibrant?.getRgb() || [0, 0, 0];

          const gradientBackground = `linear-gradient(
            90deg,
            rgba(${vibrantColor[0]}, ${vibrantColor[1]}, ${vibrantColor[2]}, 1) 12%,
            rgba(${darkVibrantColor[0]}, ${darkVibrantColor[1]}, ${darkVibrantColor[2]}, 1) 23%,
            rgba(0, 0, 0, 0.25) 88%
          )`;

          setBgStyle((prevStyle) => ({
            ...prevStyle,
            background: gradientBackground,
          }));
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchImageColors();
  }, [img_link]);

  return <div className="animate-fadeIn" style={bgStyle}></div>;
}

export default memo(OverlayWithProminentColor);
