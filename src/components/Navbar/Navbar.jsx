import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

export const Navbar = (props) => {
  const { friendsData } = props.props.sidebarData;

  return (
    <nav className={classes.navContent}>
      <ul className={classes.navigation}>
        <li>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Music
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Users
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>

      <div className={classes.friendsList}>
        <div className={classes.friendsListTitle}>Friends</div>
        <ul className={classes.friendsListItems}>
          {friendsData.map((item) => {
            return (
              <li key={friendsData.id} className={classes.friendsListItem}>
                <img
                  className={classes.friendsListPhoto}
                  src={item.photo}
                  alt="avatar"
                />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
