import React, {useState} from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    const types=['image/png','image/jpeg','image/jfif'];

    const changeHandler =(e) =>{
        //only takes the first file, some uploaders allow to take multiple files, in our case we want only one file
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');//clears error message
        }else{
            setFile(null);//reset the file
            setError('Please select an image file(png/jpeg/jfif)');
        }
    }

    return (
        <form>
            <label><input type="file" 
                onChange={changeHandler}
            />
            <span>+</span>
            </label>
            <div className ="output">
                { error && <div className="error">{ error }</div>}
                { file && <div className="error">{ file.name }</div>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;
