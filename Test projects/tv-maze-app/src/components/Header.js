import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, StarOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainContent from "./MainContent";
import FavoritesPage from "./FavoritesPage";

class Header extends Component {
    render() {
        const { Header } = Layout;
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo" style={logoStyle}>
                            TVMaze App
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["Home"]}
                        >
                            <Menu.Item key="Home">
                                <Link to="/">
                                    <HomeOutlined />
                                    Home
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="Favorites">
                                <Link to="/favorites">
                                    <StarOutlined />
                                    Favorites
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
                {/* <Switch>
                    <Route path="/favorites" component={FavoritesPage} />
                    <Route exact path="/" component={MainContent} />
                </Switch> */}
            </Router>
        );
    }
}

const logoStyle = {
    width: "120px",
    height: "31px",
    background: "rgba(255, 255, 255, 0.2)",
    margin: "16px 24px 16px 0",
    float: "left",
    textAlign: "center",
    lineHeight: "31px",
    color: "white",
};

export default Header;
