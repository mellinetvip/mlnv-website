export default function Home() {
  const contract =
    "EQAmmWfjza2a_wc08y3ryJrFR_tHuIuaU_gKb7Zdi1GSbcKp";

  return (
    <main className="hero">
      <img src="/logo.png" alt="MLNV Logo" className="logo" />

      <h1>MLNV</h1>

      <p className="subtitle">
        Mellinetvip Community Token on TON Blockchain
      </p>

      <div className="buttons">
        <a
          href="https://x1000.finance/tokens/EQAmmWfjza2a_wc08y3ryJrFR_tHuIuaU_gKb7Zdi1GSbcKp"
          target="_blank"
        >
          🚀 Buy MLNV
        </a>

        <a
          href="https://t.me/MLNVOfficial"
          target="_blank"
        >
          💬 Telegram
        </a>
      </div>

      <div className="contract">
        <p>{contract}</p>

        <button
          onClick={() => {
            navigator.clipboard.writeText(contract);
            alert("Contract copied!");
          }}
        >
          📋 Copy Contract
        </button>
      </div>
    </main>
  );
}
