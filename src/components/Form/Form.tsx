import { PlayIcon } from "..";
import { useAppStore } from "../../store";
import { ContactUsBtn } from "../ContactUsBtn/ContactUsBtn";

type FormProps = {
  onPreview: () => void;
};

export function Form({ onPreview }: FormProps) {
  const {
    hasEmojis,
    hasQuickAnswers,
    isLoading,
    updateBusinessName,
    updateBusinessSector,
    updateHasEmojis,
    updateHasQuickAnswers,
  } = useAppStore();

  return (
    <div className="flex flex-1 justify-end">
      <div className="flex flex-col space-y-4 w-80">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              ¿Cual es el nombre de su negocio?
            </span>
          </div>
          <input
            type="text"
            placeholder="Ej. Pollería Rockys, Beuaty & Care"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => updateBusinessName(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">¿Cual es el rubro de su negocio?</span>
          </div>
          <input
            type="text"
            placeholder="Ej. Restaurante, Consultorio médico..."
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => updateBusinessSector(e.target.value)}
          />
        </label>

        <div className="form-control w-full max-w-xs">
          <label className="label cursor-pointer">
            <span className="label-text">Emojis</span>
            <input
              onChange={() => updateHasEmojis(!hasEmojis)}
              type="checkbox"
              className="toggle"
              checked={hasEmojis}
            />
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label cursor-pointer">
            <span className="label-text">Respuestas rápidas</span>
            <input
              onChange={() => updateHasQuickAnswers(!hasQuickAnswers)}
              type="checkbox"
              className="toggle"
              checked={hasQuickAnswers}
            />
          </label>
        </div>

        <div className="flex flex-col space-y-2 pt-10">
          <button
            onClick={onPreview}
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            Previsualizar <PlayIcon width={18} height={18} />
          </button>

          <ContactUsBtn />

          <p className="text-sm text-slate-500">
            Te asesoramos en la creación de tu ChatBot con o sin Inteligencia
            Artificial para Whatsapp.
          </p>
        </div>
      </div>
    </div>
  );
}
