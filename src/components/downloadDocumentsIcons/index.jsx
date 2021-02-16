import React from 'react';

import ToolTip from '../tooltip/Tooltip';
import { Icons, Icon } from './styles';

const DownloadDocumentsIcons = ({ pdfs, dwg, bim, positionToolTip = "bottom", isDetail = false }) => {
    const titleSpecPdf = pdfs?.map(s => s.name).join(' - ') || '';
    const handleIconClick = documents => event => {
        event.stopPropagation();
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
		<Icons isDetail={isDetail}>
            {
                !!dwg.url&&
                (
                    <ToolTip content={dwg?.url?.split('/').pop() || ''} position={positionToolTip}>
                        <Icon type="dwg" active={!!dwg.url} onClick={handleIconClick([dwg.url])} />
                    </ToolTip>
                )
            }
            {
                !!bim.url &&
                (
                    <ToolTip content={bim?.url?.split('/').pop() || ''} position={positionToolTip}>
                        <Icon type="bim" active={!!bim.url} onClick={handleIconClick([bim.url])} />
                    </ToolTip>
                )
            }
            {
                !!pdfs?.length &&
                (
                    <ToolTip content={titleSpecPdf} position={positionToolTip}>
                        <Icon type="tech" active={!!pdfs?.length} onClick={handleIconClick(pdfs.map(({ url }) => url))} />
                    </ToolTip>
                )
            }
        </Icons>
	);
};

export default DownloadDocumentsIcons;
