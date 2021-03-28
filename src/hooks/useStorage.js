//custom hook
import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0); //progress of upload
    const [error, setError] = useState(null); //errors of upload
    const [url, setUrl] = useState(null); //image url from storage

    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        
        //async
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/ snap.totalBytes) * 100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt= timestamp();
            collectionRef.add({url, createdAt});
            setUrl(url);
        });
    },[file]);//[] dependency

    return {progress, url, error}//we will access these values if we add this component to a hook
}

export default useStorage;