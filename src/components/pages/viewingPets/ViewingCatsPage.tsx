import React, {useState} from 'react';
import {Button, Col, Form, Input, Modal, Row, Upload} from 'antd';
import ViewingCatsPageQueries from "@/components/pages/viewingPets/ViewingPetsQuery";
import LoginRequestBody from "@/types/LoginRequestBody";
import ViewingPetCard from "@/components/pages/viewingPets/viewingPetCard/ViewingPetCard";

const ViewingCatsPage: React.FC = () => {

    const {mutations, catListQuery} = ViewingCatsPageQueries()

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
            image: 'test',
            ...values
        }
        mutations.addPet.mutate(currentValues)
        handleCancel()
    }

    return (
        <>
            {!!localStorage.getItem('auth-token') && (
                <div>
                    <Button onClick={showModal}>
                        Добавить кота
                    </Button>
                </div>
            )}

            <Modal
                title="Добавление кота"
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
            <Row gutter={[32, 32]}>
                {catListQuery.data?.content.map((val: { id: React.Key | null | undefined; }) => (
                    <Col key={val.id} span={8}>
                        <ViewingPetCard mutations={mutations} petData={val}/>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ViewingCatsPage;