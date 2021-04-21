import React from "react";
import iconMore from "../../../assets/images/Icon - More.svg";
import "./BestItems.scss";
import SkuItem from "./SkuItem";

const BestItems = (props) => {
  const dataSKU = [
    { nama: "Susu Coklat", harga: "15,000", jumlah: 356 },
    { nama: "Minyak Goreng", harga: "45,000", jumlah: 278 },
    { nama: "Saos Sambal", harga: "20,000", jumlah: 179 },
    { nama: "Kecap Manis", harga: "23,000", jumlah: 136 },
  ];

  return (
    <div className="best-items">
      <div className="best-items-title">
        <p>{props.title}</p>
        <img src={iconMore} alt="icon-more" className="icon-more" />
      </div>
      <div className="sku">
        {dataSKU.map((sku, i) => (
          <SkuItem pos={i} sku={sku} />
        ))}
      </div>
    </div>
  );
};

export default BestItems;
