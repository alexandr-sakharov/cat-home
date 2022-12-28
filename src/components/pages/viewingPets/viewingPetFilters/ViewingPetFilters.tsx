import {Button, Select} from 'antd';
import React from 'react';
import type {SelectProps} from 'antd';

const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
}

const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};

const ViewingPetFilters: React.FC = () => (
    <>
        <div style={{display: 'flex', marginBottom: '20px'}}>
            <div style={{ width: '200px' }}>
                <span>Окрас</span>
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Выберите окрас"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <div style={{ width: '200px', marginLeft: '20px' }}>
                <span>Порода</span>
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Выберите породу"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <div style={{ width: '200px', marginLeft: '20px' }}>
                <span>Возраст</span>
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Выберите возраст"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <div style={{ width: '200px', marginLeft: '20px' }}>
                <span>Пол</span>
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Выберите пол"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <div style={{ width: '200px', marginLeft: '20px' }}>
                <Button
                    style={{ top: '40%', borderRadius: '5px'}}
                    disabled
                >найти</Button>
            </div>
        </div>
    </>
);

export default ViewingPetFilters;