import ryzenPc from "assets/img/ryzenGaming-pc.jpg";
import intelPc from "assets/img/intelGaming-pc.jpg";

export const gamingPCs = [
  {
    imgSrc: ryzenPc,
    cpu: "Ryzen 5 3600",
    ram: "8GB Hyperx 3200Mhz",
    gpu: "Nvidia GeForce 1660 4GB",
    tag:"ryzen",
    link:"/viewProduct"
    
  },
  {
    imgSrc: ryzenPc,
    cpu: "Ryzen 5 3600x",
    ram: "16GB Hyperx 3200Mhz",
    gpu: "Nvidia GeForce 1660TI 4GB",
    tag:"ryzen",
    link:"/viewProduct"
  },
  {
    imgSrc: ryzenPc,
    cpu: "Ryzen 5 5600x",
    ram: "16GB Hyperx 3200Mhz",
    gpu: "Geforce RTX 2060 8GB",
    tag:"ryzen",
    link:"/viewProduct"
    
  },
  {
      imgSrc: intelPc,
    cpu: "Intel I5 10400f",
    ram: "HyperX 16GB 3200MHz",
    gpu: "Nvidia GeForce 1660TI 4GB",
    tag:"intel"
  },
  {
    imgSrc: intelPc,
    cpu: "Intel I700K",
    ram: "HyperX 16GB 3200MHz",
    gpu: "Nvidia RTX 2060 4GB",
    tag:"intel"

  },
  {
    imgSrc: intelPc,
    cpu: "Intel I9 11900K",
    ram: "HyperX 16GB 3200MHz",
    gpu: "Nvidia RTX 3080TI 8GB",
    tag:"intel"
  },
];
