import React,{useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collect) => {
    const [docs, setDocs] = useState([]);
    
    useEffect(() => {
        //unsub because we unsubscribe from the collection when we no longer use it
        const unsub = projectFirestore.collection(collect)
        .orderBy('createdAt','desc')
        // takes a snapshot of the database at that moment
        .onSnapshot(snap=>{
            let documents =[];
            snap.forEach(doc =>{
                documents.push({...doc.data(), id: doc.id});
            })
            setDocs(documents);
        })
        return () => unsub();
    }, [collect])


    return {docs}
}

export default useFirestore
