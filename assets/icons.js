// icons.js
import { AntDesign, Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

export const icons = {
    index: (props) => <AntDesign name="home" size={26} {...props} />,
    reports: (props) => <MaterialIcons name="crisis-alert" size={26} {...props} />,
    maps: (props) => <Entypo name="compass" size={26} {...props} />,
    notifications: (props) => <MaterialIcons name="notifications-none" size={26} {...props} />,
    profile: (props) => <Feather name="user" size={26} {...props} />, // Added profile icon
};
