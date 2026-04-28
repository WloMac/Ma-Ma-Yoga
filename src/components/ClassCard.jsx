export default function ClassCard({ title, description }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        maxWidth: "300px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      <h3 style={{
        color: "#6B4F3A",
        marginBottom: "15px"
      }}>
        {title}
      </h3>

      <p style={{
        color: "#555",
        fontSize: "16px"
      }}>
        {description}
      </p>
    </div>
  )
}