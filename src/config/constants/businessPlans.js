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
			'A empresas proveedoras de materiales para la construcción, que ven en las especificaciones técnicas de arquitectura una posibilidad de crear espacio en el mercado para sus soluciones constructivas. Ya sea por su caracter innovador, calidad técnica u otros elementos diferenciadores.',
	},
	{
		id: 2,
		title: '¿Cómo calculan los planes?',
		subtitle:
			'El plan fijo cobra por productos subidos a la plataforma, indistintamente cuanto se especifique ese producto. Y el cobro va en escala según el numero de productos, donde cada producto en la plataforma genera un cobro mensual en tres rangos de valores: Los 10 primeros productos tienen un valor, del 11 al 50 tienen un valor menor, y de 51 o más tienen el valor más bajo.',
		body:
			'El plan 100% no cobra por producto sino por descarga de especificacion técnica. Puedes tener la cantidad de productos que quieras en la plataforma, y cada vez que se descargue una especificación técnica se generará un cobro por esa descarga. De modo que solo pagas cuando el producto está siendo usado. Hay que considerar que un arquitecto puede descargar más de una vez la especificación, y en ese caso se cobrará más de una vez el mismo proyecto.',
	},
	{
		id: 3,
		title:
			'En el caso del plan flexible ¿Por qué habría de querer pagar cada vez que se descargue la especificación del mismo proyecto?',
		subtitle:
			'El cobro por cada vez que se descarga un producto es muy bajo, de esta forma, si tu producto se descarga muchas veces, el cobro siguirá siendo bajo. Es ideal para empresas con pocos productos o de sectores muy específicos del mercado. Pero claro, si eres un gran proveedor, con multiples productos y muchas descargas, posiblemente te convenga más el plan fijo.',
	},
	{
		id: 4,
		title: '¿Cada cuando cobran?',
		subtitle: 'El cobro se realiza al final de cada més.',
	},
	{
		id: 5,
		title: '¿Tengo acceso a estadisticas de desempeño de mis productos?',
		subtitle:
			'Cómo proveedor tienes acceso a tu panel de estadisticas, donde obtendrás información relevante del uso de tus soluciones y productos, proyectos y descargas. Toda la información necesaria para que puedas hacer seguimiento y capitalizar las especificaciones en futuras ventas.',
	},
	{
		id: 6,
		title: 'En caso de consultas ¿tengo soporte técnico?',
		subtitle:
			'Si, como equipo queremos ayudarte a que saques el mejor rendimiento a la plataforma, y entregamos canales de comunicación directos en caso de necesitar soporte o asesorías especiales.',
	},
	{
		id: 7,
		title: '¿Tengo oportunidad de sugerir avances o mejoras a la plataforma?',
		subtitle:
			'SpecAtelier estamos constantemente buscando la manera de mejorar y complementar nuestro serivicio, y tu opinion como proveedor es de suma importancia. Nos queda mucho aún por hacer y tenemos muchas ideas, y queremos escuchar las tuyas.',
	},
];
