import { getAllRooms } from "@/features/rooms/bindings/api";
import { getFacilities } from "@/features/facilities/bindings/api";
import Link from "next/link";

export default async function Home() {
  const rooms = await getAllRooms();
  const facilities = await getFacilities();

  return (
    <main>
      {/* HERO SECTION */}
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
        }}
      >
        <div>
          <h1
            style={{ fontSize: "4rem", marginBottom: "1rem", color: "white" }}
          >
            Villa Thaifa
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              opacity: 0.9,
            }}
          >
            A Sanctuary of Luxury in the Marrakech Palmeraie.
          </p>
          <a href="#rooms" className="btn">
            Discover Suites
          </a>
        </div>
      </section>

      {/* ACCOMMODATIONS */}
      <div id="rooms" className="container" style={{ padding: "4rem 1.5rem" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          Accommodations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {rooms.map((room) => (
            <Link
              href={`/rooms/${room.id}`}
              key={room.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
              >
                {/* Image Placeholder */}
                <div
                  style={{
                    height: "240px",
                    backgroundColor: "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                  }}
                >
                  Image: {room.type}
                </div>

                <div
                  style={{
                    padding: "2rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--primary)",
                      }}
                    >
                      Room {room.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    {room.type}
                  </h3>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                      flex: 1,
                    }}
                  >
                    {room.description}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "1rem",
                      marginTop: "auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "var(--accent)",
                          }}
                        >
                          €{room.price.amount}
                        </span>
                        <span style={{ fontSize: "0.8rem", color: "#999" }}>
                          {" "}
                          / night
                        </span>
                      </div>
                      <span style={{ fontSize: "0.85rem", color: "#666" }}>
                        {room.capacity.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FACILITIES */}
      <div
        id="facilities"
        style={{ backgroundColor: "white", padding: "4rem 0" }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Facilities
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {facilities.map((facility) => (
              <div
                key={facility.id}
                style={{ textAlign: "center", padding: "2rem" }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--secondary)",
                    borderRadius: "50%",
                    margin: "0 auto 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  {/* Icon Placeholder */}★
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  {facility.name}
                </h3>
                <p style={{ color: "#666", fontSize: "0.95rem" }}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
