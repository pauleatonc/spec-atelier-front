import React from 'react';

import ToolTip from '../tooltip/Tooltip';
import { Icons, Icon } from './styles';

const DownloadDocumentsIcons = ({ pdfs, dwg, bim }) => {
    const titleSpecPdf = pdfs?.map(s => s.name).join(' - ') || '';

	// Download documents
    const handleIconClick = documents => () => {
        documents.forEach(async doc => {
          const link = document.createElement("a");
          link.download = doc;
          link.href = doc;
          link.target = '_blank';
          link.id = 'doc';
          document.body.appendChild(link);
          link.click();
          return setTimeout(() => document.body.removeChild(link), 2000);
        });
      };

	return (
		<Icons>
            <ToolTip content={dwg?.url?.split('/').pop() || ''} position="bottom">
                <Icon
                    type="dwg"
                    active={!!dwg.url}
                    onClick={handleIconClick([dwg.url])}
                />
            </ToolTip>
            <ToolTip content={bim?.url?.split('/').pop() || ''} position="bottom">
                <Icon
                    type="bim"
                    active={!!bim.url}
                    onClick={handleIconClick([bim.url])}
                />
            </ToolTip>
            <ToolTip content={titleSpecPdf} position="bottom">
                <Icon
                    type="tech"
                    active={!!pdfs?.length}
                    onClick={handleIconClick(pdfs.map(({ url }) => url))}
                />
            </ToolTip>
        </Icons>
	);
};

export default DownloadDocumentsIcons;
