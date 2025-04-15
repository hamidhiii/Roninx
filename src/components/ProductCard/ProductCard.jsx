import React, { useState } from "react";
import "./ProductCard.scss";
import { FaStar } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { productData } from "../../Constants/Index";

export default function ProductCard() {
  const {
    name,
    model,
    rating,
    barcodes,
    similarModels,
    features,
    description,
    specification,
  } = productData;

  const [activeModel, setActiveModel] = useState(model);
  const [activeAccordion, setActiveAccordion] = useState("0");

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="product-card">
      <div className="top-label">
        <span className="made-in">MADE IN GERMANY 🇩🇪</span>
      </div>

      <div className="similar-models">
        <p>similar model</p>
        <div className="model-buttons">
          {similarModels.map((item, index) => (
            <button
              key={index}
              className={item === activeModel ? "active" : ""}
              onClick={() => setActiveModel(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="main-info">
        <img
          src="/path/to/germany-label.png"
          alt="Made in Germany"
          className="germany-label"
        />
        <h4>
          Model: <span>{model}</span> <FaStar className="star-icon" /> (NA)
        </h4>
        <p className="product-name">{name}</p>

        <div className="barcodes">
          <p>Barcode For Card : {barcodes.card}</p>
          <p>Barcode For Color Box : {barcodes.box}</p>
          <p>Barcode For Color Carton : {barcodes.carton}</p>
        </div>

        <div className="action-buttons">
          <button className="bulk-order">Bulk Order</button>
          <button className="compare" disabled>Compare</button>
        </div>

        <div className="features">
          <h5>Features</h5>
          <ul>
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <Accordion activeKey={activeAccordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => toggleAccordion("0")}>
              Description{" "}
              {activeAccordion === "0" ? <FaMinus /> : <FaPlus />}
            </Accordion.Header>
            <Accordion.Body>{description}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => toggleAccordion("1")}>
              Specification{" "}
              {activeAccordion === "1" ? <FaMinus /> : <FaPlus />}
            </Accordion.Header>
            <Accordion.Body>{specification}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
