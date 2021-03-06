import 'date-fns';
import { Button, MenuItem, TextField,Select, InputLabel } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import "./AdminMainBoard.css";
import AdminCard from './AdminCard/AdminCard'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import DateFnsUtils from '@date-io/date-fns';
import {convertDate} from '../../../utils'
import fb from '../../../firebase';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
export default function AdminMainBoard() {
    const [language,setLanguage] = useState("선택");
    const [plang,setPlang] = useState();
    const [currentLangList,setCurrentLangList] = useState([]);
    const [content,setContent] = useState(null);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [title,setTitle] = useState("");
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2021-09-18T21:11:54'));
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2021-09-17T21:11:54'));
    const [mainImage,setMainImage] = useState("");

    const handleStartDateChange = (date) => {
      setSelectedStartDate(date);
    };
    const handleEndDateChange = (date) => {
      setSelectedEndDate(date);
    };
    useEffect(() => {

        const db = fb.firestore();
        db.collection("tb_plang").get().then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
                setPlang(doc.data().planglist)
            });
        })
    
    }, [currentLangList])
    const save = function(e){
        console.log(e)
    }
    const handleEditChange = (value) =>{
      const content = JSON.stringify(
        convertToRaw(value.getCurrentContent())
      );
      setContent(content);

    } 
    const handleChange = function(e){
        setLanguage(e.target.value);
        const result = currentLangList.filter(data => data === e.target.value);
        if(result.length>0){
          alert("이미 존재하는 언어입니다");
          return;
        }
    
        setCurrentLangList(currentLangList.concat(e.target.value));
    }

    const saveCareerItem = () =>{
      const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

      const db = fb.firestore();
      const data = db.collection("tb_project").add({
        title:title,
        content:content,
        startdate:convertDate(selectedStartDate),
        completedate:convertDate(selectedEndDate),
        devstuff:currentLangList,
        image:[mainImage]
    }).then((docRef)=>{
        console.log("Document written with ID",docRef.id);
        alert("저장완료")
        return docRef.get().then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }).catch((error)=>{
        alert("Error adding document:",error);
    })


    }

    const handleFileonChange = (e) =>{
      e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      const base64 = reader.result;
      if(base64){
        setMainImage(base64.toString());
      }
    }
    reader.readAsDataURL(file);
    }

  return (
    <div className="AdminMainBoard">
      <div className="AdminMainBoard_section one"></div>
      <div className="AdminMainBoard_section two">
        <div className="AdminMainBoard__sectionWrapper">
          <div className="AdminMainBoard__left">
            <div className="AdminMainBoard_item">
              <TextField
                required
                id="outlined-required"
                label="Title"
                defaultValue="Hello World"
                variant="outlined"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="AdminMainBoard_date">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedEndDate}
                  onChange={handleEndDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </MuiPickersUtilsProvider>
            </div>
            <div className="AdminMainBoard_item Editor">
                     <InputLabel>상세내용</InputLabel>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
                        />
            </div>
            <div className="AdminMainBoard_item">
                        <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={language}
                    onChange={handleChange}
                    label="선택"
                    >
                    {plang ? (Object.keys(plang).map((item)=>(
                         <MenuItem value={item}>{item}</MenuItem>
                    ))):null}
                    
                    </Select>
            </div>
            <div className="AdminMainBoard_item">
              <AdminCard langData={currentLangList}/>
            </div>
          </div>

          <div className="AdminMainBoard__right">
              <div className="AdminMainBoard__MainImage">
                      <figure className="AdminMainBoard__Figure">

                            <img src={mainImage}></img>
                         </figure>
                         <div className="AdminMainBoard__MainImage__BtnGroup">
                         <Button
                      variant="contained"
                      color="default"
                      className={"AdminMainBoard__Btn"}
                      startIcon={<CloudUploadIcon />}
                    >UPLOAD  <input type='file' 
                    accept='image/jpg,impge/png,image/jpeg,image/gif' 
                    name='profile_img' 
                  
                   onChange={handleFileonChange}>
                </input></Button>

                         </div>
                
              </div>
              <div className="AdminMainBoard__Save">

            <Button variant="contained" color="primary" onClick={saveCareerItem}>
              저장
            </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
