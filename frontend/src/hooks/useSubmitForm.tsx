import { useState } from "react";
import type { UseFormSetError, Path, FieldValues } from "react-hook-form";

interface UseSubmitFormProps<T extends FieldValues> {
  url: string;
  setError: UseFormSetError<T>;
}

export function useSubmitForm<T extends FieldValues>({
  url,
  setError,
}: UseSubmitFormProps<T>) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);

  async function submit(data: T): Promise<any | null> {
    setLoading(true);
    setServerError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (!response.ok) {
        // Trata erros do backend conforme estrutura esperada
        if (json.violations && Array.isArray(json.violations)) {
          json.violations.forEach((violation: any) => {
            setError(violation.propertyPath as Path<T>, {
              type: "server",
              message: violation.message,
            });
          });
        } else if (json.errors && typeof json.errors === "object") {
          for (const field in json.errors) {
            if (Object.prototype.hasOwnProperty.call(json.errors, field)) {
              setError(field as Path<T>, {
                type: "server",
                message: json.errors[field],
              });
            }
          }
        } else if (json.message && typeof json.message === "string") {
          setServerError(json.message);
        } else {
          setServerError("Erro desconhecido ao enviar formulário.");
        }
        setLoading(false);
        return null;
      }

      setResponseData(json);
      setLoading(false);
      return json;
    } catch (error) {
      setServerError("Erro de conexão. Tente novamente mais tarde.");
      setLoading(false);
      return null;
    }
  }

  return { submit, loading, serverError, responseData };
}
