import React from 'react';
import firebase from 'firebase/app';

import ToolTip from '../tooltip/Tooltip';
import { ANALYTICS_EVENTS } from '../../config/constants/analyticEvents';
import { APP_ENV } from '../../config/constants/environment';
import { Icons, Icon } from './styles';

const DownloadDocumentsIcons = ({ pdfs, dwg, bim, positionToolTip = "bottom", isDetail = false, productId }) => {
    const analytics = firebase.analytics();
    const titleSpecPdf = pdfs?.map(s => s.name).join(' - ') || '';
    const handleIconClick = (documents, eventName) => event => {
        if (APP_ENV === 'production') {
            analytics.logEvent(eventName, { productId });
        }
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
                        <Icon type="dwg" active={!!dwg.url} onClick={handleIconClick([dwg.url], ANALYTICS_EVENTS.DWG_DOWNLOAD)} />
                    </ToolTip>
                )
            }
            {
                !!bim.url &&
                (
                    <ToolTip content={bim?.url?.split('/').pop() || ''} position={positionToolTip}>
                        <Icon type="bim" active={!!bim.url} onClick={handleIconClick([bim.url], ANALYTICS_EVENTS.BIM_DOWNLOAD)} />
                    </ToolTip>
                )
            }
            {
                !!pdfs?.length &&
                (
                    <ToolTip content={titleSpecPdf} position={positionToolTip}>
                        <Icon type="tech" active={!!pdfs?.length} onClick={handleIconClick(pdfs.map(({ url }) => url), ANALYTICS_EVENTS.PDF_DOWNLOAD)} />
                    </ToolTip>
                )
            }
        </Icons>
	);
};

export default DownloadDocumentsIcons;
