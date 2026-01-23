interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function Hero({
  title = "Villa Thaifa",
  subtitle = "A Sanctuary of Luxury in the Marrakech Palmeraie.",
  ctaText = "Discover Suites",
  ctaLink = "#rooms",
}: HeroProps) {
  return (
    <section
      style={{
        height: "80vh",
        backgroundColor: "var(--accent)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1rem",
        backgroundImage: "url('/images/rooms/06_main.jpg')", // Use the best image as hero background
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      <div style={{ position: "relative", zIndex: 10 }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "white" }}>
          {title}
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            opacity: 0.9,
          }}
        >
          {subtitle}
        </p>
        <a href={ctaLink} className="btn">
          {ctaText}
        </a>
      </div>
    </section>
  );
}
