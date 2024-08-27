import { UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  emailsToInvite: string[];
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  emailsToInvite,
  openGuestsModal,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
      <button
        className="flex items-center justify-start gap-2 flex-1"
        onClick={openGuestsModal}
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length ? (
          <span className="text-zinc-100 text-lg">
            {`${emailsToInvite.length} pessoa(s) convidada(s)`}
          </span>
        ) : (
          <span className="text-zinc-400 text-lg">Quem estará na viagem?</span>
        )}
      </button>

      <button
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        onClick={openConfirmTripModal}
      >
        Confirmar viagem
      </button>
    </div>
  );
}
