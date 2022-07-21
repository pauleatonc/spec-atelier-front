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

  const handleBlocksSortChange = (blocksIDs, blockId) => {
    if (canEditOwnerUser)
      dispatch(onSortSpecBlocks({ blocksIDs, blockId, specID }));
  };

  return (
    <DraggableList onChange={handleBlocksSortChange} blocks={blocks}>
      {blocks.map((block) => (
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
      ))}
    </DraggableList>
  );
};

export default BlocksSpecDocument;
