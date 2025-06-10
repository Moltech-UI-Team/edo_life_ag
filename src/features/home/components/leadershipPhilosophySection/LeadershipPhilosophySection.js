import React, { useRef, useEffect } from "react";
import "./LeadershipPhilosophySection.scss"

const videos = [
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
  { url: '', name: 'Herr Mustermann' },
];

export default function LeadershipPhilosophySection() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const onMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();

      // Support both mouse and touch
      const x = e.pageX ?? (e.touches && e.touches[0].pageX);
      if (x === undefined) return;

      const walk = (x - startX.current) * 2; // scroll speed multiplier
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
      if (isDown.current) {
        isDown.current = false;
        slider.classList.remove("active");
      }
    };

    const onMouseLeave = () => {
      if (isDown.current) {
        isDown.current = false;
        slider.classList.remove("active");
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove, { passive: false });
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchcancel", onMouseUp);
    slider.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchend", onMouseUp);
      document.removeEventListener("touchcancel", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const onMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("active");
    startX.current = e.pageX ?? (e.touches && e.touches[0].pageX);
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  return (
    <>
      <section className="leadership-philosophy-section">
        <div className="text-content">
          <h2>
            Wenn Führung nicht nur delegiert, sondern inspiriert – dann entsteht Sog statt Druck.
          </h2>
        </div>

        <div
          className="slider"
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          data-aos="fade-left"
        >
          {videos.map((video, i) => (
            <div className="video-card" key={i}>
              <div className="video-title">Video Führungskräfte</div>
              <div className={`iframe-wrapper ${!video.url ? 'no-url' : ''}`}>
                {video.url ? (
                  <iframe
                    src={video.url}
                    title={`video-${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="no-url-message">No video URL found</div>
                )}
              </div>

              <div className="video-name">{video.name}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="background-color"></div>
    </>
  );
}
