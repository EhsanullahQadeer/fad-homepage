import React, { useState } from "react";
import "./faq.css";
export default function FaqAccordian({
  title,
  desc,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpen = index === openIndex;
  const toggleAccordion = () => {
    if (isOpen) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="custom-accordion">
      <div
        onClick={toggleAccordion}
        className={`${
          isOpen ? "accordian-head-open" : ""
        } accordian-head d-flex justify-content-between align-items-center cur-pointer px-2 py-3`}
      >
        <h4>
          <span
            className={`${
              isOpen ? "accordian-numberOpen" : ""
            } accordian-number`}
          >
            {index}.
          </span>{" "}
          {title}
        </h4>
        <span
          className={`${
            isOpen ? "accordianArrowOpen" : ""
          } accordianArrow fa-sharp fa-solid fa-chevron-up fa-lg ml-2`}
        ></span>
      </div>
      <div
        className={`accordian-body px-2 ${isOpen ? "accordian-bodyOpen" : ""}`}
      >
        <p>{desc}</p>
      </div>
    </div>
  );
}
