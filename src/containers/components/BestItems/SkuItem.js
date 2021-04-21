import React from "react";
import skuImage from "../../../assets/images/Product  Competitor.png";
import "./BestItems.scss";

const SkuItem = (props) => {
  let posStyle = "sku-item";

  if (props.pos === 0) {
    posStyle = "sku-item-first";
  }

  return (
    <div className={posStyle}>
      <img src={skuImage} alt="sku" className="sku-image" />
      <div className="sku-info">
        <div className="sku-info-nama">{props.sku.nama}</div>
        <div className="sku-harga-jumlah">
            <div className="sku-harga">
                Rp {props.sku.harga}
            </div>
            <div className="sku-jumlah">
                {props.sku.jumlah}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SkuItem;
