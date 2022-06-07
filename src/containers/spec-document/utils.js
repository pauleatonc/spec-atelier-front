export const getFormatedTableData = (blocks) => {
  const sectionsBlocks = blocks.filter((block) => block.type === 'Section');

  const productsReducer = blocks
    .filter((block) => block.type === 'Product')
    .map((productBlock) => ({
      ...productBlock,
      subtotal: productBlock?.element?.price_user
        ? productBlock?.element?.price_user
        : productBlock?.element?.price,
    }));

  const blocksReducer = sectionsBlocks.map((sectionBlock) => ({
    id: sectionBlock.element.id,
    desc: sectionBlock.element.name,
    unit: '',
    cnt: 0,
    price: '',
    subtotal: 0,
    type: sectionBlock.type,
    subRows: blocks
      .filter(
        (block) =>
          block.type === 'Item' && block.section === sectionBlock.element.id,
      )
      .map((itemBlock) => ({
        id: itemBlock.element.id,
        desc: itemBlock.element.name,
        unit: '',
        cnt: 0,
        price: '',
        subtotal: productsReducer
          .filter(
            (block) =>
              block.type === 'Product' && block.item === itemBlock.element.id,
          )
          .reduce(
            (a, b) =>
              (a +=
                (b.element.quantity || 1) *
                (b.element.price_user || b.element.price)),
            0,
          ),
        type: itemBlock.type,
        subRows: blocks
          .filter(
            (block) =>
              block.type === 'Product' && block.item === itemBlock.element.id,
          )
          .map((productBlock) => ({
            id: productBlock.element.id,
            desc: productBlock.element.name,
            unit: '',
            cnt: 0,
            price: productBlock?.element?.price_user
              ? `U${productBlock?.element?.price_user}`
              : `D${productBlock?.element?.price}`,
            subtotal: productBlock?.element?.price_user
              ? `U${productBlock?.element?.price_user}`
              : `D${productBlock?.element?.price}`,
            type: productBlock.type,
          })),
      })),
  }));

  const itemReducer = blocksReducer.map((itemBlock) => ({
    id: itemBlock.id,
    row: itemBlock.subRows
      .map((datanum) => datanum.subtotal)
      .reduce((a, b) => (a += b), 0),
  }));

  return sectionsBlocks.map((sectionBlock) => ({
    item_id: `${sectionBlock.element.item_id}.`,
    id: sectionBlock.element.id,
    desc: sectionBlock.element.item_title,
    unit: '',
    cnt: 0,
    price: '',
    subtotal: itemReducer.filter(
      (block) => block.id === sectionBlock.element.id,
    )[0].row,
    type: sectionBlock.type,
    subRows: blocks
      .filter(
        (block) =>
          block.type === 'Item' && block.section === sectionBlock.element.id,
      )
      .map((itemBlock) => ({
        item_id: `${itemBlock.element.item_id}.`,
        id: itemBlock.element.id,
        desc: itemBlock.element.item_title,
        unit: '',
        cnt: 0,
        price: '',
        subtotal: productsReducer
          .filter(
            (block) =>
              block.type === 'Product' && block.item === itemBlock.element.id,
          )
          .reduce(
            (a, b) =>
              (a +=
                (b.element.quantity || 1) *
                (b.element.price_user || b.element.price)),
            0,
          ),
        type: itemBlock.type,
        subRows: blocks
          .filter(
            (block) =>
              block.type === 'Product' && block.item === itemBlock.element.id,
          )
          .map((productBlock) => {
            return {
              item_id: `${productBlock.element.item_id}.`,
              id: productBlock.element.id,
              desc: productBlock.element.item_title,
              unit: productBlock?.element?.unit,
              cnt: !productBlock?.element?.quantity
                ? 1
                : productBlock?.element?.quantity,
              price: productBlock?.element?.price,
              subtotal:
                (productBlock?.element?.quantity || 1) *
                (productBlock?.element?.price ||
                  productBlock?.element?.price_user),
              type: productBlock.type,
              price_user: productBlock?.element?.price_user,
              item: productBlock.item,
            };
          }),
      })),
  }));
};

export const getTotalExpandManual = (blocks) => {
  const sectionsBlocks = blocks.filter((block) => block.type === 'Section');
  const itemsBlocks = blocks.filter((block) => block.type === 'Item');
  const ProductBlocks = blocks.filter((block) => block.type === 'Product');
  const array = [sectionsBlocks, itemsBlocks, ProductBlocks];
  return array;
};

export const getSections = (blocks) => {
  const sectionsBlocks = blocks.filter((block) => block.type === 'Section');
  return sectionsBlocks.map((sectionBlock) => ({
    ...sectionBlock,
    items: blocks
      .filter(
        (block) =>
          block.type === 'Item' && block.section === sectionBlock.element.id,
      )
      .map((itemBlock) => ({
        ...itemBlock,
        products: blocks.filter(
          (block) =>
            block.type === 'Product' && block.item === itemBlock.element.id,
        ),
      })),
  }));
};

export const getOwnerBlocks = (blocks) => {
  return blocks.filter(
    (block) =>
      block.change?.status === 'accepted' ||
      (block.change?.status === 'waiting' && block.change.action === 'remove'),
  );
};

export const getChangesBlocks = (blocks) => {
  return blocks.filter((block) => {
    const blockAccepted = block.change?.status !== 'accepted';
    const blockTextAccepted = block?.text?.change?.status !== 'accepted';
    const imageAccepted = block?.image?.change?.status !== 'accepted';
    const unsentBlocks = block?.change?.sent === false;
    const unsentBlocksText = block?.text?.change?.sent === false;
    const unsentBlocksImage = block?.image?.change?.sent === false;
    return (
      (unsentBlocks && blockAccepted) ||
      (unsentBlocksText && blockTextAccepted) ||
      (unsentBlocksImage && imageAccepted)
    );
  });
};
