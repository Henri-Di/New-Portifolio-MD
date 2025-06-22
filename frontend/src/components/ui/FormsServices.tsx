import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { estadosECidades } from "../../utils/estados-cidades";
import {
  User,
  Mail,
  IdCard,
  Map,
  MapPin,
  Briefcase,
  Phone,
  FileText,
} from "lucide-react";
import { useSubmitForm } from "../../hooks/useSubmitForm";

type FormData = {
  nome: string;
  cpfCnpj: string;
  estado: string;
  cidade: string;
  email: string;
  telefone: string;
  sobre: string;
  ramoAtividade: string;
};

const ramosAtividade = [
  "Tecnologia da Informação",
  "Comércio Varejista",
  "Indústria",
  "Educação",
  "Saúde",
  "Agronegócio",
  "Serviços Financeiros",
  "Construção Civil",
  "Turismo e Hotelaria",
  "Marketing e Publicidade",
  "Transporte e Logística",
  "Consultoria",
  "Alimentação",
  "Energia",
];

export default function FormService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
  } = useForm<FormData>();

  const { submit, loading, serverError } = useSubmitForm<FormData>({
    url: "/api/services",
    setError,
  });

  const estadoSelecionado = watch("estado");
  const cidades = estadosECidades[estadoSelecionado] || [];

  const onSubmit = async (data: FormData) => {
    const result = await submit(data);
    if (result) {
      reset();
      console.log("Dados enviados com sucesso:", result);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
      >
        <h4 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Solicitar Orçamento
        </h4>

        {serverError && (
          <p className="text-red-600 font-semibold text-sm">{serverError}</p>
        )}

        {/* Nome */}
        <div className="space-y-1">
          <label htmlFor="nome" className="label">Nome completo</label>
          <div className="relative">
            <User className="input-icon" />
            <input
              id="nome"
              type="text"
              className="input"
              {...register("nome", { required: "Campo obrigatório" })}
              disabled={loading}
            />
          </div>
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        {/* E-mail */}
        <div className="space-y-1">
          <label htmlFor="email" className="label">E-mail</label>
          <div className="relative">
            <Mail className="input-icon" />
            <input
              id="email"
              type="email"
              className="input"
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de e-mail inválido",
                },
              })}
              disabled={loading}
            />
          </div>
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* CPF/CNPJ */}
        <div className="space-y-1">
          <label htmlFor="cpfCnpj" className="label">CPF / CNPJ</label>
          <div className="relative">
            <IdCard className="input-icon" />
            <InputMask
              id="cpfCnpj"
              className="input"
              mask={
                watch("cpfCnpj")?.replace(/\D/g, "").length > 11
                  ? "99.999.999/9999-99"
                  : "999.999.999-99"
              }
              {...register("cpfCnpj", {
                required: "Campo obrigatório",
                validate: (value) => {
                  const digits = value.replace(/\D/g, "");
                  if (digits.length !== 11 && digits.length !== 14) {
                    return "CPF ou CNPJ inválido";
                  }
                  return true;
                },
              })}
              disabled={loading}
            />
          </div>
          {errors.cpfCnpj && <p className="error-message">{errors.cpfCnpj.message}</p>}
        </div>

        {/* Estado */}
        <div className="space-y-1">
          <label htmlFor="estado" className="label">Estado</label>
          <div className="relative">
            <Map className="input-icon" />
            <select
              id="estado"
              className="input"
              {...register("estado", { required: "Campo obrigatório" })}
              disabled={loading}
            >
              <option value="">Selecione o estado</option>
              {Object.keys(estadosECidades).map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </div>
          {errors.estado && <p className="error-message">{errors.estado.message}</p>}
        </div>

        {/* Cidade */}
        <div className="space-y-1">
          <label htmlFor="cidade" className="label">Cidade</label>
          <div className="relative">
            <MapPin className="input-icon" />
            <select
              id="cidade"
              className="input"
              {...register("cidade", { required: "Campo obrigatório" })}
              disabled={loading}
            >
              <option value="">Selecione a cidade</option>
              {cidades.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>
          {errors.cidade && <p className="error-message">{errors.cidade.message}</p>}
        </div>

        {/* Ramo de Atividade */}
        <div className="space-y-1">
          <label htmlFor="ramoAtividade" className="label">Ramo de Atividade</label>
          <div className="relative">
            <Briefcase className="input-icon" />
            <select
              id="ramoAtividade"
              className="input"
              {...register("ramoAtividade", {
                required: "Selecione o ramo de atividade",
              })}
              defaultValue=""
              disabled={loading}
            >
              <option value="" disabled>
                -- Selecione o ramo --
              </option>
              {ramosAtividade.map((ramo) => (
                <option key={ramo} value={ramo}>
                  {ramo}
                </option>
              ))}
            </select>
          </div>
          {errors.ramoAtividade && (
            <p className="error-message">{errors.ramoAtividade.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div className="space-y-1">
          <label htmlFor="telefone" className="label">Telefone</label>
          <div className="relative">
            <Phone className="input-icon" />
            <InputMask
              id="telefone"
              className="input"
              mask="(99) 99999-9999"
              {...register("telefone", { required: "Campo obrigatório" })}
              disabled={loading}
            />
          </div>
          {errors.telefone && <p className="error-message">{errors.telefone.message}</p>}
        </div>

        {/* Sobre o projeto */}
        <div className="space-y-1">
          <label htmlFor="sobre" className="label">Sobre o projeto</label>
          <div className="relative">
            <FileText className="input-icon top-3" />
            <textarea
              id="sobre"
              className="input resize-none pl-10 pt-2"
              rows={3}
              {...register("sobre", { required: "Campo obrigatório" })}
              disabled={loading}
            />
          </div>
          {errors.sobre && <p className="error-message">{errors.sobre.message}</p>}
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors duration-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
