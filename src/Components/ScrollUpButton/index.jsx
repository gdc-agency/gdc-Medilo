import { useEffect, useState } from "react";

const ScrollUpButton = () => {
  // State to manage scroll-up button visibility
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY); // Debugging line
      if (window.scrollY > 350) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up: remove scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <span
          className={`cs_scrollup "${
            showScrollButton ? "cs_scrollup_show" : ""
          }`}
          onClick={scrollToTop}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
    </>
  );
};

export default ScrollUpButton;

// cs_scrollup_show;
