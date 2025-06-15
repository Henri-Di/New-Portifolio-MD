import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>();
  const { errors, isSubmitting } = formState;

  const auth = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data: LoginFormInputs) {
    try {
      // Simulando chamada API login
      // Você deve substituir pela chamada real ao backend
      const response = await fakeApiLogin(data.email, data.password);

      // Após sucesso, armazena token e redireciona para dashboard admin
      auth.login(response.token);
      navigate("/admin/dashboard");
    } catch (error: any) {
      alert(error.message || "Erro ao tentar logar");
    }
  }

  // Simulação de API que retorna JWT com role
  async function fakeApiLogin(email: string, password: string) {
    return new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        if (email === "admin@site.com" && password === "123456") {
          // token JWT codificado (payload decodificado abaixo)
          // payload: { "role": "ROLE_ADMIN", "exp": <timestamp futuro> }
          resolve({
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
              btoa(
                JSON.stringify({
                  role: "ROLE_ADMIN",
                  exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hora
                })
              ) +
              ".signatureFake",
          });
        } else {
          reject(new Error("Credenciais inválidas"));
        }
      }, 1000);
    });
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Login Admin</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="admin@site.com"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-semibold">
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="123456"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            {...register("password", {
              required: "Senha obrigatória",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
