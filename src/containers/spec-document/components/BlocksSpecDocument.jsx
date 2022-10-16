import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { onSortSpecBlocks } from '../SpecDocument.actions';
import DraggableList from '../../../components/basics/DraggableList';
import BlockSpecDocument from './BlockSpecDocument';

const BlocksSpecDocument = ({
  showBlockEditor,
  handleHideBlockEditor,
  handleShowBlockMenu,
  showBlockTextEditor,
  handleHideBlockTextEditor,
  handleEditBlockText,
  handleShowBlockTextMenu,
  handleShowBlockTImageMenu,
  canEditOwnerUser,
}) => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { blocks } = useSelector((state) => state.specDocument);

  const handleBlocksSortChange = (blocksIDs, blockId) =>
    dispatch(onSortSpecBlocks({ blocksIDs, blockId, specID }));

  const blocksDocument = blocks.map((block) => (
    <div id={block.id} key={block.id}>
      <BlockSpecDocument
        block={block}
        showBlockEditor={showBlockEditor}
        handleHideBlockEditor={handleHideBlockEditor}
        handleShowBlockMenu={handleShowBlockMenu}
        showBlockTextEditor={showBlockTextEditor}
        handleHideBlockTextEditor={handleHideBlockTextEditor}
        handleEditBlockText={handleEditBlockText}
        handleShowBlockTextMenu={handleShowBlockTextMenu}
        handleShowBlockTImageMenu={handleShowBlockTImageMenu}
        canEditOwnerUser={canEditOwnerUser}
      />
    </div>
  ));

  return canEditOwnerUser ? (
    <DraggableList onChange={handleBlocksSortChange} blocks={blocks}>
      {blocksDocument}
    </DraggableList>
  ) : (
    blocksDocument
  );
};

export default BlocksSpecDocument;
