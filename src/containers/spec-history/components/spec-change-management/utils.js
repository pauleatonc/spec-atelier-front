export const getDataSelectUser = (approveRequest) =>
  approveRequest.map((request) => ({
    id: request.id,
    date: request.date,
    count: request.count,
    email: request.user.email,
    name: request.user?.name,
    profile_image: request?.user?.profile_image,
  }));

export const getDataChange = (block) => {
  let approveRequestType;
  const isTextChange = !!block.text;
  const isImageChange = !!block.image;
  const isApproveRequestType = isTextChange || isImageChange;
  if (isTextChange) approveRequestType = 'text';
  else if (isImageChange) approveRequestType = 'image';
  const blockId = isApproveRequestType
    ? block[approveRequestType].id
    : block.id;
  const blockType = isApproveRequestType
    ? block[approveRequestType].type
    : block.type;
  const change = isApproveRequestType
    ? block[approveRequestType].change
    : block.change;
  const element = isApproveRequestType
    ? block[approveRequestType]
    : block.element;

  return {
    isApproveRequestType,
    blockId,
    blockType,
    element,
    change,
  };
};
