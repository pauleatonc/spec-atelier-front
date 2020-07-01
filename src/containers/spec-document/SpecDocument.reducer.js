import { ADD_SPEC_BLOCK_SUCCESS, REMOVE_SPEC_BLOCK_SUCCESS } from './SpecDocument.actions';

const specDocumentState = {
  blocks: [
    {
      id: '1',
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
