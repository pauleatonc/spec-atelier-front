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
}) => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { blocks, project, ownerBlocks } = useSelector(
    (state) => state.specDocument,
  );
  const correspondingBlocks = project.user_owner ? ownerBlocks : blocks;

  const handleBlocksSortChange = (blocksIDs) =>
    dispatch(onSortSpecBlocks({ blocksIDs, specID }));

  return (
    <DraggableList
      onChange={handleBlocksSortChange}
      blocks={correspondingBlocks}
    >
      {correspondingBlocks.map((block) => (
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
          />
        </div>
      ))}
    </DraggableList>
  );
};

export default BlocksSpecDocument;
