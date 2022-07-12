import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { onSortSpecBlocks } from '../SpecDocument.actions';
import DraggableList from '../../../components/basics/DraggableList';
import BlockSpecDocument from './BlockSpecDocument';
import { getTeamUser } from '../utils';

const BlocksSpecDocument = ({
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
  const { blocks, project, ownerBlocks } = useSelector(
    (state) => state.specDocument,
  );
  const { team, user_owner: userOwner } = project;
  const { user } = useSelector((state) => state.auth);
  const [teamUser, setTeamUser] = useState('');

  useEffect(() => {
    setTeamUser(getTeamUser(team, user));
  }, [team]);

  const canEdit = userOwner || teamUser?.permission?.ability === 'write';
  const correspondingBlocks = project.user_owner ? ownerBlocks : blocks;

  const handleBlocksSortChange = (blocksIDs, blockId) => {
    if (canEdit) dispatch(onSortSpecBlocks({ blocksIDs, blockId, specID }));
  };

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
            handleShowBlockTImageMenu={handleShowBlockTImageMenu}
          />
        </div>
      ))}
    </DraggableList>
  );
};

export default BlocksSpecDocument;
