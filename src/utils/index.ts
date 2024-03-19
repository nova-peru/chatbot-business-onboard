type MessageData = {
  businessName: string;
  businessSector: string;
};

export const generateWspMessage = ({
  businessName,
  businessSector,
}: MessageData) => {
  return `Hola Novaworks, quisiera más información sobre Chatbots para ${
    businessName ? `mi negocio ${businessName}` : "mi negocio"
  }. ${businessSector ? `Nos dedicamos a: ${businessSector}` : ""}`;
};

export const openWhatsappTab = (message: string) => {
  window.open(`https://wa.me/+51993157087?text=${message}`, "_blank");
};
