import { ADD_SPEC_BLOCK_SUCCESS, ADD_SPEC_BLOCK_IMAGE_SUCCESS, REMOVE_SPEC_BLOCK_SUCCESS } from './SpecDocument.actions';

const specDocumentState = {
  blocks: [
    {
      id: '0',
      title: 'Terminaciones',
      type: 'section',
    },
    {
      id: '2',
      title: 'Puertas',
      type: 'item',
    },
    {
      id: '3',
      images: [
        {
          urls: {
            thumb: 'https://vignette.wikia.nocookie.net/doblaje/images/7/75/Ren_y_Stimpy.jpg/revision/latest?cb=20171125053737&path-prefix=es',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_101.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_101.png'
          },
          order: 0
        },
        {
          urls: {
            thumb: 'https://vignette.wikia.nocookie.net/doblaje/images/7/75/Ren_y_Stimpy.jpg/revision/latest?cb=20171125053737&path-prefix=es',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_102.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_102.png'
          },
          order: 1
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_103.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_103.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_103.png'
          },
          order: 2
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_104.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_104.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_104.png'
          },
          order: 3
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_105.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_105.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_105.png'
          },
          order: 4
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        },
        {
          urls: {
            thumb: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
            small: 'https://storage.googleapis.com/spec-atelier/products/resized-small-SOLECO_HOSPITALARIO_106.png',
            medium: 'https://storage.googleapis.com/spec-atelier/products/resized-medium-SOLECO_HOSPITALARIO_106.png'
          },
          order: 5
        }
      ],
      title: 'Producto 1',
      type: 'product',
    },
    {
      id: '4',
      title: 'Producto 2',
      type: 'product',
    },
    {
      id: '5',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '6',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '7',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '8',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '9',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '10',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '11',
      title: 'Producto 3',
      type: 'product',
    },
    {
      id: '12',
      title: 'Producto 3',
      type: 'product',
    },
  ],
  loading: false,
};

/**
 * The spec document' reducer.
 */
const specDocumentReducer = (state = specDocumentState, { payload, type }) => {
  switch (type) {
    case ADD_SPEC_BLOCK_SUCCESS: {
      const updatedBlocks = state.blocks.concat(payload);

      return { ...state, blocks: updatedBlocks };
    }
    case ADD_SPEC_BLOCK_IMAGE_SUCCESS: {
      return { ...state, blocks: payload.blocks };
    }
    case REMOVE_SPEC_BLOCK_SUCCESS: {
      const updatedBlocks = state.blocks.filter(block => block.id !== payload.blockID);

      return { ...state, blocks: updatedBlocks };
    }
    default: {
      return state;
    }
  } 
};

export default specDocumentReducer;
