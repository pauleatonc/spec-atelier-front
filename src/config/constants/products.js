export const DEFAULT_FILTER_KEYS = [
  'section',
  'item',
  'project_type',
  'most_used',
  'room_type',
  'brand',
];

export const SPEC_FILTER_KEYS = [
  'my_products',
  'brand',
  'project_type',
  'specification',
  'room_type',
];

export const FILTER_OPTIONS = {
  spec: SPEC_FILTER_KEYS,
};

export const FILTER_VALUE = {
  section: { valueKey: 'sections', text: 'Sección' },
  item: { valueKey: 'items', text: 'Partidas' },
  project_type: { valueKey: 'project_types', text: 'Tipo de proyecto' },
  most_used: { valueKey: 'most_used', text: 'Más usados' },
  room_type: { valueKey: 'room_types', text: 'Recintos' },
  brand: { valueKey: 'brands', text: 'Marcas' },
  specification: { valueKey: 'specifications', text: 'Mis especificaciones' },
  my_products: { valueKey: 'my_products', text: 'Mis productos' },
};
