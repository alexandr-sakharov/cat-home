import React from 'react';
import {Card} from "antd";
// @ts-ignore
import Profile from "@/assets/profile.svg"
import {Link} from "react-router-dom";
import {DeleteFilled, DeleteOutlined, LikeFilled} from "@ant-design/icons";

// @ts-ignore
const ViewingPetCard = ({petData, mutations}) => {
    const defaultData = {
        id: 1,
        name: 'Noname',
        age: 1,
        color: 'white',
        sex: 'male',
        vaccinations: 'Все',
        description: 'Лучший',
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
            <div onClick={() => mutations.deletePet.mutate(defaultData.id)} style={{ cursor: 'pointer'}}>
                <DeleteFilled/>
                <span style={{marginLeft: '10px'}}>Удалить</span>
            </div>
            <div>
                <LikeFilled/>
                <span style={{marginLeft: '10px'}}>{defaultData.likes}</span>
            </div>

        </Card>
    );
};

export default ViewingPetCard;