import { InfiniteCarousel } from "@/components/InfiniteCarousel/InfiniteCarousel";
import Image from "next/image";

import HtmlIcon from "@/assets/html_icon.svg";
import CssIcon from "@/assets/css-icon.svg";
import JsIcon from "@/assets/js_icon.svg";
import Threejs from "@/assets/threejs.jpg";

export default function Home() {
  return (
    <div>
      <InfiniteCarousel width="800px" reverse key={"car2"} pauseWhileHover>
        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={HtmlIcon}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={CssIcon}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={JsIcon}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={Threejs}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </InfiniteCarousel>
      <InfiniteCarousel width="800px" key={"car1"}>
        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={HtmlIcon}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={CssIcon}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={JsIcon}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <Image
            alt=""
            src={Threejs}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </InfiniteCarousel>
    </div>
  );
}
