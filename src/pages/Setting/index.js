import React,{useState} from 'react';
import {Menu,Row,Col} from 'antd';
import styles from './index.module.less';
import NewMsg from './components/NewMsg';
import SafeSet from './components/SafeSet';
import AccountBind from './components/AccountBind';
import BasicSet from './components/BasicSet';


const menuItem=[{
        key:"basicSet",
        text:"基本设置"
    },{
        key:"safeSet",
        text:"安全设置"
    },{
        key:"accountBind",
        text:"账号绑定"
    },{
        key:"newMsg",
        text:"新消息通知"
}]


const renderChildrenByKey=(optionKey)=>{
        switch(optionKey){
            case 'newMsg':
                return <NewMsg/>
            case 'safeSet':
                return <SafeSet/>
            case 'accountBind':
                return <AccountBind/>
            case 'basicSet':
                default:
                return <BasicSet/>
        }
}

function Setting(){
    const [optionKey,setOptionKey]=useState('basicSet');
    return (
        <div className={styles.container}>
            <Row>
                <Col span={6}>
                    <div className={styles.left}>
                        <Menu
                            selectedKeys={[optionKey]}
                            onClick={({key}) => setOptionKey(key)}
                        >
                            {menuItem.map((item)=>(<Menu.Item key={item.key}>{item.text}</Menu.Item>))}
                        </Menu>
                    </div>
                </Col> 
                <Col span={18}>
                    {renderChildrenByKey(optionKey)}
                </Col>
            </Row> 
        </div>
    )
}


export default Setting;