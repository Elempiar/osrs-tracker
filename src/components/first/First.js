import { useEffect } from "react";
import { Background, Parallax } from "react-parallax";
import bgBack from "./images/bg-back.jpeg";
import bgFront from "./images/bg-front.webp";

export default function First() {
  useEffect(() => {});

  return (
    <section className="first">
      <div className="container-fluid">
        <div className="row text-align-center">
          <Parallax bgImage={bgBack.src} strength={500}>
            <div className="col-12 text-center position-absolute bottom-0 pb-5">
              <h1>Parallax Test</h1>
              <p>Lorem Ipsum Dolor Sit Amet.</p>
            </div>
            <Parallax strength={100}>
              <Background>
                <img src={bgFront.src} alt="Parallax Front" />
              </Background>
            </Parallax>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
