import { FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";

const CustomFlatList = ({children, data, renderItem, item}) => {
    return (
        <FlatList
        style={styles.itemList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        children={children}
      />
    );
};

export default CustomFlatList;