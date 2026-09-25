export const CLINIC_WHATSAPP = "5216624205643";

/**
 * Generador de URLs estructuradas hacia WhatsApp oficial de NovaSmile
 */
export function createWhatsAppUrl({ phone = CLINIC_WHATSAPP, type = "general", data = {} }) {
  let message = "";

  switch (type) {
    case "triage":
      message = 
`Hola NovaSmile, completé mi valoración en línea:
• Nombre: ${data.name || "Paciente"}
• Interés principal: ${data.treatment || "General"}
• Condición actual: ${data.condition || "Valoración preventiva"}
• Urgencia: ${data.urgency || "Por coordinar"}
Me gustaría recibir mi cotización preliminar y opciones de cita.`;
      break;

    case "booking":
      message = 
`Hola NovaSmile, deseo confirmar mi solicitud de cita:
• Paciente: ${data.name || "Paciente"}
• Servicio: ${data.service || "Valoración general"}
• Fecha solicitada: ${data.date || "Lo antes posible"}
• Horario sugerido: ${data.time || "Por definir"}
Quedo atento a la disponibilidad final para agendar.`;
      break;

    case "urgent":
      message = 
`[URGENCIA DENTAL] Hola NovaSmile, presento una molestia activa y necesito una cita prioritaria. Mi nombre es ${data.name || "Paciente"} y el síntoma principal es ${data.symptom || "Dolor agudo / Molestia activa"}.`;
      break;

    case "service_query":
      message = 
`Hola NovaSmile, me interesa recibir más información sobre el servicio de *${data.serviceTitle || "Odontología"}*. ¿Podrían orientarme sobre costos y fechas de valoración?`;
      break;

    case "general":
    default:
      message = "Hola NovaSmile, estoy navegando en su sitio web y quisiera más información sobre los tratamientos disponibles.";
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
