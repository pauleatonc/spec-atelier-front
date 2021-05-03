import { TYPES } from '../../components/Plan/constants';
import INFORMATION_HEADER_IMAGE from '../../assets/images/businessPlan/img_business_plan_banner.png'
import INFORMATION_OUR_COMUNITY_IMAGE from '../../assets/images/businessPlan/img_our_community.png'

export const BUSINESS_PLANS = [
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
];

export const BUSINESS_SECTIONS_INFORMATION = {
    INFORMATION_HEADER: {
        image: INFORMATION_HEADER_IMAGE,
        title: 'Planes flexibles, para empresas que buscan impulsar la gestión comercial de sus soluciones constructivas.'
    },
    INFORMATION_OUR_COMUNITY: {
        image: INFORMATION_OUR_COMUNITY_IMAGE,
        title: 'Nuestra comunidad de arquitectos y profesionales de la construcción',
        subtitle: 'se encuentra constantemente desarrollando proyectos y especificando las soluciones para la construcción de nuestra comunidad de proveedores.'
    }
};