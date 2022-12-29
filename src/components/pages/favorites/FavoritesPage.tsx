import React from 'react';
import {List} from "antd";
import FavoritesQueries from "@/components/pages/favorites/FavoritesQueries";


const FavoritesPage: React.FC = () => {
    const { favoritesQuery } = FavoritesQueries()
    return (
        <List
            size="large"
            header={<div>Избранные котята</div>}
            bordered
            dataSource={favoritesQuery.data || []}
            renderItem={(item: any) => <List.Item>
                <div style={{ display: 'flex', justifyContent: "space-between", width: '100%'}}>
                    <div>
                        {item?.name}
                    </div>
                </div>
            </List.Item>}
        />
    );
};

export default FavoritesPage;