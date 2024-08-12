"use client";

import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import styles from "./FAQPage.module.css";
import Link from "next/link";

const FAQPage = () => {
  const faqData = [
    {
      question: "What services does your studio offer? ",
      answer: (
        <>
          Our studio offers various services, including brand identity,
          consultation, customer experience design, and more. You can check out
          services in detail{" "}
          <Link href="/services" className="contactLink">
            here
          </Link>
          , or reach out to us through our{" "}
          <Link href="/contact" className="contactLink">
            contact us
          </Link>{" "}
          page.
        </>
      ),
    },
    {
      question: "How do I get started with your services? ",
      answer: (
        <>
          You can{" "}
          <Link href="/contact" className="contactLink">
            contact us
          </Link>{" "}
          through our contact form, email, or phone.
          {`We'll schedule an initial consultation to discuss your needs and how we can build your brand.`}
        </>
      ),
    },
    {
      question: "How long does it take to design my brand?",
      answer:
        "The timelines vary depending on the project's scope and deliverables. The initial consultation will help us understand your requirements, and provide you with an achievable timeline. ",
    },
    {
      question: "Can you help me rebrand my existing brand?",
      answer:
        "Yes, of course! We can help you redefine and rebrand to better align with your business goals and market position.",
    },
    {
      question: "What industries do you specialize in? ",
      answer: (
        <>
          We have worked with 15+ industries across the globe, including F&B,
          Hospitality, Retail, Aviation, and more. We would love to explore new
          industries and learn and develop new brands. Check out our work{" "}
          <Link href="/works" className="contactLink">
            here
          </Link>
          .
        </>
      ),
    },
    {
      question: "What makes your studio unique?",
      answer:
        "Our studio combines creativity, strategic thinking, and a deep understanding of brand dynamics to deliver solutions that are not only visually stunning but also effective in achieving business goals. We focus on building strong client relationships and voicing their stories into compelling brand experiences.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our design process typically involves initial consultation to set project scope and pricing, research and discovery, concept development, design execution, feedback and revisions, and final delivery. We collaborate closely with our clients at every stage to meet their specific needs and objectives.",
    },
    {
      question: "What kind of projects do you take?",
      answer: (
        <>
          You can view our vast portfolio of work ranging from 15+ industries
          across 10 countries{" "}
          <Link href="/works" className="contactLink">
            here
          </Link>
          .
        </>
      ),
    },
    {
      question: "What pricing packages do you offer?",
      answer:
        "We adopt a value-based pricing approach that benefits your brand to accomplish your goals and requirements to the maximum. Each project is unique, just like your brand’s story. We customize the services per your brand requirements and provide the best pricing for your budget. ",
    },
    {
      question: "Do you have any positions open at Kreatr?",
      answer: (
        <>
          We are always on the lookout for new talents. You can check out our
          open positions on our{" "}
          <Link href="/careers" className="contactLink">
            careers page
          </Link>
          .
        </>
      ),
    },
  ];

  const [openLeftAccordion, setOpenLeftAccordion] = useState(null);
  const [openRightAccordion, setOpenRightAccordion] = useState(null);

  const handleLeftAccordionChange = (value) => {
    setOpenLeftAccordion(value);
    setOpenRightAccordion(null); // Optionally close right accordion
  };

  const handleRightAccordionChange = (value) => {
    setOpenRightAccordion(value);
    setOpenLeftAccordion(null); // Optionally close left accordion
  };

  const leftColumnItems = faqData.slice(0, 5);
  const rightColumnItems = faqData.slice(5, 10);

  const renderAccordionItems = (items, controlBoxClass, isRightColumn) => {
    return items.map((item, index) => (
      <div
        className="mb-[20px] font-san_medium sm:mb-[30px] lg:mb-[40px]"
        key={index}
      >
        <Accordion.Item
          className={styles.accordionBox}
          key={index}
          value={item.question}
        >
          <Accordion.Control
            className={`${controlBoxClass} ${styles.accordionIcon} ${styles.accordionTitle}`}
          >
            {item.question}
          </Accordion.Control>
          <Accordion.Panel
            className={styles.accordionPanel}
            classNames={{ content: styles.accordionContent }}
          >
            {item.answer}
          </Accordion.Panel>
        </Accordion.Item>
      </div>
    ));
  };

  return (
    <div className="mx-[20px] mb-[48px] pt-[80px] sm:mx-[40px] sm:mb-[90px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[179px] lg:mt-[128px]">
      <div className="mt-[41px] sm:pt-[80px] lg:pt-[128px]">
        <h1 className="font-san_book text-[3.5rem] leading-[55px] tracking-[-1px] text-[#373737] sm:leading-[100px] sm:tracking-[-0.25px] lg:text-[6.25rem]">
          Most of your questions answered.
        </h1>
      </div>
      <div className="mt-[30px] grid grid-cols-1 gap-y-[20px] text-[#373737] sm:mt-[48px] sm:grid-cols-2 sm:gap-x-[38px] sm:gap-y-[40px] lg:mt-[72px] lg:gap-x-[64px]">
        <div>
          <Accordion
            className={styles.accordionWrap}
            variant="separated"
            radius="xs"
            value={openLeftAccordion}
            onChange={handleLeftAccordionChange}
          >
            {renderAccordionItems(leftColumnItems, styles.controlBox1, false)}
          </Accordion>
        </div>
        <div>
          <Accordion
            className={styles.accordionWrap2}
            variant="separated"
            radius="xs"
            value={openRightAccordion}
            onChange={handleRightAccordionChange}
          >
            {renderAccordionItems(rightColumnItems, styles.controlBox2, true)}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
