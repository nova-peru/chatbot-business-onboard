import { useCallback } from "react";

import { MessageCircleIcon } from "..";
import { generateWspMessage, openWhatsappTab } from "../../utils";
import { useAppStore } from "../../store";
import { Mixpanel } from "../../config";

export function ContactUsBtn() {
  const { businessName, businessSector } = useAppStore();

  const handleContactUs = useCallback(() => {
    Mixpanel?.track("Contact Us clicked", {
      businessName,
      businessSector,
    });

    const message = generateWspMessage({
      businessName,
      businessSector,
    });

    openWhatsappTab(message);
  }, [businessName, businessSector]);

  return (
    <button onClick={handleContactUs} className="btn btn-ghost w-full">
      Contáctanos <MessageCircleIcon width={18} height={18} />
    </button>
  );
}
