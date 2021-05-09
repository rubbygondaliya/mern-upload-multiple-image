import React, { useState } from 'react';
import axios from 'axios';

const FilesUpload = () => {
    const [imgCollection, setImgCollection] = useState();
    
    const onFileChange = (e) => {
        setImgCollection(e.target.files);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData();
        for (const key of Object.keys(imgCollection)) {
            formData.append('imgCollection', imgCollection[key])
        }
        
        axios.post("http://localhost:4000/api/upload-images", formData, {
        }).then(res => {
            console.log(res.data)
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <form onSubmit={onSubmit}>
                    <h3 className="my-3">Multiple File Upload</h3>
                    <div className="form-group my-3">
                        <input type="file" onChange={onFileChange} multiple/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FilesUpload;