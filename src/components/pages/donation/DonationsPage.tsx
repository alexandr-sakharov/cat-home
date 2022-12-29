import React from 'react';
import DonationQueries from "@/components/pages/donation/DonationQueries";
import {List} from "antd";


const DonationsPage: React.FC = () => {
    const { donationsQuery } = DonationQueries()
    return (
        <List
            size="large"
            header={<div>Рейтинг Пожертвований</div>}
            bordered
            dataSource={donationsQuery.data || []}
            renderItem={(item: any) => <List.Item>
                <div style={{ display: 'flex', justifyContent: "space-between", width: '100%'}}>
                    <div>
                        {item?.user?.name}
                    </div>
                    <div>
                        {item?.amount}
                    </div>
                </div>
            </List.Item>}
        />
    );
};

export default DonationsPage;