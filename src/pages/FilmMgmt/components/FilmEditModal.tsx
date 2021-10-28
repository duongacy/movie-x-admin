import { Button, Modal, Form, Input, FormInstance, DatePicker } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import moment from 'moment';
import { ChangeEvent, createRef, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MA_NHOM } from '../../../config';
import { ManagementContext } from '../../../contexts/ManagementContext';
import { updateFilmAction } from '../../../store/film/filmActions';
import { useTranslation } from 'react-i18next';



interface Props {}

const FilmEditModal = (props: Props) => {
    const { t } = useTranslation(['film-mgmt']);
    const dispatch = useDispatch();
    const formRef = createRef<FormInstance>();

    /* --------------------------------- context -------------------------------- */
    const { editModalState, filmContext } = useContext(ManagementContext);
    const { showEditModal, setShowEditModal, inputFields } = editModalState;
    const { reloadFilm } = filmContext;
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useState -------------------------------- */
    const [image, setImage] = useState<{
        file: File;
        name: string;
    } | null>(null);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        formRef.current?.resetFields();
        formRef.current?.setFieldsValue({
            ...inputFields,
            ngayKhoiChieu: moment(inputFields.ngayKhoiChieu),
        });
    }, [inputFields]);
    /* -------------------------------------------------------------------------- */

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files) {
            const file = files[0];
            const name = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                if (typeof e.target?.result === 'string') {
                    imgRef.current?.setAttribute('src', e.target?.result);
                }
                setImage({
                    file,
                    name,
                });
            };
        } else {
            console.log('Khong co file');
        }
    };
    const handleFinish = (values: any) => {
        const formData = new FormData();
        if (image !== null) {
            formData.append('hinhAnh', image.file, image.name);
        }
        formData.append('maNhom', MA_NHOM);
        formData.append('ngayKhoiChieu', moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
        for (let key in values) {
            formData.append(key, values[key]);
        }
        dispatch(updateFilmAction(formData, reloadFilm));
    };

    const imgRef = createRef<HTMLImageElement>();

    return (
        <Modal
            title={t('update-movie')}
            visible={showEditModal}
            onOk={() => {}}
            onCancel={() => setShowEditModal(false)}
            footer={false}
        >
            <Form
                name="nest-messages"
                onFinish={handleFinish}
                ref={formRef}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
            >
                <Form.Item label={t('movie-code')} name="maPhim">
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    label={t('name-movie')}
                    name="tenPhim"
                    rules={[{ required: true, message: t('remind-name-movie') }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Trailer"
                    name="trailer"
                    rules={[{ required: true, message: t('remind-trailer') }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('description')}
                    name="moTa"
                    rules={[{ required: true, message: t('remind-description') }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('release-date')}
                    name="ngayKhoiChieu"
                    rules={[{ required: true, message: t('remind-release-date') }]}
                >
                    <DatePicker 
                        format="DD/MM/YYYY" 
                        placeholder={t('select-date')}/>
                </Form.Item>
                <Form.Item label={t('comment')} name="danhGia">
                    <Input type="number" />
                </Form.Item>
                <Form.Item label={t('poster')}>
                    <input type="file" onChange={handleChangeImage} />
                    <img
                        alt="..."
                        style={{ width: 200, height: 200 }}
                        src={inputFields.hinhAnh}
                        ref={imgRef}
                        onErrorCapture={() => {
                            return <div></div>;
                        }}
                    />
                </Form.Item>
                <div style={{ justifyContent:"space-between", display:"flex", flexDirection:"row"}}>
                <div className="custom-film">
                <Form.Item label={t('upcoming')} name="sapChieu" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                </div>
                <div className="custom-film">
                <Form.Item label={t('releasing')} name="dangChieu" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                </div>
                <div className="custom-film">
                <Form.Item label={t('hot')} name="hot" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                </div>
                </div>
                <div style={{ justifyContent:"center", display:"flex", flexDirection:"row", gap:"200px"}}>
                <div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    {t('submit')}
                    </Button>
                </Form.Item>
                </div>
                <div>
                    <Button onClick={() => setShowEditModal(false)}>{t('cancel')}</Button>
                </div>
                </div>  
            </Form>
        </Modal>
    );
};

export default FilmEditModal;
