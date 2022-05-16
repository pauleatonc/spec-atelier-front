import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { onAddSpecBlockText } from '../SpecDocument.actions';
import Editor from '../../../components/inputs/Editor';
import { THREE_DOTS_VERTICAL_SOURCE, WATCH_ICON } from '../../../assets/Images';
import {
  BURNT_SIENNA,
  BURNT_SIENNA_OPACITY,
  PUERTO_RICO,
  PUERTO_RICO_OPACITY,
  SUPERNOVA,
  SUPERNOVA_OPACITY,
} from '../../../config/constants/styled-vars';
import {
  Block,
  BlockContent,
  BlockDotsIcon,
  BlockEditor,
  BlockImage,
  BlockText,
  BlockTextContent,
  BlockTitle,
  Item,
  Product,
  ProductBrand,
  ProductDescription,
  ProductImage,
  ProductReference,
  ProductSystem,
  ProductTitle,
  Section,
  TextContainer,
  Watch,
} from '../SpecDocument.styles';

const BlockSpecDocument = ({
  block,
  showBlockEditor,
  handleHideBlockEditor,
  handleShowBlockMenu,
  showBlockTextEditor,
  handleHideBlockTextEditor,
  handleEditBlockText,
  handleShowBlockTextMenu,
}) => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { localConfig } = useSelector((state) => state.specAdmin);
  const { project } = useSelector((state) => state.specDocument);
  const { text, type, product_block_image, id } = block;
  // const { action, sent, user } = block.change;
  // const status = block?.status || text?.status;
  // const action = block?.change?.action || text?.change?.action;
  // const sent = block?.change?.sent || text?.change?.sent;
  const status = block?.status;
  const action = block?.change?.action;
  const sent = block?.change?.sent;
  const statusText = text?.status;
  const actionText = text?.change?.action;
  const sentText = text?.change?.sent;
  const user = block?.change?.user;
  const userOwner = project.user_owner;
  const { images, short_desc, name, long_desc, system, brand, reference } =
    block.element;

  const handleAddBlockText = (blockID) => (textValue) => {
    handleHideBlockEditor();
    dispatch(onAddSpecBlockText({ blockID, specID, textValue }));
  };

  const getBlockMarginByType = () => {
    if (type === 'Section') {
      return '0 0 4px 0';
    }
    if (type === 'Item') {
      return '0 0 7px 0';
    }
    return '0 0 15px 0';
  };

  const getBlockWrapperByType = (content) => {
    if (type === 'Section') {
      return <Section>{content}</Section>;
    }
    if (type === 'Item') {
      return <Item>{content}</Item>;
    }
    return <Product>{content}</Product>;
  };

  const imageSize = () => {
    const imageSmall = images.find((image) => image.id === product_block_image)
      .urls.small;
    const imageOriginal = images.find(
      (image) => image.id === product_block_image,
    ).urls.original;
    const imageType = imageSmall || imageOriginal;
    return imageType;
  };

  const actionsColors = {
    add: PUERTO_RICO,
    remove: BURNT_SIENNA,
    edit: SUPERNOVA,
    move: SUPERNOVA,
  };

  const actionsColorsOpacity = {
    add: PUERTO_RICO_OPACITY,
    remove: BURNT_SIENNA_OPACITY,
    edit: SUPERNOVA_OPACITY,
    move: SUPERNOVA_OPACITY,
  };

  const color =
    sent || sentText ? actionsColorsOpacity[action] : actionsColors[action];
  const unsentCollaboratorBlock = !userOwner && !sent && status !== 'accepted';

  return (
    <Block
      disabled={type === 'Section' || type === 'Item'}
      margin={getBlockMarginByType()}
      color={!userOwner && status !== 'accepted' ? color : undefined}
      strikethrough={unsentCollaboratorBlock && action === 'remove'}
    >
      {getBlockWrapperByType(
        <>
          {showBlockEditor === id && (
            <BlockEditor>
              <Editor
                actions
                label="Texto"
                placeholder="Ingresa el texto"
                onCancel={handleHideBlockEditor}
                onSubmit={handleAddBlockText(id)}
              />
            </BlockEditor>
          )}
          <BlockDotsIcon
            src={THREE_DOTS_VERTICAL_SOURCE}
            onClick={handleShowBlockMenu(id, user?.id, sent)}
          />
          {type === 'Product' && product_block_image && (
            <BlockImage>
              <ProductImage alt="Imagen del Producto" src={imageSize()} />
            </BlockImage>
          )}
          {type !== 'Product' && <BlockTitle>{name}</BlockTitle>}
          {type === 'Product' && (
            <BlockContent>
              <ProductTitle>{name}</ProductTitle>
              {long_desc && localConfig.long_desc && (
                <ProductDescription
                  dangerouslySetInnerHTML={{
                    __html: long_desc.replace(/\n/g, '<br />'),
                  }}
                />
              )}
              {short_desc && localConfig.short_desc && (
                <ProductDescription>{short_desc}</ProductDescription>
              )}
              {system && (
                <ProductSystem>{`Sistema constructivo: ${system?.name}`}</ProductSystem>
              )}
              {brand && localConfig.brand && (
                <ProductBrand>{`Marca: ${brand?.name}`}</ProductBrand>
              )}
              {reference && localConfig.reference && (
                <ProductReference>{`Referencia: ${reference}`}</ProductReference>
              )}
            </BlockContent>
          )}
        </>,
      )}
      {block?.text && (
        <BlockText>
          <BlockTextContent dangerouslySetInnerHTML={{ __html: text?.text }} />
          {showBlockTextEditor === text?.id && (
            <BlockEditor>
              <Editor
                actions
                initialValue={text?.text}
                label="Texto"
                placeholder="Ingresa el texto"
                onCancel={handleHideBlockTextEditor}
                onSubmit={handleEditBlockText(text?.id)}
              />
            </BlockEditor>
          )}
          <BlockDotsIcon
            src={THREE_DOTS_VERTICAL_SOURCE}
            onClick={handleShowBlockTextMenu(text?.id)}
          />
        </BlockText>
      )}
      {!userOwner && sent && status === 'waiting' && (
        <TextContainer>
          <p>Pendiente de revisión</p>
          <Watch alt="watch" src={WATCH_ICON} />
        </TextContainer>
      )}
    </Block>
  );
};

export default BlockSpecDocument;
