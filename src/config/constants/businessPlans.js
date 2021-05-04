import { TYPES } from '../../components/Plan/constants';
import INFORMATION_HEADER_IMAGE from '../../assets/images/businessPlan/img_business_plan_banner.png';
import INFORMATION_OUR_COMUNITY_IMAGE from '../../assets/images/businessPlan/img_our_community.png';

export const BUSINESS_PLANS = [
    {
        id: 'fixed_plan',
        type: TYPES.PROVIDER,
        title: 'Plan Fijo',
        subtitle:
            ' Por un valor fijo, permite que descarguen tus especificaciones de forma ilimitada.',
        info: [
            {
                id: 1,
                text: 'Número ilimitado de descargas de especificaciones técnicas.',
            },
            { id: 2, text: 'Estadísticas de uso de productos.' },
            { id: 3, text: 'Estadísticas de proyectos.' },
        ],
    },
    {
        id: 'variable_plan',
        type: TYPES.PROVIDER,
        title: 'Plan variable 100%',
        subtitle:
            'Paga solamente cuando se descargue la especificación de tu solución.',
        footer:
            '* Se cobra cada vez que se descargue una especicación, indistintamente si el proyecto ya había sido descargado previamente.',
        info: [
            { id: 1, text: 'Número ilimitado de productos en la plataforma.' },
            { id: 2, text: 'Estadísticas de uso de productos.' },
            { id: 3, text: 'Estadísticas de proyectos.' },
        ],
    },
];

export const BUSINESS_SECTIONS_INFORMATION = {
    INFORMATION_HEADER: {
        image: INFORMATION_HEADER_IMAGE,
        title:
            'Planes flexibles, para empresas que buscan impulsar la gestión comercial de sus soluciones constructivas.',
    },
    INFORMATION_OUR_COMUNITY: {
        image: INFORMATION_OUR_COMUNITY_IMAGE,
        title:
            'Nuestra comunidad de arquitectos y profesionales de la construcción',
        subtitle:
            'se encuentra constantemente desarrollando proyectos y especificando las soluciones para la construcción de nuestra comunidad de proveedores.',
    },
};

export const FAQ_LIST = [
    {
        id: 1,
        title: '¿A quién van dirigidos los planes?',
        subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
    {
        id: 2, title: '¿Cómo calculan los planes?', subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
    {
        id: 3,
        title:
            '¿A quién van dirigidos en el caso del plan exible ¿Por qué habría de querer pagar cada vez que se descargue la especicación del mismo proyecto? los planes?',
        subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
    {
        id: 4, title: '¿Cada cuando cobran?', subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
    {
        id: 5,
        title: '¿Tengo acceso a estadisticas de desempeño de mis productos?',
        subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
    {
        id: 6,
        title: 'En caso de consultas ¿tengo soporte técnico?',
        subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
    {
        id: 7,
        title: '¿Tengo oportunidad de sugerir avances o mejoras a la plataforma?',
        subtitle:
            'A empresas proveedoras de materiales para la construcción, que ven en las especicaciones técnicas dearquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
    },
];
