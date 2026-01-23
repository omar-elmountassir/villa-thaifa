import { getAllRooms } from "@/features/rooms/bindings/api";
import { getFacilities } from "@/features/facilities/bindings/api";
import { Hero } from "@/components/ui/Hero";
import { RoomCard } from "@/features/rooms/components/RoomCard";

export default async function Home() {
  const rooms = await getAllRooms();
  const facilities = await getFacilities();

  return (
    <main>
      <Hero />

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
            <RoomCard key={room.id} room={room} />
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
