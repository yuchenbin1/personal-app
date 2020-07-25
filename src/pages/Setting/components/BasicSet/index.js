import React from 'react';
import {Form,Input, Select,Button,Row,Col} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import styles from './index.module.less';

const {Option} = Select;

const AvatarView=()=>(
    
        <div className={styles.avatar}>
            <div className={styles.avatarTitle}>
                头像
            </div>
            <div>
                <img 
                    src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" 
                    alt="avatar"
                    className={styles.avatarImg}
                />
            </div>
            <Button className={styles.avatarButton}>
                <UploadOutlined/>
                更换头像
            </Button>
        </div>
    
)

function InputItem(props){
    const {required,name,label,rules,...rest}=props;
    return (
        <Form.Item 
            className={styles.input}
            name={name}
            label={label}
            rules={rules}
        >
            <Input
                {...rest}
            />
        </Form.Item>
    )
}

function BasicSet(){
    return (
            <Form>
                <Row>
                    <Col span={12}>
                    <h1 className={styles.title}>基本设置</h1>  
                    <InputItem
                        className={styles.email}
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                required:true,
                                message:'请输入您的邮箱'
                            }
                        ]}
                />
                <InputItem
                        className={styles.name}
                        name="name"
                        label="昵称"
                        rules={[
                            {
                                required:true,
                                message:'请输入您的昵称'
                            }
                        ]}
                    />
                    <Form.Item
                        label="个人简介"
                        name="personalIntro"
                        className={styles.textArea}
                        maxLength="400px"
                    >
                        <Input.TextArea
                            rows={4}                       
                        />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label="国籍"
                        className={styles.country}
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Select 
                            defaultValue="PRC"
                            className={styles.selectCountry}
                        >
                            <Option value="PRC">中国</Option>
                            <Option value="USA">美国</Option>
                        </Select>
                    </Form.Item>
                    <InputItem
                        name="address"
                        label="街道地址"
                        rules={[
                            {
                                required:true,
                                message:"请输入您的地址"
                            }
                        ]}
                    />
                    <InputItem
                        name="address"
                        label="联系电话"
                        rules={[
                            {
                                required:true,
                                message:"请输入您的电话"
                            }
                        ]}
                    />
                    </Col>
                    <Col span={4}>
                        <AvatarView/>
                    </Col>
                </Row>
            </Form>
    )
}

export default BasicSet;