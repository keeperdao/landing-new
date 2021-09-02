import React, { useEffect, useRef } from "react";

export default function BeigePaper() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");
      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/files/gov-beigepaper.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ display: "flex", flexDirection: "column" }}
    />
  );
}
