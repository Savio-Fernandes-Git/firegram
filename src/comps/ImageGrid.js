import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
import firebase from 'firebase';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');
    console.log(docs);
    
    const deleteImg = (id, collection) => {
        firebase
        .firestore()
        .collection(collection)
        .doc(id)
        .delete()
    }
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" 
                key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
                onDoubleClick={()=>deleteImg(doc.id,'images')}
                >
            {/* <button
            className="delete-btn" 
            onClick={()=>deleteImg(doc.id,'images')}>
            x
            </button> */}
            <motion.img src={doc.url} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
            
            </motion.div>
        ))}
    </div>
    )
}

export default ImageGrid;
