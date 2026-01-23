import Link from "next/link";
import { Room } from "@/features/rooms/model/schema";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      href={`/rooms/${room.id}`}
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
        {/* Image Display */}
        <div
          style={{
            height: "240px",
            backgroundColor: "#eee",
            position: "relative",
          }}
        >
          {room.images && room.images[0] ? (
            <img
              src={room.images[0]}
              alt={room.type}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
            >
              {room.type}
            </div>
          )}
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
  );
}
