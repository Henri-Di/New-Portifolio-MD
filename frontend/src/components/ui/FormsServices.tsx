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
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-10 overflow-x-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-gray-800 p-4 sm:p-6 rounded-md shadow-lg"
      >
        <h4 className="text-2xl font-semibold text-white mb-6 text-center">
          Solicitar Orçamento
        </h4>

        {serverError && (
          <p className="text-red-500 mb-4 font-semibold text-center">
            {serverError}
          </p>
        )}

        {[
          {
            id: "nome",
            label: "Nome completo",
            icon: <User className="inline mr-2" />,
            type: "text",
            validation: { required: "Campo obrigatório" },
          },
          {
            id: "email",
            label: "E-mail",
            icon: <Mail className="inline mr-2" />,
            type: "email",
            validation: {
              required: "Campo obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de e-mail inválido",
              },
            },
          },
        ].map(({ id, label, icon, type, validation }) => (
          <div key={id} className="mb-4">
            <label
              htmlFor={id}
              className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
            >
              {icon}
              {label}
            </label>
            <input
              id={id}
              type={type}
              {...register(id as keyof FormData, validation)}
              disabled={loading}
              className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors[id as keyof FormData] ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors[id as keyof FormData] && (
              <p className="text-red-500 mt-1 text-sm">
                {errors[id as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label
            htmlFor="cpfCnpj"
            className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
          >
            <IdCard className="inline mr-2" />
            CPF / CNPJ
          </label>
          <InputMask
            id="cpfCnpj"
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
            className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.cpfCnpj ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.cpfCnpj && (
            <p className="text-red-500 mt-1 text-sm">{errors.cpfCnpj.message}</p>
          )}
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="estado"
              className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
            >
              <Map className="inline mr-2" />
              Estado
            </label>
            <select
              id="estado"
              {...register("estado", { required: "Campo obrigatório" })}
              disabled={loading}
              className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.estado ? "border-red-500" : "border-gray-600"
              }`}
            >
              <option value="">Selecione o estado</option>
              {Object.keys(estadosECidades).map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
            {errors.estado && (
              <p className="text-red-500 mt-1 text-sm">{errors.estado.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="cidade"
              className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
            >
              <MapPin className="inline mr-2" />
              Cidade
            </label>
            <select
              id="cidade"
              {...register("cidade", { required: "Campo obrigatório" })}
              disabled={loading}
              className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.cidade ? "border-red-500" : "border-gray-600"
              }`}
            >
              <option value="">Selecione a cidade</option>
              {cidades.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
            {errors.cidade && (
              <p className="text-red-500 mt-1 text-sm">{errors.cidade.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="ramoAtividade"
            className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
          >
            <Briefcase className="inline mr-2" />
            Ramo de Atividade
          </label>
          <select
            id="ramoAtividade"
            {...register("ramoAtividade", {
              required: "Selecione o ramo de atividade",
            })}
            defaultValue=""
            disabled={loading}
            className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.ramoAtividade ? "border-red-500" : "border-gray-600"
            }`}
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
          {errors.ramoAtividade && (
            <p className="text-red-500 mt-1 text-sm">{errors.ramoAtividade.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="telefone"
            className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
          >
            <Phone className="inline mr-2" />
            Telefone
          </label>
          <InputMask
            id="telefone"
            mask="(99) 99999-9999"
            {...register("telefone", { required: "Campo obrigatório" })}
            disabled={loading}
            className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.telefone ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.telefone && (
            <p className="text-red-500 mt-1 text-sm">{errors.telefone.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="sobre"
            className="text-gray-300 mb-1 block flex items-center font-medium text-sm md:text-base"
          >
            <FileText className="inline mr-2" />
            Sobre o projeto
          </label>
          <textarea
            id="sobre"
            {...register("sobre", { required: "Campo obrigatório" })}
            rows={3}
            disabled={loading}
            className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm md:text-base text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.sobre ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.sobre && (
            <p className="text-red-500 mt-1 text-sm">{errors.sobre.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition text-sm md:text-base"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
