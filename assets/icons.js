// icons.js
import { AntDesign, Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export const icons = {
    index: (props) => <AntDesign name="home" size={26} {...props} />,
    reports: (props) => <MaterialIcons name="crisis-alert" size={26} {...props} />,
    maps: (props) => <Entypo name="compass" size={26} {...props} />,
    notifications: (props) => <MaterialIcons name="notifications-none" size={26} {...props} />,
    profile: (props) => <FontAwesome name="user-circle" size={45}   {...props} />, // Added profile icon
};
