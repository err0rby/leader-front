import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signingUp: false,
  sigingIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);
export const authsignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkAPI) => {
    console.log(login);
      try {
      const res = await fetch("http://localhost:3030/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ login, password }),
        });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      return token;
    } catch (error) {
      return error;
    }
  }
);

 const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.signingUp = true;
        state.error = null;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signingUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.signingUp = true;
        state.error = null;
      })
      .addCase(authsignIn.pending, (state) => {
        state.sigingIn = true;
        state.error = null;
      })
      .addCase(authsignIn.rejected, (state, action) => {
        state.sigingIn = false;
        state.error = action.payload;
      })
      .addCase(authsignIn.fulfilled, (state, action) => {
        state.sigingIn = false;
        state.error = null;
        state.token = action.payload.token;
      });
  },
});
export default applicationSlice.reducer