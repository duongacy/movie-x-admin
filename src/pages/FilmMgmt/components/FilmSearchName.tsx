import { Input, Space } from 'antd';
import React, { ChangeEvent, useContext } from 'react';
import { ManagementContext } from '../../../contexts/ManagementContext';
import { useTranslation } from 'react-i18next'

interface Props {}

const FilmSearchName = (props: Props) => {
    const { searchState, paginationState } = useContext(ManagementContext);
    const { t } = useTranslation(['film-mgmt'])
    const { setSearchKey } = searchState;
    const { setPage } = paginationState;
    return (
        <div>
        <Input.Search
            placeholder={t('search')}
            onSearch={(value: string) => {
                setSearchKey(value);
                setPage(1);
            }}
            enterButton
        /> 
        </div>
    );
};

export default FilmSearchName;
