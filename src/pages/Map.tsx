import WorldMap from "../worldmap.png";

export function Map() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          marginTop: 24,
          marginBottom: 24,
          width: 1000,
          borderRadius: 4,
          border: "1px solid white",
        }}
        src={WorldMap}
        alt="World Map"
      />
    </div>
  );
}
