import {
  ADD_SPEC_BLOCK_SUCCESS,
  ADD_SPEC_BLOCK_IMAGE_SUCCESS,
  ADD_SPEC_BLOCK_TEXT_SUCCESS,
  GET_SPEC_BLOCKS_SUCCESS,
  REMOVE_SPEC_BLOCK_SUCCESS,
  UPDATE_SPEC_BLOCKS_SORT_SUCCESS,
} from './SpecDocument.actions';

const specDocumentState = {
  blocks: [],
  // blocks: [
  //   {
  //     element: {
  //       title: 'Terminaciones',
  //     },
  //     id: 'section-0001',
  //     type: 'Section',
  //   },
  //   {
  //     element: {
  //       title: 'Puertas',
  //     },
  //     id: 'item-0001',
  //     section: 'section-0001',
  //     type: 'Item',
  //   },
  //   {
  //     element: {
  //       image: null,
  //       images: [
  //         {
  //           id: 0,
  //           url: 'https://vignette.wikia.nocookie.net/doblaje/images/7/75/Ren_y_Stimpy.jpg/revision/latest?cb=20171125053737&path-prefix=es',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHhwzwElYtAUUhoZY8daY4WpBjthLXpf2WDA&usqp=CAU',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_103.png',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_104.png',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_105.png',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 7,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 8,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 9,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 10,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 11,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 12,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         },
  //         {
  //           id: 13,
  //           url: 'https://storage.googleapis.com/spec-atelier/products/resized-thumb-SOLECO_HOSPITALARIO_106.png',
  //         }
  //       ],
  //       title: 'Producto 1',
  //     },
  //     id: 'product-0001',
  //     item: 'item-0001',
  //     type: 'Product',
  //   },
  //   {
  //     element: {
  //       title: 'Producto 2',
  //     },
  //     id: 'product-0002',
  //     item: 'item-0001',
  //     type: 'Product',
  //   },
  //   {
  //     element: {
  //       title: 'Producto 3',
  //     },
  //     id: 'product-0003',
  //     item: 'item-0001',
  //     type: 'Product',
  //   },
  //   {
  //     element: {
  //       title: 'Producto 4',
  //     },
  //     id: 'product-0004',
  //     item: 'item-0001',
  //     type: 'Product',
  //   },
  // ],
  loading: false,
};

/**
 * The spec document' reducer.
 */
const specDocumentReducer = (state = specDocumentState, { payload, type }) => {
  switch (type) {
    case ADD_SPEC_BLOCK_SUCCESS:
    case ADD_SPEC_BLOCK_TEXT_SUCCESS: {
      return { ...state, loading: false };
    }
    case ADD_SPEC_BLOCK_IMAGE_SUCCESS: {
      return { ...state, blocks: payload.blocks };
    }
    case GET_SPEC_BLOCKS_SUCCESS: {
      return { ...state, blocks: payload.blocks };
    }
    case REMOVE_SPEC_BLOCK_SUCCESS: {
      const updatedBlocks = state.blocks.filter(block => block.id !== payload.blockID);

      return { ...state, blocks: updatedBlocks };
    }
    case UPDATE_SPEC_BLOCKS_SORT_SUCCESS: {
      return { ...state, blocks: payload.blocks };
    }
    default: {
      return state;
    }
  } 
};

export default specDocumentReducer;
