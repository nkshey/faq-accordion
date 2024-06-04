import { useState } from "react";

const faqData = [
  {
    id: 1,
    title: "What is Frontend Mentor, and how will it help me?",
    description:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    title: "Is Frontend Mentor free?",
    description:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    title: "Can I use Frontend Mentor projects in my portfolio?",
    description:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    title: "How can I get help if I'm stuck on a challenge?",
    description:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return <Accordion />;
}

function Accordion() {
  return (
    <main>
      <Header />
      <AccordionItemList />
    </main>
  );
}

function Header() {
  return (
    <header>
      <span>
        <img
          src="./images/icon-star.svg"
          alt="star icon"
          className="icon-star"
        />
      </span>
      <h1>FAQs</h1>
    </header>
  );
}

function AccordionItemList() {
  const [curOpen, setCurOpen] = useState(0);

  return (
    <ul>
      {faqData.map((faq, i) => (
        <AccordionItem
          faq={faq}
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          key={faq.id}
        />
      ))}
    </ul>
  );
}

function AccordionItem({ faq, curOpen, onOpen, num }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <li>
      <div>
        <h3 onClick={handleToggle}>{faq.title}</h3>
        <button onClick={handleToggle}>
          <img
            src={`./images/${isOpen ? "icon-minus.svg" : "icon-plus.svg"}`}
            alt="plus icon"
          />
        </button>
      </div>

      {isOpen ? <p>{faq.description}</p> : null}
    </li>
  );
}
