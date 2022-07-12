import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { onAddSpecBlockText } from '../SpecDocument.actions';
import Editor from '../../../components/inputs/Editor';
import PendingReviewText from './PendingReview';
import DotDropDownMenu from '../../../components/dotDropDownMenu/DotDropDownMenu';
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
} from '../SpecDocument.styles';
import { getTeamUser } from '../utils';

const BlockSpecDocument = ({
  block,
  showBlockEditor,
  handleHideBlockEditor,
  handleShowBlockMenu,
  showBlockTextEditor,
  handleHideBlockTextEditor,
  handleEditBlockText,
  handleShowBlockTextMenu,
  handleShowBlockTImageMenu,
}) => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { localConfig } = useSelector((state) => state.specAdmin);
  const { team, user_owner } = useSelector(
    (state) => state.specDocument.project,
  );
  const { text: blockText, image: blockImage, type, id, change } = block;
  const { status, sent, action } = block.change;
  const { user } = useSelector((state) => state.auth);
  const { images, short_desc, name, long_desc, system, brand, reference } =
    block.element;
  const unsentBlock = !user_owner && status !== 'accepted';
  const unsentText = !user_owner && blockText?.change?.status !== 'accepted';
  const [teamUser, setTeamUser] = useState('');
  const userEdit = teamUser?.permission?.ability === 'write';

  useEffect(() => {
    setTeamUser(getTeamUser(team, user));
  }, [team]);
  console.log(teamUser);

  const handleAddBlockText = (blockID) => (textValue) => {
    handleHideBlockEditor();
    dispatch(onAddSpecBlockText({ blockID, specID, textValue }));
  };

  const getBlockMarginByType = () => {
    if (type === 'Section') return '0 0 4px 0';
    if (type === 'Item') return '0 0 7px 0';
    return '0 0 15px 0';
  };

  const getBlockWrapperByType = (content) => {
    if (type === 'Section') return <Section>{content}</Section>;
    if (type === 'Item') return <Item>{content}</Item>;
    return (
      <Product strikethrough={unsentBlock && change.action === 'remove'}>
        {content}
      </Product>
    );
  };

  const imageSize = () => {
    const imageSmall = images.find(
      (image) => image.id === blockImage?.image?.id,
    ).urls.small;
    const imageOriginal = images.find(
      (image) => image.id === blockImage?.image?.id,
    ).urls.original;
    const imageType = imageSmall || imageOriginal;
    return imageType;
  };

  const showBlockImage =
    type === 'Product' &&
    blockImage?.image?.id &&
    (user.id === blockImage?.change?.user.id ||
      blockImage?.change?.status === 'accepted');

  const showBlockText =
    blockText &&
    (user.id === blockText?.change?.user.id ||
      blockText?.change?.status === 'accepted');

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

  const borderBlockColor = sent
    ? actionsColorsOpacity[change.action]
    : actionsColors[change.action];

  const borderTextcolor = blockText?.change.sent
    ? actionsColorsOpacity[blockText?.change.action]
    : actionsColors[blockText?.change.action];

  const borderImagecolor = blockImage?.change.sent
    ? actionsColorsOpacity[blockImage?.change.action]
    : actionsColors[blockImage?.change.action];

  const borderBlock = status !== 'accepted' ? borderBlockColor : undefined;
  const blockSentAndPending = status === 'waiting' && sent;

  const textColor = () => {
    const textPendingAndSent =
      !blockText?.change?.sent && blockText?.change?.status === 'waiting';
    const borderText =
      blockText?.change?.status !== 'accepted' ? borderTextcolor : undefined;
    if (action === 'remove') return undefined;
    if (blockSentAndPending && textPendingAndSent) return borderText;
    if (status === 'accepted' && textPendingAndSent) return borderText;
    if (blockText?.change?.sent && blockText?.change?.status === 'waiting')
      return borderText;
    return undefined;
  };

  const imageColor = () => {
    const imagePendingAndSent =
      !blockImage?.change?.sent && blockImage?.change?.status === 'waiting';
    const borderImage =
      blockImage?.change?.status !== 'accepted' ? borderImagecolor : undefined;
    if (action === 'remove') return undefined;
    if (blockSentAndPending && imagePendingAndSent) return borderImage;
    if (status === 'accepted' && imagePendingAndSent) return borderImage;
    if (blockImage?.change?.sent && blockImage?.change?.status === 'waiting')
      return borderImage;
    return undefined;
  };

  return (
    <Block
      disabled={type === 'Section' || type === 'Item'}
      margin={getBlockMarginByType()}
      color={!user_owner ? borderBlock : undefined}
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
          {userEdit && (
            <DotDropDownMenu
              onClick={handleShowBlockMenu(id, change.user.id, sent)}
            />
          )}
          {showBlockImage && (
            <BlockImage visibility={action === 'remove' ? 'hidden' : 'visible'}>
              {userEdit && (
                <DotDropDownMenu
                  onClick={handleShowBlockTImageMenu(blockImage?.id)}
                  right="-72px"
                />
              )}
              <ProductImage
                alt="Imagen del Producto"
                src={imageSize()}
                color={!user_owner ? imageColor() : undefined}
              />
              {action !== 'remove' &&
                blockImage?.change.sent &&
                blockImage?.change?.status === 'waiting' && (
                  <PendingReviewText />
                )}
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
      {showBlockText && (
        <BlockText
          color={!user_owner ? textColor() : undefined}
          strikethrough={
            (unsentBlock && change.action === 'remove') ||
            (unsentText && blockText?.change.action === 'remove')
          }
          visibility={action === 'remove' ? 'hidden' : 'visible'}
        >
          {userEdit && (
            <DotDropDownMenu onClick={handleShowBlockTextMenu(blockText?.id)} />
          )}
          <BlockTextContent
            dangerouslySetInnerHTML={{ __html: blockText?.text }}
          />
          {showBlockTextEditor === blockText?.id && (
            <BlockEditor>
              <Editor
                actions
                initialValue={blockText?.text}
                label="Texto"
                placeholder="Ingresa el texto"
                onCancel={handleHideBlockTextEditor}
                onSubmit={handleEditBlockText(blockText?.id)}
              />
            </BlockEditor>
          )}
          {!(sent && status === 'waiting') &&
            blockText?.change.sent &&
            blockText?.change?.status === 'waiting' && <PendingReviewText />}
        </BlockText>
      )}
      {sent && status === 'waiting' && <PendingReviewText />}
    </Block>
  );
};

export default BlockSpecDocument;
