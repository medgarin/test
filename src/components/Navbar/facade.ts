import { useEffect, useRef, useState } from "react";

type navStyle = "transparent" | "solid";

export default function facade() {
  const [navBackGround, setNavBackGround] = useState<navStyle>("transparent");
  const navRef = useRef<string>();
  navRef.current = navBackGround;
  useEffect(() => {
    const handleScroll = () => {
      const shadow = window.scrollY > 30;
      setNavBackGround(shadow ? "solid" : "transparent");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return navBackGround;
}
