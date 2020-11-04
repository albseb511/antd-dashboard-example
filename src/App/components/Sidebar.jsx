import React from "react";
import { Menu, Avatar, Badge, Row, Col, Typography } from "antd";
import {
  HomeFilled,
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  SidebarWrapper,
  MainSidebarWrapper,
  BottomSidebarWrapper,
  IconWrapper,
  PageContainer,
} from "./SidebarWrapper";
import { Drawer } from "antd";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
      showDrawer: false
    };
  }

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <MainSidebarWrapper>
          <Drawer 
            title="Sidebar"
            placement="left"
            closable
            onClose={()=>this.setState({showDrawer: false})}
            visible={this.state.showDrawer}
            >
              <Typography.Title>Masai</Typography.Title>
          </Drawer>
          <SidebarWrapper>
            <div>
              <div>
                <IconWrapper
                  alt="logo"
                  class="logo-icon-sidebar"
                  src="https://images.vexels.com/media/users/3/143402/isolated/preview/afbbf15d5e82a1c4fb5a55c4eacf3003-graduation-cap-icon-by-vexels.png"
                />
              </div>
            </div>
            <div>
              <Menu
                onClick={this.handleClick}
                style={{ width: "100%", textAlign: "center" }}
                selectedKeys={[this.state.current]}
              >
                <Menu.Item key="1">
                  <HomeFilled />
                </Menu.Item>
                <Menu.Item key="2">
                  <BarChartOutlined />
                </Menu.Item>
                <Menu.Item key="3">
                  <UserOutlined />
                </Menu.Item>
                <Menu.Item key="4">
                  <SettingOutlined />
                </Menu.Item>
              </Menu>
            </div>
          </SidebarWrapper>
          <BottomSidebarWrapper>
            <Row justify="center" align="middle">
              <Col>
                <Badge count={2}>
                  <Avatar
                    onClick={()=>this.setState({showDrawer: true})}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    size={50}
                  />
                </Badge>
              </Col>
            </Row>
          </BottomSidebarWrapper>
        </MainSidebarWrapper>
        <PageContainer>{this.props.children}</PageContainer>
      </>
    );
  }
}

export { Sidebar };
