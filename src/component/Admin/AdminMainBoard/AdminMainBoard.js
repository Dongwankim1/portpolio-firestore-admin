import { Button, MenuItem, TextField,Select, InputLabel } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import "./AdminMainBoard.css";
import AdminCard from './AdminCard/AdminCard'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import fb from '../../../firebase';
export default function AdminMainBoard() {
    const [language,setLanguage] = useState("선택");
    const [plang,setPlang] = useState();
    const [currentLangList,setCurrentLangList] = useState([]);
    const [content,setContent] = useState(null);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

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
      console.log(content)
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
      console.log(content);
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
              />
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
            <Button variant="contained" color="primary" onClick={saveCareerItem}>
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
