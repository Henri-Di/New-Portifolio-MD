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

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const estadoSelecionado = watch("estado");
  const cidades = estadosECidades[estadoSelecionado] || [];

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h4 className="title-form-services-page">Solicitar Orçamento</h4>

        {/* Nome completo */}
        <div>
          <label>
            <User />
            Nome completo
          </label>
          <input
            type="text"
            {...register("nome", { required: "Campo obrigatório" })}
          />
          {errors.nome && (
            <p className="text-red-500">{errors.nome.message}</p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label>
            <Mail />
            E-mail
          </label>
          <input
            type="email"
            {...register("email", { required: "Campo obrigatório" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* CPF/CNPJ */}
        <div>
          <label>
            <IdCard />
            CPF / CNPJ
          </label>
          <InputMask
            mask={
              watch("cpfCnpj")?.replace(/\D/g, "").length > 11
                ? "99.999.999/9999-99"
                : "999.999.999-99"
            }
            {...register("cpfCnpj", { required: "Campo obrigatório" })}
          />
          {errors.cpfCnpj && (
            <p className="text-red-500">{errors.cpfCnpj.message}</p>
          )}
        </div>

        {/* Estado */}
        <div>
          <label>
            <Map />
            Estado
          </label>
          <select {...register("estado", { required: "Campo obrigatório" })}>
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
          <label>
            <MapPin />
            Cidade
          </label>
          <select {...register("cidade", { required: "Campo obrigatório" })}>
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
          <label>
            <Briefcase />
            Ramo de Atividade
          </label>
          <select
            {...register("ramoAtividade", {
              required: "Selecione o ramo de atividade",
            })}
            defaultValue=""
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
          <label>
            <Phone />
            Telefone
          </label>
          <InputMask
            mask="(99) 99999-9999"
            {...register("telefone", { required: "Campo obrigatório" })}
          />
          {errors.telefone && (
            <p className="text-red-500">{errors.telefone.message}</p>
          )}
        </div>

        {/* Sobre o projeto */}
        <div>
          <label>
            <FileText />
            Sobre o projeto
          </label>
          <textarea
            {...register("sobre", { required: "Campo obrigatório" })}
            rows={3}
          />
          {errors.sobre && (
            <p className="text-red-500">{errors.sobre.message}</p>
          )}
        </div>

        <button type="submit" className="btn-submit-services-page">
          Enviar
        </button>
      </form>
    </div>
  );
}
