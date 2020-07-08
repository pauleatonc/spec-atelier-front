import {
  ADD_SPEC_BLOCK_SUCCESS,
  ADD_SPEC_BLOCK_IMAGE_SUCCESS,
  ADD_SPEC_BLOCK_TEXT_SUCCESS,
  REMOVE_SPEC_BLOCK_SUCCESS,
} from './SpecDocument.actions';

const specDocumentState = {
  blocks: [
    {
      element: {
        title: 'Terminaciones',
      },
      id: '0000',
      type: 'section',
    },
    {
      element: {
        title: 'Puertas',
      },
      id: '0001',
      type: 'item',
    },
    {
      element: {
        image: null,
        images: [
          {
            id: 0,
            url: 'https://vignette.wikia.nocookie.net/doblaje/images/7/75/Ren_y_Stimpy.jpg/revision/latest?cb=20171125053737&path-prefix=es',
          },
          {
            id: 1,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHhwzwElYtAUUhoZY8daY4WpBjthLXpf2WDA&usqp=CAU',
          },
          {
            id: 2,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_103.png',
          },
          {
            id: 3,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_104.png',
          },
          {
            id: 4,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_105.png',
          },
          {
            id: 5,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 6,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 7,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 8,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 9,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 10,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 11,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 12,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          },
          {
            id: 13,
            url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
          }
        ],
        title: 'Producto 1',
      },
      id: '0002',
      type: 'product',
    },
    {
      element: {
        title: 'Producto 2',
      },
      id: '0003',
      type: 'product',
    },
    {
      element: {
        title: 'Producto 3',
      },
      id: '0004',
      type: 'product',
    },
    {
      element: {
        title: 'Producto 4',
      },
      id: '0005',
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
    case ADD_SPEC_BLOCK_TEXT_SUCCESS: {
      const updatedBlocks = state.blocks.map(block => {
        if (block.id === payload.blockID) {
          return {
            ...block,
            text: { id: `${block.id}-text`, text: payload.text },
          };
        }

        return block;
      });

      return { ...state, blocks: updatedBlocks };
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
