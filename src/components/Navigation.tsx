import Link from "next/link";

export default function Navigation() {
  return (
    <header
      style={{
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontFamily: "var(--font-serif)",
            fontWeight: "bold",
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          Villa Thaifa
        </Link>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link href="/#rooms" style={{ color: "var(--text)" }}>
                Accommodations
              </Link>
            </li>
            <li>
              <Link href="/#facilities" style={{ color: "var(--text)" }}>
                Facilities
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
