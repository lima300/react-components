import image2 from "./assets/2.jpg";
import image1 from "./assets/1.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";

import "./styles.css";
import { useState } from "react";

const cards = [
  {
    header: "Canada",
    image: image2,
    text: "Image description here",
  },
  {
    header: "Bali",
    image: image1,
    text: "Image description here",
  },
  {
    header: "Spain",
    image: image3,
    text: "Image description here",
  },
  {
    header: "Indonesia",
    image: image4,
    text: "Image description here",
  },
  {
    header: "South Africa",
    image: image5,
    text: "Image description here",
  },
];

export const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";

        return (
          <article
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img src={card.image} />
            <div className="content">
              <span className="material-symbols-outlined">photo_camera</span>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
