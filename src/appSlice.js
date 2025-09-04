import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   isLoading: true,
   basicInfo: null,
   contacts: null,
   experiences: null,
   skills: null,
   projects: null,
   certifications: null,
   educations: null
};

export const getData = createAsyncThunk(
   "app/getData",
   async (obj, thunkAPI) => {
      try {
         const baseUrl = `${process.env.PUBLIC_URL}/data`;
         const responses = await Promise.all([
            fetch(`${baseUrl}/basicInfo.json`),
            fetch(`${baseUrl}/contacts.json`),
            fetch(`${baseUrl}/experiences.json`),
            fetch(`${baseUrl}/skills.json`),
            fetch(`${baseUrl}/projects.json`),
            fetch(`${baseUrl}/certifications.json`),
            fetch(`${baseUrl}/educations.json`),
         ]);
         const data = await Promise.all(responses.map(response => response.json()));
         return data;
      } catch (error) {
         console.error("Error: ", error);
      }

   }
);

export const appSlice = createSlice({
   name: "app",
   initialState,
   reducers: {
      setState: {
         prepare(name, value) {
            return {
               payload: { name, value }
            };
         },
         reducer(state, action) {
            const { name, value } = action.payload;
            state[name] = value;
         }
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getData.pending, (state, action) => { state.isLoading = true; })
         .addCase(getData.fulfilled, (state, action) => {
            const [basicInfo, contacts, experiences, skills, projects, certifications, educations] = action.payload;
            state.basicInfo = basicInfo;
            state.contacts = contacts;
            state.experiences = experiences;
            state.skills = skills;
            state.projects = projects;
            state.certifications = certifications;
            state.educations = educations;
            state.isLoading = false;
         })
         .addCase(getData.rejected, (state, action) => {
            console.error("Error: ", action.error.message);
            state.isLoading = false;
         })
   }
});

export const { setState } = appSlice.actions;
export default appSlice.reducer;