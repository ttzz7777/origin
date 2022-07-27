import React from "react";
import LoadableComponent from "../LoadableComponent/LoadableComponent";
const OrganManager = LoadableComponent(import('../content/organized/organ_manager'));
const UserManager = LoadableComponent(import('../content/usermanager/usermanager'));
const Map = LoadableComponent(import('../content/map/map'))

/**
 *
 * @type {{"1"，"2": 代表数据库菜单表中的主键}}
 */
const tabs = {
    '1': <OrganManager />,
    '2': <UserManager />,
    '3': <Map />

}

export {
    tabs
}