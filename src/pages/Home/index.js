import React,{useState, useEffect} from 'react';
import {Row,Col,Card, Divider,Avatar} from 'antd';
import {useDispatch,useMappedState} from 'redux-react-hook';
import {Link} from 'react-router-dom';
import {ContactsOutlined,ClusterOutlined,HomeOutlined} from '@ant-design/icons';
import styles from './index.module.less';
import Articles from './components/Articles/index';
import Applications from './components/Applications/index';
import Projects from './components/Projects/index';
import {currentUser,fakeList} from './data';
import TagList from './components/TagList';
import { getUserProfile } from '../../actions/profile';

const articleList=fakeList(10);
const applicationList=fakeList(10);
const projectList=fakeList(10);

const mapState=state=>state.profile;

const operationTabList= 
        [{
            key:'acticles',
            tab:(
                <span>
                    文章<span>(8)</span>
                </span>    
            )
        },{
            key:'applications',
            tab:(
                <div>
                    应用<span>(10)</span>
                </div>
            )
        },{
            key:'projects',
            tab:(
                <div>
                    项目<span>(18)</span>
                </div>
            )
        }];

const renderChildrenByTabkey=(tabKey)=>{
    switch(tabKey){
        case 'projects':
            return <Projects list={projectList}/>;
        case 'applications':
            return <Applications list={applicationList}/>;
        case 'articles':
        default:
            return <Articles list={articleList}/>;
    }
}

const renderUserInfo=()=>(
    <div className={styles.detail}>
        <p>
            <ContactsOutlined className={styles.userInfoIcon}/>
            {currentUser.title}
        </p>
        <p>
            <ClusterOutlined className={styles.userInfoIcon}/>
            {currentUser.group}
        </p>
        <p>
            <HomeOutlined className={styles.userInfoIcon}/>
            {(currentUser.geographic||{province:{label:''}}).province.label}
        </p>
    </div>
)

const Home=()=>{
    const dispatch = useDispatch();
    const {user={}}=useMappedState(mapState);
    console.log(user);
    const [tabKey,setTabKey]=useState('articles');
    const onTabChange=(key)=>{
        setTabKey(key);
    }
    useEffect(()=>{
        dispatch(getUserProfile());
    },[dispatch])


    return (
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{marginBottom:24}}>
                        <div className={styles.avatarHolder}>
                            <img alt="" src={currentUser.avatar}/>
                                <div className={styles.name}>{user.username}</div>
                                <div>{currentUser.signature}</div>
                        </div>
                        {renderUserInfo(currentUser)}
                        <Divider dashed/>
                        <TagList tags={currentUser.tags}/>
                        <Divider dashed/>
                        <div className={styles.team}>
                            <div className={styles.teamTitle}>团队</div>
                            <Row>
                                {
                                    currentUser.notice&&
                                    currentUser.notice.map((item)=>(
                                        <Col key={item.id} lg={24} xl={12}>
                                            <Link to="/setting">
                                                <Avatar size="small" src={item.logo}/>
                                                {item.member}
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card 
                        bordered={false}   
                        tabList={operationTabList}
                        activeTabKey={tabKey}
                        onTabChange={onTabChange}
                    >
                    {renderChildrenByTabkey(tabKey)}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;