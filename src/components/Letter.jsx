import React, { useState, useEffect } from "react";

export default function Letter() {
  const [stage, setStage] = useState("plane");
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  const fullText = ` my dearest love,
  i know ur sleeping rn but i just wanted to say thank U..
  for making time for us even when ur tired,
  for always thinking of ways to make me happy,
  for reminding me i am loved even from miles away.
  ik loving me isnt always easy.
  but somehow...we r doing it. and i'm incredibly grateful for u.
  being loved by u feels like such a blessing and an answered prayer.
  i cant wait for the day i get to tell u all this in person and not
  through screen, but face to face while i hug u tight.
  I LOVE U SO SO SO MUCH MERO BUDIIII.

forever yours,
❤️ ur husband `;

  useEffect(() => {
    let index = 0;
    let timer;

    if (stage === "letter") {
      setTypedText("");
      setShowCursor(true);

      const typeNext = () => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText[index]);
          index++;

          // Add small pauses at commas, periods, and line breaks
          let delay = 90;
          const char = fullText[index - 1];
          if (char === "," || char === ";") delay = 300;
          else if (char === "." || char === "!" || char === "?") delay = 500;
          else if (char === "\n") delay = 700;

          timer = setTimeout(typeNext, delay);
        } else {
          setShowCursor(true);
        }
      };

      typeNext();
    } else {
      setShowCursor(false);
    }

    return () => clearTimeout(timer);
  }, [stage]);

  const handleEnvelopeClick = () => {
    if (stage === "plane") return;
    if (stage === "envelope") setStage("letter");
    else if (stage === "letter") setStage("envelope");
  };

  return (
    <div className="love-stage">
      {/* floating petals/sunflowers */}
      <div className="petals" aria-hidden="true">
        <span className="petal p1">🌻</span>
        <span className="petal p2">🌼</span>
        <span className="petal p3">🌻</span>
        <span className="petal p4">🌹</span>
        <span className="petal p5">🌸</span>
        <span className="petal p6">🌻</span>
        <span className="petal p7">🌹</span>
        <span className="petal p8">🌼</span>
        <span className="petal p9">🌹</span>
        <span className="petal p10">🌻</span>

      </div>

      {/* airplane intro */}
      {stage === "plane" && (
        <div
          className="love-plane"
          onAnimationEnd={() => setStage("envelope")}
        >
          ✈️
        </div>
      )}

      {/* envelope */}
      {(stage === "envelope" || stage === "letter") && (
        <div className="envelope-wrap">
          <div
            className={`envelope-3d ${stage === "letter" ? "is-open" : ""}`}
            onClick={handleEnvelopeClick}
          >
            <div className="env-back"></div>
            <div className="env-front">
              <div className="env-flap"></div>
              <div className="env-body"></div>
              {stage !== "letter" && <div className="env-seal">❤️</div>}
            </div>
          </div>

          <p className="open-hint">
            {stage === "envelope"
              ? "tap to open your sunflower letter 🌻"
              : "tap again to close 🌻"}
          </p>
        </div>
      )}

      {/* letter panel */}
      <div className={`letter-panel ${stage === "letter" ? "show" : ""}`}>
        <div className="letter-inner">
          <h2> a letter from the heart 💌</h2>
          <div className="typed-text">
            {typedText}
            {showCursor && <span className="cursor"></span>}
          </div>
        </div>
      </div>
    </div>
  );
}
