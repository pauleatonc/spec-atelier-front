import { TYPES } from '../../components/Plan/constants';

export const DATA_PLANS = [
    {
        id: 'fixed_plan',
        type: TYPES.PROVIDER,
        title: 'Plan Fijo',
        subtitle: ' Por un valor fijo, permite que descarguen tus especificaciones de forma ilimitada.',
        info: [
            { id: 1, text: 'Número ilimitado de descargas de especificaciones técnicas.' },
            { id: 2, text: 'Estadísticas de uso de productos.' },
            { id: 3, text: 'Estadísticas de proyectos.' },
        ]
    },
    {
        id: 'variable_plan',
        type: TYPES.PROVIDER,
        title: 'Plan variable 100%',
        subtitle: 'Paga solamente cuando se descargue la especificación de tu solución.',
        footer: '* Se cobra cada vez que se descargue una especicación, indistintamente si el proyecto ya había sido descargado previamente.',
        info: [
            { id: 1, text: 'Número ilimitado de productos en la plataforma.' },
            { id: 2, text: 'Estadísticas de uso de productos.' },
            { id: 3, text: 'Estadísticas de proyectos.' },
        ]
    },
]