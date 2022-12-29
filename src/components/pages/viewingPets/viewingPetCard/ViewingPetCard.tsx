import React, {useState} from 'react';
import {Button, Card, Form, Input, Modal} from "antd";
// @ts-ignore
import Profile from "@/assets/profile.svg"
import {Link} from "react-router-dom";
import {DeleteFilled, DeleteOutlined, EditOutlined, HeartFilled, LikeFilled} from "@ant-design/icons";
import LoginRequestBody from "@/types/LoginRequestBody";

// @ts-ignore
const ViewingPetCard = ({fav, petData, mutations, roleList}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: LoginRequestBody): void => {
        console.log(values)
        const currentValues = {
            id: defaultData.id,
            image: 'test',
            ...defaultData,
            ...values
        }
        mutations.updatePet.mutate(currentValues)
        handleCancel()
    }
    const defaultData = {
        id: 1,
        name: 'Noname',
        age: 1,
        color: 'white',
        sex: 'male',
        vaccinations: 'Все',
        description: 'Лучший',
        likes: 0,
        ...petData
    }
    return (
        <Card
            title={defaultData.name}
            extra={<Link to={`cat/${defaultData.id}`}>Посмотреть</Link>}
            style={{width: 400}}
        >
            <div style={
                {
                    width: '300px',
                    height: '300px',
                    margin: '0 auto',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    background: '#d6e6f6',
                }
            }>
                <img src={Profile} alt="" style={{
                    width: '100px',
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                }}/>
            </div>
            <p>Возраст: {defaultData.age}</p>
            <p>Цвет: {defaultData.color}</p>
            <p>Пол: {defaultData.sex === 'male' ? 'мужской' : 'женский'}</p>
            <p>Вакцинации: {defaultData.vaccinations}</p>
            <p>Описание: {defaultData.description}</p>
            {roleList.includes('ROLE_ADMIN') && (<>
                <div onClick={() => { showModal() }} style={{ cursor: 'pointer'}}>
                    <EditOutlined/>
                    <span style={{marginLeft: '10px'}}>Редактировать</span>
                </div>
                <div onClick={() => mutations.deletePet.mutate(defaultData.id)} style={{ cursor: 'pointer'}}>
                    <DeleteFilled/>
                    <span style={{marginLeft: '10px'}}>Удалить</span>
                </div>
            </>)}
            {!fav && (
                <div>
                    <HeartFilled onClick={() => defaultData.isLiked
                        ? mutations.deleteLikePet.mutate(defaultData.id)
                        : mutations.likePet.mutate(defaultData.id)
                    }/>
                    <span style={{marginLeft: '10px'}}>{defaultData.likes}</span>
                </div>
            )}
            <Modal
                title="Редактирование кота"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="loginForm"
                    labelCol={{span: 5}}
                    wrapperCol={{span: 16}}
                    initialValues={{}}
                    autoComplete="on"
                    onFinish={onFinish}
                    style={{width: '500px'}}
                >
                    <Form.Item
                        label="Имя"
                        name="name"
                        rules={[{required: true, message: 'Обязательное поле'}]}
                    >
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item
                        label="Возраст"
                        name="age"
                        rules={[{required: true, message: 'Обязательное поле'}]}
                    >
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item
                        label="Цвет"
                        name="color"
                        rules={[{required: true, message: 'Обязательное поле'}]}
                    >
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item
                        label="Пол"
                        name="sex"
                        rules={[{required: true, message: 'Обязательное поле'}]}
                    >
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item
                        label="Вакцинации"
                        name="vaccinations"
                        rules={[{required: true, message: 'Обязательное поле'}]}
                    >
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item
                        label="Описание"
                        name="description"
                        rules={[{required: true, message: 'Обязательное поле'}]}
                    >
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 10, span: 16}}>
                        <Button htmlType="submit">
                            Добавить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default ViewingPetCard;