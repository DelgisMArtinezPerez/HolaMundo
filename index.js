<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hola Mundo - GitHub Pages</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Segoe UI', sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 50px 60px;
      text-align: center;
      max-width: 500px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }

    .emoji { font-size: 60px; margin-bottom: 20px; }

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 12px;
      background: linear-gradient(to right, #a78bfa, #60a5fa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .badge {
      display: inline-block;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.85rem;
      color: #a78bfa;
    }

    footer {
      margin-top: 40px;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.3);
    }
  </style>
</head>
<body>

  <div class="card">
    <div class="emoji">🌍</div>
    <h1>¡Hola Mundo!</h1>
    <p>Esta página fue desplegada automáticamente con <strong>GitHub Pages</strong> cada vez que se hace push al repositorio.</p>
    <span class="badge">🚀 Deploy automático activo</span>
  </div>

  <footer>Desplegado con GitHub Pages · CI/CD con GitHub Actions</footer>

</body>
</html>