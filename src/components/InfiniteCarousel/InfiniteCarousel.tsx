"use client";

import { useCallback, useEffect, useRef } from "react";
import s from "./InfiniteCarousel.module.scss";

interface IProps {
  children: React.ReactNode;
  gap?: string;
  width?: string;
  speed?: string;
  pauseWhileHover?: boolean;
  reverse?: boolean;
}

const DEFAULT_CONFIG = { gap: "64px", width: "550px", speed: "20s" };

export const InfiniteCarousel: React.FC<IProps> = ({
  children,
  gap,
  width,
  speed,
  pauseWhileHover = false,
  reverse = false,
}) => {
  const scrollerContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollerListRef = useRef<HTMLUListElement | null>(null);

  const setupAnimation = useCallback(() => {
    const config = {
      gap: {
        name: "--scroller-gap",
        value: gap ?? DEFAULT_CONFIG.gap,
      } as const,
      width: {
        name: "--scroller-width",
        value: width ?? DEFAULT_CONFIG.width,
      } as const,
      speed: {
        name: "--scroller-speed",
        value: speed ?? DEFAULT_CONFIG.speed,
      } as const,
    };

    Object.entries(config).forEach(([_, item]) => {
      document.documentElement.style.setProperty(item.name, item.value);
    });
  }, [gap, speed, width]);

  useEffect(() => {
    setupAnimation();
  }, [setupAnimation]);

  useEffect(() => {
    const scroller = scrollerContainerRef.current;
    const list = scrollerListRef.current;

    if (scroller && list) {
      scroller.setAttribute("data-animated", "true");

      const listItems = Array.from(list.children);

      listItems.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");

        list.appendChild(duplicatedItem);
      });
    }
  }, []);

  const renderList = () => (
    <ul className={s.list} ref={scrollerListRef}>
      {children}
    </ul>
  );

  return (
    <div
      className={s.container}
      data-pause={pauseWhileHover}
      data-reverse={reverse}
      ref={scrollerContainerRef}
    >
      {renderList()}
    </div>
  );
};
