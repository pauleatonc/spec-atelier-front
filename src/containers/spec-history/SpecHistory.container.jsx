import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeOptionHistory,
  onGetChangeHistory,
  onGetChangesAuthor,
  onSetAuthor,
} from './SpecHistory.actions';
import { SPEC_HISTORY_TABLE } from '../../config/constants/button-variants';
import StructureTableChangeHistory from './components/StructureTableChangeHistory';
import ButtonsHistoryChangesManagement from './components/ButtonsHistoryChangesManagement';
import IconUser from '../../components/IconUser';
import {
  ACCEPTED_ICON,
  ADD_ICON,
  COMMENTS_ICON,
  DELETE_ICON,
  EDIT_ICON,
  REFUSED_ICON,
  WATCH_ICON,
} from '../../assets/Images';
import {
  ActionText,
  ContainerTable,
  Content,
  ContentDate,
  ActionIcon,
  SectionName,
  CommentsIcon,
  SectionContainer,
  StatusIcon,
} from './SpecHistory.styles';
import Tooltip from '../../components/tooltip/Tooltip';

const ChangeHistoryContainer = () => {
  const {
    changes,
    loading,
    total,
    params,
    authors,
    option_changes_management,
    author,
    page,
  } = useSelector((state) => state.specHistory);
  const [pageCount, setPageCount] = useState(0);
  const [keyword, setKeyword] = useState(params.keyword);
  const dispatch = useDispatch();
  const { id: specID } = useParams();

  useEffect(() => {
    dispatch(onGetChangeHistory(specID, { limit: 7, page: 0 }));
    dispatch(onGetChangesAuthor(specID, { limit: 7, page: 0 }));
    dispatch(changeOptionHistory(SPEC_HISTORY_TABLE));
  }, []);

  const pagesCounter = useCallback(({ pageSize }) => {
    if (!loading) {
      setPageCount(Math.ceil(total / pageSize));
    }
  });

  const queryParamsBuilder = (selectedAuthor, queryParams) => {
    const param = queryParams;
    if (selectedAuthor.id !== 'allAuthors') param.author = selectedAuthor;
    return param;
  };

  const onChangeParams = ({ target: { name, value } }) => {
    setKeyword(value);
    const queryParams = { ...params, [name]: value };
    dispatch(
      onGetChangeHistory(specID, queryParamsBuilder(author, queryParams)),
    );
  };

  const onChangeAuthor = (option) => {
    const queryParams = { limit: 7, page: 0, keyword };
    dispatch(onSetAuthor(option));
    dispatch(
      onGetChangeHistory(specID, queryParamsBuilder(option, queryParams)),
    );
  };

  const actionsIcons = {
    add: ADD_ICON,
    remove: DELETE_ICON,
    edit: EDIT_ICON,
    move: EDIT_ICON,
  };

  const statusIcons = {
    accepted: ACCEPTED_ICON,
    waiting: WATCH_ICON,
    refused: REFUSED_ICON,
  };

  const statusText = {
    accepted: 'Aceptado',
    waiting: 'Pendiente',
    refused: 'Rechazado',
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Acción',
        Cell: ({ row }) => {
          const icon = actionsIcons[row?.original?.action];
          const actionTextHTML = () => {
            return { __html: row?.original?.description };
          };
          return (
            <Content>
              <ActionIcon src={icon} alt="action_icon" row={row} />
              <ActionText dangerouslySetInnerHTML={actionTextHTML()} />
            </Content>
          );
        },
      },
      {
        Header: 'Comentario',
        Cell: ({ row }) => {
          return (
            <>
              <SectionContainer>
                {row?.original?.comment && (
                  <Tooltip content={row?.original?.comment} position="right">
                    <CommentsIcon src={COMMENTS_ICON} alt="comments_icon" />
                  </Tooltip>
                )}
              </SectionContainer>
            </>
          );
        },
      },
      {
        Header: 'Estado',
        Cell: ({ row }) => {
          const icon = statusIcons[row?.original?.status];
          const text = statusText[row?.original?.status];
          return (
            <SectionContainer>
              <p>{text}</p>
              <StatusIcon src={icon} alt="status_icon" />
            </SectionContainer>
          );
        },
      },
      {
        Header: 'Fecha',
        Cell: ({ row }) => (
          <ContentDate>
            <p>{(row?.original.created_at.split(' '))[0]}</p>
            <p>{(row?.original.created_at.split(' '))[1]}</p>
          </ContentDate>
        ),
      },
      {
        Header: 'Autor',
        Cell: ({ row }) => (
          <Content>
            <IconUser user={row?.original?.user} size="28" zIndex="0" />
            <SectionName>{row?.original?.user.name}</SectionName>
          </Content>
        ),
      },
    ],
    [],
  );

  return (
    <ContainerTable>
      <ButtonsHistoryChangesManagement />
      {option_changes_management === SPEC_HISTORY_TABLE ? (
        !loading && (
          <StructureTableChangeHistory
            columns={columns}
            changes={changes}
            pagesCounter={pagesCounter}
            pageCount={pageCount}
            keyword={keyword}
            onChangeParams={onChangeParams}
            onChangeAuthor={onChangeAuthor}
            authors={authors}
            author={author}
            queryParamsBuilder={queryParamsBuilder}
            actualPage={page}
          />
        )
      ) : (
        <h2 style={{ textAlign: 'center', margin: '40px' }}>
          Gestión de Cambios
        </h2>
      )}
    </ContainerTable>
  );
};

export default ChangeHistoryContainer;
