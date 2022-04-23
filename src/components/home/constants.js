import { TYPES } from 'components/Plan/constants';
import { BUSINESS_PLANS } from 'config/constants/businessPlans';

export const DATA_PLANS = [
  {
    id: 'free_plan',
    type: TYPES.ARCHITECT,
    title: 'Gratis',
    subtitle:
      'Sin ningún pago adicional, puedes tener acceso a la administración de tus proyectos y ahorrar mucho tiempo en la creación de tus especificaciones.',
    info: [
      { id: 1, text: 'Crea y administra especificaciones.' },
      {
        id: 2,
        text:
          'Elige productos de nuestros proveedores de manera ilimitada para tus proyectos.',
      },
      { id: 3, text: 'Descarga tus especificaciones.' },
    ],
  },
  ...BUSINESS_PLANS,
];
