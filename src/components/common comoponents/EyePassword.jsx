import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function EyePassword({name,id,label,placeholder,imp,eye,handleChange}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="passwordWrapper">
      <label htmlFor={id}>{label} {imp&&<span className="text-danger">*</span>}</label>
      <div class="input-group mb-3">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control brd94D7D3"
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
        {eye&&
          <IconButton className="loginEyebtn" onClick={handleTogglePassword} >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>}
      </div>
    </div>
  );
}
