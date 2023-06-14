import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FaqAccordian from "./FaqAccordian";
import { faqData } from "./data";
// import "./faq.css";
export default function Faqs({count,className}) {
  const [openIndex, setOpenIndex] = useState(1);
  const faqItems = count ? faqData.slice(0, count) : faqData;
  return (
    faqItems.slice(0,count).map((data, i) => {
          return (
            <div className={className}>
            <FaqAccordian
              key={i}
              title={data?.title}
              desc={data?.desc}
              index={i + 1}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
             </div>
          );
        })
  );
}
