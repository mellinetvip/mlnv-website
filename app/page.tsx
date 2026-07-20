"use client";
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

      <p>
        Built on TON Network
      </p>

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
        >
          Join Telegram
        </a>

        <button
          onClick={() => {
            navigator.clipboard.writeText(contract);
            alert("Contract copied!");
          }}
        >
          Copy Contract
        </button>
      </div>

      <p style={{ marginTop: 30 }}>
        🚀 DeDust Listing: Coming Soon
      </p>
    </main>
  );
}
