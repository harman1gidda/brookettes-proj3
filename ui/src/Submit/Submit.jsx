import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Submit.css";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Slider,
  Typography,
  Box,
} from "@mui/material";

var siteOptions = ["Site A", "Site B", "Site C"];
const colorMap = ["green","yellow", "red"];


export default function Submit() {
  const [formData, setFormData] = useState({site: 0, title: "", startDate: "", endDate: "", condition: ""});
  const [sites, setSites] = useState(siteOptions);
  const [siteformName, setSiteFormName] = useState('')
  const [siteCondition, setSiteCondition] = useState('green')
  const [loading, setLoading] = useState(false);
  const [siteData, setSiteData] = useState([])
  

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8081/sites')
      .then(res => res.json())
      .then(data => setSites(data))
  }, [])

  useEffect(() => {
    siteOptions = [];
    for(let i of sites){
      if(i.site_name){
        setSiteData(e => [...e, i.site_name])
      }
      // siteOptions.push(i.site_name)
    }
    setLoading(false)
  }, [sites])

function submit(){

  if (!formData.title || !formData.site || !formData.startDate || !formData.endDate || !formData.condition){
      alert('Please fill out all fields before submitting.');
      return;
    }
    
  fetch('http://localhost:8081/maintenance', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task_title: formData.title,
      site_id: formData.site,
      start_date: formData.startDate,
      end_date: formData.endDate,
      condition_color: formData.condition
    })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log("Server Response:", data)
      console.log(data.succeess)
      if(data.succeess == true){
        alert('Request Submitted!')
        //formData ={};
        window.location.reload();
        console.log('Request submitted')
      }else{
        console.log('Failed to submit a Request')
      }
    })
      .catch((error)=>{
        console.log('Catching errors!')
      })
}

  const handleChange = (field, value) => {
    if(field == 'site'){
      for(let i of sites){
        if(value == i.site_name){
          
          value = i.id
        }
      }
    }else if ( field == 'condition'){
      if(value == '0'){
        value = 'Green'
      }else if(value == '1'){
        value = 'Yellow'
      }else if(value == '2'){
        value = 'Red'
      }
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if(loading){
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }

  return (
    <>
      <Box className='submit-box' sx={{ maxWidth: 500, mx: "auto", mt: -15, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white", "margin-top":0 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="site-label">Site Name</InputLabel>
              <Select
                labelId="site-label"
                value={siteformName}
                label="Site Name"
                onChange={(e) => handleChange("site", e.target.value) || setSiteFormName(e.target.value)}
              >
                {siteData.map((site, index) => (
                  <MenuItem key={index} value={site}>
                    {site}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>

          <TextField
            label="Task Title"
            fullWidth
            margin="normal"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />

          <TextField
            label="Start Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
            required
          />

          <TextField
            label="End Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={(e) => handleChange("endDate", e.target.value)}
            required
          />

          <Box mt={3}>
            <Typography gutterBottom>
              Condition Color: {colorMap[formData.condition]}
            </Typography>
            <Slider
              min={0}
              max={2}
              step={1}
              value={siteCondition}
              defaultValue={1}
              onChange={(e, val) =>
                typeof val === "number" && handleChange("condition", val) || setSiteCondition(val)
              }
              // value={formData.condition}
              // onChange={(e, val)=>{
              //   if(typeof val === 'number'){
              //     handleChange("condition", val);
              //   }
              // }}
              marks={[
                { value: 0, label: "Green" },
                { value: 1, label: "Yellow" },
                { value: 2, label: "Red" },
              ]}
              aria-label="Condition Color"
            />
          </Box>

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} onClick={() => {submit()}} >
            Submit
          </Button>
      </Box>
    </>
  );
}