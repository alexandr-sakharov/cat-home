import React from 'react';
// @ts-ignore
import Profile from "@/assets/profile.svg";
import {useLocation} from "react-router-dom";
import ViewingPetQueries from "@/components/pages/viewingPet/ViewingPetQuery";
import {LikeFilled} from "@ant-design/icons";
import {Button} from "antd";

const ViewingPet = () => {
    const location = useLocation()
    const currentId = location.pathname.split('/').pop()
    const { mutations, petQuery } = ViewingPetQueries(currentId || '')
    console.log('render')
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
                <Button onClick={() => mutations.setBookingPet.mutate(petQuery.data?.id)}>Бронировать</Button>
            </div>
        </div>
    );
};

export default ViewingPet;