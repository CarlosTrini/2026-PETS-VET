import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  petType: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      // Web3Forms integration — replace ACCESS_KEY with actual key
      formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
      formData.append('subject', `Nueva consulta de ${data.name} — PetsVet`);
      formData.append('from_name', 'PetsVet Contacto');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white transition-all duration-200 outline-none
    ${hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
      : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary-light'
    }`;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-500" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-secondary mb-1">
            ¡Mensaje enviado!
          </h3>
          <p className="text-text-muted text-sm">
            Te contactaremos pronto. ¡Gracias por confiar en PetsVet! 🐾
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulario de contacto PetsVet"
      className="space-y-4"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-text mb-1.5">
            Tu nombre <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Ej. María García"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass(!!errors.name)}
            {...register('name', {
              required: 'Tu nombre es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' },
            })}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-text mb-1.5">
            Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="tu@correo.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass(!!errors.email)}
            {...register('email', {
              required: 'El correo es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo inválido',
              },
            })}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Pet Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-text mb-1.5">
            Teléfono
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="55 1234 5678"
            autoComplete="tel"
            className={inputClass(false)}
            {...register('phone')}
          />
        </div>

        <div>
          <label htmlFor="contact-pet" className="block text-sm font-semibold text-text mb-1.5">
            Tipo de mascota
          </label>
          <select
            id="contact-pet"
            aria-label="Selecciona el tipo de mascota"
            className={`${inputClass(false)} appearance-none`}
            {...register('petType')}
          >
            <option value="">Selecciona una opción</option>
            <option value="perro">🐶 Perro</option>
            <option value="gato">🐱 Gato</option>
            <option value="otro">🐾 Otra mascota</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-text mb-1.5">
          ¿En qué te podemos ayudar? <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Cuéntanos sobre tu mascota y lo que necesitas..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClass(!!errors.message)} resize-none`}
          {...register('message', {
            required: 'El mensaje es requerido',
            minLength: { value: 10, message: 'Mínimo 10 caracteres' },
          })}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div role="alert" className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-sm">
          <AlertCircle size={16} aria-hidden="true" />
          Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        id="contact-submit-btn"
        className="w-full flex items-center justify-center gap-2.5 bg-primary text-surface font-semibold py-3.5 px-6 rounded-xl hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label={status === 'sending' ? 'Enviando mensaje...' : 'Enviar mensaje'}
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        También puedes contactarnos directamente por{' '}
        <a
          href="https://wa.me/5255874236 91"
          target="_blank"
          rel="noopener noreferrer"
          className="text-whatsapp font-semibold hover:underline"
        >
          WhatsApp
        </a>
        . Te respondemos a la brevedad.
      </p>
    </form>
  );
}
