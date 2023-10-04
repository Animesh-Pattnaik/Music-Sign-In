import React, { useState } from 'react';
import { useFormik } from 'formik';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, InputAdornment, IconButton, Checkbox, FormControlLabel} from '@mui/material';
import * as Yup from 'yup';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import CustomButton from "./CustomButton";
import Box from '@mui/material/Box';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!'),
  email: Yup.string()
    .lowercase('Email must be in lowercase')
    .email('Invalid email format')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const Sign = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      navigate('/landing');
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1>Create Your Account</h1>
        <div className="field">
        <Box sx={{my:2}}>
          <Typography variant="h7" >Username</Typography>
        </Box>
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </div>
      <div className="field">
      <Box sx={{my:2}}>
      <Typography variant="h7" >Email</Typography>
      </Box>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>

      <div className="field">
      <Box sx={{my:2}}>
      <Typography variant="h7" >Password</Typography>
      </Box>
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <FormControlLabel
          control={
            <Checkbox
              id="user-check"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
          }
          label="Remember Me"
      />

      <CustomButton label="Create Your Account" />

      <div className="login__register">
        <p>
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>

      </form>
      {formik.submitCount > 0 && !formik.errors.username && !formik.errors.email && !formik.errors.password ? (
        <div className="ui message success" id="Message">Login Successfull</div>
      ) : null}
    </div>
  );
};

export default Sign;
