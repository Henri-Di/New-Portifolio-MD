// src/components/ui/AlertMessage.tsx
import {
  AlertTriangle,
  Info,
  XCircle,
  CheckCircle,
} from 'lucide-react';

type AlertType = 'info' | 'warning' | 'error' | 'success';

interface AlertMessageProps {
  type?: AlertType;
  message: string;
}

export default function AlertMessage({ type = 'info', message }: AlertMessageProps) {
  const icons = {
    info: <Info size={18} />,
    warning: <AlertTriangle size={18} />,
    error: <XCircle size={18} />,
    success: <CheckCircle size={18} />,
  };

  const colors = {
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <div
      className={`mt-4 px-4 py-2 rounded-md shadow-inner inline-flex items-center gap-2 font-medium text-sm text-alert-ui ${colors[type]}`}
      role="alert"
    >
      {icons[type]}
      {message}
    </div>
  );
}
