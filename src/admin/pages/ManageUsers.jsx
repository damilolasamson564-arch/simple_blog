import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../apiConfig";

const ManageUsers = () => {
  return (
    <div>
      <h2>Manage Users</h2>
      <p>This is the Manage Users page.</p>
      <div style={{ backgroundColor: "red" }}>
        <p>This is a styled div.</p>
      </div>
    </div>
  );
};

export default ManageUsers;
