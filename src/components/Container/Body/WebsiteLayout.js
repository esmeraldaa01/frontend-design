import HeaderMenu from "../../Header/HeaderMenu";
import LeftPart from "../LeftSide/LeftPart";
import SideFooter from "../../Footer/SideFooter";
import {Layout} from 'antd';
import RightPart from "../RightSide/RightPart";
import './WebsiteLayout.css';

const { Sider, Content} = Layout;

const WebsiteLayout = () => {

    return (
        <Layout>
            <Content><LeftPart/></Content>
            <Sider width={500}>
                <RightPart/>
            </Sider>
        </Layout>
    );
};

export default WebsiteLayout;
