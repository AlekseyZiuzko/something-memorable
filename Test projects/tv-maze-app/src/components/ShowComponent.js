import React, { Component } from "react";
import { Card, List, Rate } from "antd";
import Button from "antd/es/button";

export default class ShowComponent extends Component {
    handleAddToFavorites = (item) => () => {
        const { addToFavorites } = this.props;

        addToFavorites(item);
    };

    handleRemoveFromFavorites = (id) => () => {
        const { removeFromFavorites } = this.props;

        removeFromFavorites(id);
    };

    render() {
        const { Meta } = Card;
        const { favorites, shows, searchedShows } = this.props;

        let getList = () => {
            if (searchedShows.length) {
                return searchedShows;
            } else {
                return shows;
            }
        };
        return (
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 5,
                }}
                dataSource={getList()}
                pagination={{
                    position: "bottom",
                    pageSize: 12,
                }}
                renderItem={(item) => (
                    <List.Item style={listItemStyle}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            data={item}
                            cover={
                                <img
                                    style={imgStyle}
                                    src={item.image.medium}
                                    alt={demoImg}
                                />
                            }
                            actions={[
                                favorites.includes(item) ? (
                                    <Button
                                        type="primary"
                                        onClick={this.handleRemoveFromFavorites(
                                            item.id
                                        )}
                                    >
                                        Remove from favorites
                                    </Button>
                                ) : (
                                    <Button
                                        type="primary"
                                        onClick={this.handleAddToFavorites(
                                            item
                                        )}
                                    >
                                        Add to favorites
                                    </Button>
                                ),
                            ]}
                        >
                            <Meta
                                title={item.name}
                                description={
                                    <Rate
                                        style={rateStyle}
                                        allowHalf
                                        defaultValue={
                                            item.rating
                                                ? item.rating.average / 2
                                                : 1
                                        }
                                        disabled
                                    />
                                }
                            />
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

const imgStyle = {
    width: "100%",
    overflow: "hidden",
    height: "306px",
};
const demoImg = "https://cdn.browshot.com/static/images/not-found.png";
const listItemStyle = {
    padding: "20px",
};

const rateStyle = { marginLeft: "10%" };
