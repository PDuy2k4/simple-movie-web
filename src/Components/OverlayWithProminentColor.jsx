import React, { useEffect, useRef, useState } from "react";
import Vibrant from "node-vibrant";
import { useSelector } from "react-redux";
import axios from "axios";
export default function OverlayWithProminentColor() {
  // const [imgUrl, setImgUrl] = useState();
  const currentBanner = useSelector((state) => state.BannerReducer);
  const img_link = `https://image.tmdb.org/t/p/w500${currentBanner?.backdrop_path}`;
  const [bgStyle, setBgStyle] = useState({ background: "black" });
  useEffect(() => {
    async function fetchImageColors() {
      try {
        // Sử dụng axios để tải ảnh
        const response = await axios({
          url: img_link,
          responseType: "blob",
        });
        const imageBlob = response.data;
        const imageUrl = URL.createObjectURL(imageBlob);

        // Trích xuất màu chủ đạo từ ảnh
        Vibrant.from(imageUrl).getPalette((err, palette) => {
          if (err) {
            console.error("Error:", err);
            return;
          }

          const vibrantColor = palette.Vibrant.getRgb(); // Màu chủ đạo
          const darkVibrantColor = palette.DarkVibrant.getRgb() || [0, 0, 0]; // Màu đậm hơn

          // Tạo gradient background với các màu cụ thể và phần trăm
          const gradientBackground = `linear-gradient(
            90deg,
            rgba(${vibrantColor[0]}, ${vibrantColor[1]}, ${vibrantColor[2]}, 1) 12%,
            rgba(${darkVibrantColor[0]}, ${darkVibrantColor[1]}, ${darkVibrantColor[2]}, 1) 23%,
            rgba(0, 0, 0, 0.25) 83%
          )`;

          setBgStyle({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: gradientBackground,
            pointerEvents: "none",
            zIndex: -1000,
          });
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchImageColors();
  }, [img_link]);

  return <div style={bgStyle}></div>;
}
