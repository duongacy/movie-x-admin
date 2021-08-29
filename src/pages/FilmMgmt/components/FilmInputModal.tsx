import { Modal } from 'antd';
import React from 'react';

interface Props {}

const FilmInputModal = (props: Props) => {
    return (
        <Modal title="Basic Modal" visible={true} onOk={() => {}} onCancel={() => {}}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};

export default FilmInputModal;
