export function LoadingSpinner() {
  return (
    <>
      <style>
        {`
          @keyframes spin-gradient {
            0% {
              transform: rotateZ(0deg);
            }
            100% {
              transform: rotateZ(360deg);
            }
          }

          .spinner {
            width: 80px;
            height: 80px;
            border: 2px solid #000000;
            border-radius: 50%;
            position: relative;
            background: conic-gradient(
              from 0deg,
              #00E0DD,
              #00FFFF,
              #00D9FF,
              #00BFE5,
              #00E0DD
            );
            animation: spin-gradient 1.5s ease-in-out infinite;
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 22px;
            color: #007f99; /* Ciano escuro para melhor legibilidade */
            user-select: none;
          }

          .spinner::before {
            content: "";
            position: absolute;
            top: 12px;
            left: 12px;
            right: 12px;
            bottom: 12px;
            background-color: #ffffff;
            border: 2px solid #000000;
            border-radius: 50%;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.06);
            z-index: 0;
          }

          .spinner-text {
            position: relative;
            z-index: 1;
            color: #000000;
          }

          .spinner-container {
            width: 100vw;
            height: 100vh;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
          }

          @media (max-width: 640px) {
            .spinner {
              width: 64px;
              height: 64px;
              font-size: 18px;
            }
          }
        `}
      </style>

      <div
        className="spinner-container"
        role="status"
        aria-live="polite"
        aria-label="Carregando conteúdo"
      >
        <div className="spinner">
          <span className="spinner-text">M&D</span>
        </div>
      </div>
    </>
  );
}
