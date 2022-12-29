import React, {useState} from 'react';
// @ts-ignore
import Profile from "@/assets/profile.svg";
import {useLocation} from "react-router-dom";
import ViewingPetQueries from "@/components/pages/viewingPet/ViewingPetQuery";
import {LikeFilled} from "@ant-design/icons";
import {Button, Input, Modal} from "antd";

const ViewingPet = () => {
    const location = useLocation()
    const currentId = location.pathname.split('/').pop()
    const { mutations, petQuery, bookingPetQuery } = ViewingPetQueries(currentId || '')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sum, setSum] = useState(0);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ display: 'flex', margin: '0 auto'}}>
            <div style={{ position: 'relative', minWidth: '300px' }}>
                <img src={Profile} alt="" style={{
                    width: '100px',
                    height: '100%'
                }}/>
                <div>
                   Пожертвовано
                </div>
                <div>
                    {petQuery.data?.donatesAmount || 0} руб
                </div>
                <div>
                   отметки нравится
                </div>
                <div>
                    {petQuery.data?.likes || 0}
                </div>
            </div>
            <div>
                <p>Возраст: {petQuery.data?.age}</p>
                <p>Цвет: {petQuery.data?.color}</p>
                <p>Пол: {petQuery.data?.sex}</p>
                <p>Вакцинации: {petQuery.data?.vaccinations}</p>
                <p>Описание: {petQuery.data?.description}</p>
                {bookingPetQuery.data?.[0] && (
                    <p>
                        Статус:
                        {bookingPetQuery.data?.[0]?.status === 'DENIED' && "отклонен"}
                        {bookingPetQuery.data?.[0]?.status === 'APPROVED' && "принят"}
                        {bookingPetQuery.data?.[0]?.status === 'WAITING' && "ожидание"}
                    </p>
                )}
                <div style={{ marginBottom: '10px'}}>
                    <Button
                        onClick={() => mutations.setBookingPet.mutate(petQuery.data?.id)}
                        disabled={bookingPetQuery.data?.[0]?.status === 'WAITING'}
                    >
                        Бронировать
                    </Button>
                </div>
                <div>
                    <Button type="primary" onClick={showModal}>
                        пожертвование
                    </Button>
                </div>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                    <Input value={sum} onChange={(val) => setSum(+val.target.value)}/>
                    <div style={{ marginTop: '10px'}}>
                        <Button disabled={sum <= 1} onClick={() => {
                            mutations.addDonate.mutate({id: petQuery.data?.id, amount: sum})
                            setSum(0)
                            handleCancel()
                        }}>
                            Пожертвовать
                        </Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ViewingPet;