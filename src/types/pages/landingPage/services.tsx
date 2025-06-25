import { Car, Clock, CreditCard, MapPin, Phone, Shield } from "lucide-react";

export const services = [
  {
    icon: Shield,
    title: "Seguro Completo",
    description: "Cobertura total para tu tranquilidad durante el viaje",
    features: ["Seguro contra daños", "Protección de robo", "Asistencia 24/7"],
  },
  {
    icon: Clock,
    title: "Servicio 24/7",
    description: "Disponible las 24 horas, los 7 días de la semana",
    features: ["Recogida nocturna", "Soporte telefónico", "Emergencias"],
  },
  {
    icon: MapPin,
    title: "Múltiples Ubicaciones",
    description: "Recoge y devuelve en cualquiera de nuestras sucursales",
    features: ["Aeropuertos", "Centros urbanos", "Hoteles principales"],
  },
  {
    icon: Phone,
    title: "Soporte Premium",
    description: "Atención personalizada de nuestros expertos",
    features: ["Chat en vivo", "Soporte telefónico", "Asistente personal"],
  },
  {
    icon: Car,
    title: "Flota Premium",
    description: "Vehículos de última generación y perfectamente mantenidos",
    features: [
      "Modelos recientes",
      "Mantenimiento regular",
      "Limpieza profunda",
    ],
  },
  {
    icon: CreditCard,
    title: "Pagos Flexibles",
    description: "Múltiples opciones de pago para tu comodidad",
    features: ["Tarjetas de crédito", "Paypal", "Transferencias"],
  },
];
