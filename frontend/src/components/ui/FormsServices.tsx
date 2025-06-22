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

  // Usando o hook personalizado para submit
  const { submit, loading, serverError } = useSubmitForm<FormData>({
    url: "/api/services",
    setError,
  });

  const estadoSelecionado = watch("estado");
  const cidades = estadosECidades[estadoSelecionado] || [];

  const onSubmit = async (data: FormData) => {
    const result = await submit(data);
    if (result) {
      // Sucesso, limpa formulário
      reset();
      // Pode adicionar mensagem de sucesso, log, etc
      console.log("Dados enviados com sucesso:", result);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h4 className="title-form-services-page">Solicitar Orçamento</h4>

        {serverError && (
          <p className="text-red-500 mb-4 font-semibold">{serverError}</p>
        )}

        {/* Nome completo */}
        <div>
          <label htmlFor="nome">
            <User />
            Nome completo
          </label>
          <input
            id="nome"
            type="text"
            {...register("nome", { required: "Campo obrigatório" })}
            disabled={loading}
          />
          {errors.nome && (
            <p className="text-red-500">{errors.nome.message}</p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email">
            <Mail />
            E-mail
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de e-mail inválido",
              },
            })}
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* CPF/CNPJ */}
        <div>
          <label htmlFor="cpfCnpj">
            <IdCard />
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
          />
          {errors.cpfCnpj && (
            <p className="text-red-500">{errors.cpfCnpj.message}</p>
          )}
        </div>

        {/* Estado */}
        <div>
          <label htmlFor="estado">
            <Map />
            Estado
          </label>
          <select
            id="estado"
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
          {errors.estado && (
            <p className="text-red-500">{errors.estado.message}</p>
          )}
        </div>

        {/* Cidade */}
        <div>
          <label htmlFor="cidade">
            <MapPin />
            Cidade
          </label>
          <select
            id="cidade"
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
          {errors.cidade && (
            <p className="text-red-500">{errors.cidade.message}</p>
          )}
        </div>

        {/* Ramo de Atividade */}
        <div>
          <label htmlFor="ramoAtividade">
            <Briefcase />
            Ramo de Atividade
          </label>
          <select
            id="ramoAtividade"
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
          {errors.ramoAtividade && (
            <p className="text-red-500">{errors.ramoAtividade.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone">
            <Phone />
            Telefone
          </label>
          <InputMask
            id="telefone"
            mask="(99) 99999-9999"
            {...register("telefone", { required: "Campo obrigatório" })}
            disabled={loading}
          />
          {errors.telefone && (
            <p className="text-red-500">{errors.telefone.message}</p>
          )}
        </div>

        {/* Sobre o projeto */}
        <div>
          <label htmlFor="sobre">
            <FileText />
            Sobre o projeto
          </label>
          <textarea
            id="sobre"
            {...register("sobre", { required: "Campo obrigatório" })}
            rows={3}
            disabled={loading}
          />
          {errors.sobre && (
            <p className="text-red-500">{errors.sobre.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn-submit-services-page"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
