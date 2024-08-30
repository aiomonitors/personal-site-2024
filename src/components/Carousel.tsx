"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { cn } from "@/utils";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface CarouselProps {
  items: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [page, setPage] = useState(0);
  const isMobile = useIsMobile();

  const getChildWidths = () => {
    return items.map((_, index) => {
      return carousel.current?.children[index].clientWidth ?? 0;
    });
  };

  const getPageTranslateX = (page: number) => {
    const totalWidth = getChildWidths()
      .slice(0, page)
      .reduce((acc, curr) => acc + curr, 0);
    console.log("totalWidth", totalWidth);
    return `calc(-${totalWidth}px)`;
  };

  const onDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 10; // Adjust this value to change sensitivity
    const draggedDistance = Math.abs(info.offset.x);
    const direction = info.offset.x > 0 ? -1 : 1;
    const pagesToMove = direction;

    const newPage = Math.max(0, Math.min(items.length - 1, page + pagesToMove));
    console.log(
      draggedDistance,
      info,
      direction,
      pagesToMove,
      items.length,
      newPage,
      draggedDistance > threshold && newPage < items.length - 1
    );

    if (draggedDistance > threshold && newPage < items.length) {
      console.log(
        "page",
        page,
        newPage,
        draggedDistance,
        pagesToMove,
        page + direction * pagesToMove
      );
      setPage(newPage);
      controls.start({
        translateX: getPageTranslateX(newPage),
        transition: { type: "spring", stiffness: 150, damping: 15 },
      });
    } else {
      // If the drag distance is less than the threshold, snap back to the current page
      controls.start({
        translateX: getPageTranslateX(page),
        transition: { type: "spring", stiffness: 150, damping: 15 },
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <motion.div className="cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -10 }}
          className="flex gap-4"
          animate={controls}
          ref={carousel}
          onDragEnd={onDragEnd}
        >
          {items.map((item, index) => (
            <motion.div key={index} style={{ margin: "0" }}>
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {!isMobile ? (
        <div className="flex flex-row gap-2">
          {Array.from({ length: items.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setPage(index);
                controls.start({
                  translateX: getPageTranslateX(index),
                  transition: { type: "spring", stiffness: 150, damping: 15 },
                });
              }}
              className={cn(
                "bg-secondary/20 w-2 h-2 rounded-full transition-colors duration-150",
                page === index
                  ? "bg-secondary/80"
                  : "bg-secondary/20 hover:bg-secondary/40"
              )}
            />
          ))}
        </div>
      ) : null}

      {/* <div className="flex flex-row gap-4">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div> */}
    </div>
  );
};
