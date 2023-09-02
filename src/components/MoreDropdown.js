import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/MoreDropdown.module.css";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className={`ml-auto ${styles.MoreDropdown}`} drop="down">
      <Dropdown.Toggle as={ThreeDots}></Dropdown.Toggle>

      <Dropdown.Menu
        className={`text-center ${styles.Menu}`}
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
          Edit
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
