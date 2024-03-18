"use client";
import { MotionValue, Variants, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
function Blob({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const rotateForward = useTransform(scrollYProgress, [0, 1], [0, 360], {
    clamp: false,
  });

  const rotatebackward = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.1]);
  const skew = useTransform(scrollYProgress, [0, 1], [1, 23]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1.4, 0.1]);
  const skew2 = useTransform(scrollYProgress, [0, 1], [23, 10]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1.3, 0.5]);
  const skew3 = useTransform(scrollYProgress, [0, 1], [10, 25]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1.6, 0.5]);
  const skew4 = useTransform(scrollYProgress, [0, 1], [25, 8]);
  const fill = useTransform(scrollYProgress, [0, 1], ["#ffafcc", "#a2d2ff"]);

  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="900"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g transform="translate(452.0867431693624 332.45275755778096)">
        <motion.path
          d="M191.7 -196.7C243.9 -139.5 278.4 -69.8 271.5 -7C264.5 55.9 216.1 111.7 163.9 150.8C111.7 189.9 55.9 212.1 -16.3 228.4C-88.4 244.6 -176.8 254.9 -224.1 215.8C-271.4 176.8 -277.7 88.4 -276.4 1.3C-275.1 -85.8 -266.3 -171.6 -218.9 -228.8C-171.6 -285.9 -85.8 -314.5 -8 -306.4C69.8 -298.4 139.5 -253.9 191.7 -196.7"
          style={{ rotate: rotateForward }}
          fill={fill}
          id="blob1"
        ></motion.path>
        <motion.path
          d="M234.1 -225.9C296.6 -171.6 335.8 -85.8 325.2 -10.6C314.6 64.6 254.2 129.2 191.7 179C129.2 228.8 64.6 263.9 4.7 259.2C-55.2 254.6 -110.5 210.2 -165.8 160.3C-221.2 110.5 -276.6 55.2 -280.1 -3.5C-283.6 -62.2 -235.1 -124.5 -179.8 -178.8C-124.5 -233.1 -62.2 -279.6 11.8 -291.3C85.8 -303.1 171.6 -280.3 234.1 -225.9"
          id="blob2"
          fill={fill}
          style={{
            rotate: rotatebackward,
            scale: scale,
            skewY: skew,
          }}
        ></motion.path>{" "}
        <motion.path
          d="M191.7 -196.7C243.9 -139.5 278.4 -69.8 271.5 -7C264.5 55.9 216.1 111.7 163.9 150.8C111.7 189.9 55.9 212.1 -16.3 228.4C-88.4 244.6 -176.8 254.9 -224.1 215.8C-271.4 176.8 -277.7 88.4 -276.4 1.3C-275.1 -85.8 -266.3 -171.6 -218.9 -228.8C-171.6 -285.9 -85.8 -314.5 -8 -306.4C69.8 -298.4 139.5 -253.9 191.7 -196.7"
          style={{
            rotate: rotateForward,
            scale: scale2,
            skewY: skew2,
          }}
          id="blob1"
          fill={fill}
        ></motion.path>
        <motion.path
          d="M138.6 -194.7C181.5 -159.5 219.6 -121.6 224.3 -79.5C228.9 -37.3 200 9.2 181.7 57C163.3 104.8 155.4 153.9 126.9 188.3C98.4 222.7 49.2 242.4 -4.8 249C-58.8 255.6 -117.6 249.1 -158.5 218.8C-199.3 188.4 -222.4 134.1 -225.9 82.9C-229.5 31.7 -213.7 -16.3 -187.5 -49.8C-161.3 -83.3 -124.7 -102.3 -91.8 -140.8C-58.8 -179.2 -29.4 -237.1 9.2 -249.8C47.8 -262.5 95.6 -229.9 138.6 -194.7"
          style={{
            rotate: rotatebackward,
            scale: scale3,
            skewY: skew3,
          }}
          fill={fill}
        ></motion.path>
        <motion.path
          d="M85.6 -168C109.6 -134.5 126.7 -108.7 159.9 -82C193.2 -55.3 242.6 -27.7 251.7 5.2C260.8 38.2 229.5 76.3 193.6 98.4C157.7 120.5 117.1 126.5 84.1 126.2C51 125.8 25.5 119.2 -3.4 125.1C-32.3 131 -64.7 149.5 -108 155.8C-151.3 162 -205.5 156 -217 128C-228.5 100 -197.3 50 -172.7 14.2C-148.2 -21.7 -130.4 -43.3 -126.8 -85C-123.2 -126.8 -133.9 -188.5 -115.1 -225C-96.3 -261.5 -48.2 -272.8 -8.7 -257.7C30.8 -242.7 61.7 -201.5 85.6 -168"
          style={{
            rotate: rotateForward,
            scale: scale4,
            skewY: skew4,
          }}
          fill={fill}
        ></motion.path>
      </g>
    </svg>
  );
}

export default Blob;
