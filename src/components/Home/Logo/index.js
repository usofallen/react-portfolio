import "./index.scss";
import LogoAA from "../../../assets/images/logo-aa.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Loader } from "react-loaders";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    // gsap.registerPlugin(DrawSVGPlugin);

    // gsap
    //   .timeline()
    //   .to(bgRef.current, {
    //     duration: 1,
    //     opacity: 1,
    //   })
    //   .from(outlineLogoRef.current, {
    //     drawSVG: 0,
    //     duration: 20,
    //   });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoAA}
        alt="JavaScript,  Developer"
      />
    </div>
  );
};

export default Logo;
