     export default function Home() {
  const contract =
    "EQAmmWfjza2a_wc08y3ryJrFR_tHuIuaU_gKb7Zdi1GSbcKp";

  return (
    <main className="hero">
      <img
        src="/logo.png"
        alt="MLNV Logo"
        width={180}
        style={{ borderRadius: "50%", marginBottom: 20 }}
      />

      <h1>MLNV</h1>

      <p className="subtitle">
        Mellinetvip Community Token
      </p>

      <p>Built on TON Network</p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <a
          href="https://t.me/MLNVOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Telegram
        </a>

        <a
          href={`https://tonviewer.com/${contract}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Contract
        </a>
      </div>

      <p style={{ marginTop: 30 }}>
        🚀 DeDust Listing: Coming Soon
      </p>

      <p
        style={{
          marginTop: 20,
          maxWidth: 600,
          wordBreak: "break-all",
          color: "#8fbfff",
        }}
      >
        {contract}
      </p>
    </main>
  );
     }
