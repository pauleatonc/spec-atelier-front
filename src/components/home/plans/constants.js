export const TYPES = {
    ARCHITECT: 'architect',
    PROVIDER: 'provider'
}

export const DATA_PLANS = [
    {
        id: 1,
        type: TYPES.ARCHITECT,
        title: 'Gratis',
        subtitle: 'Sin ningún pago adicional, puedes tener acceso a la administración de tus proyectos y ahorrar mucho tiempo en la creación de tus especificaciones.',
        info: [
            { id: 1, text: 'Crea y administra especificaciones.' },
            { id: 2, text: 'Elige productos de nuestros proveedores de manera ilimitada para tus proyectos.' },
            { id: 3, text: 'Descarga tus especificaciones.' },
        ]
    },
    {
        id: 2,
        type: TYPES.PROVIDER,
        title: 'Plan Fijo',
        subtitle: ' Por un valor fijo, permite que descarguen tus especificaciones de forma ilimitada.',
        info: [
            { id: 1, text: 'Número ilimitado de descargas de especicaciones técnicas.' },
            { id: 2, text: 'Estadísticas de uso de productos.' },
            { id: 3, text: 'Estadísticas de proyectos.' },
        ]
    },
    {
        id: 3,
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