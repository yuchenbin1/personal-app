import React from 'react';
import {List,Tag} from 'antd';
import {StarTwoTone,LikeOutlined,MessageFilled} from '@ant-design/icons';
import ArticleListContent from '../ArticleListContent/index';
import styles from './index.module.less';

const IconText=({icon,text})=>(
    <span>
        {icon} {text}
    </span>
)

function Articles({list}){
    return(
       <List
            size="large"
            className={styles.articleList}
            rowKey="id"
            itemLayout="vertical"
            dataSource={list}
            renderItem={(item)=>(
                <List.Item
                    key={item.id}
                    actions={[
                        <IconText key="star" icon={<StarTwoTone/>} text={item.star}/>,
                        <IconText key="like" icon={<LikeOutlined/>} text={item.like}/>,
                        <IconText key="star" icon={<MessageFilled/>} text={item.message}/>
                    ]}
                >
                    <List.Item.Meta
                        title={
                            <a  className={styles.listItemMetaTitle} href={item}>
                                {item.title}
                            </a>
                        }
                        description={
                            <span>
                                <Tag>Ant Design</Tag>
                                <Tag>设计语言</Tag>
                                <Tag>蚂蚁金服</Tag>
                            </span>
                        }
                    >
                    </List.Item.Meta>
                    <ArticleListContent data={item}/>
                </List.Item>
            )}
       />

    )
}

export default Articles;