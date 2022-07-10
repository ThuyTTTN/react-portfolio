import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import watercolorBanner from "../../assets/watercolor-splash-banner.png";

function Banner({setPage}) {
  //looping through words
  const [loopNum, setLoopNum] = useState(0);
  //words being typed out/deleted
  const [isDeleting, setIsDeleting] = useState(false);
  //displaying current text
  const [text, setText] = useState("");
  // rotating words
  const toRotate = ["Software Developer", "Software Engineer ", "Jr Developer"];
  //time between each text typed out
  const period = 1000;
  //determines how fast each letter is typed
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  // function for typing and deleting text
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to My Portfolio</span>
                  <h1>
                    {`Hi! I'm Thuy Nguyen, a `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Developer", "Software Engineer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <button onClick={() => setPage("about")}>
                    {" "}
                    &nbsp;Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }>
                  <img
                    src={watercolorBanner}
                    alt="Header Img"
                    width="450"
                    height="450"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
