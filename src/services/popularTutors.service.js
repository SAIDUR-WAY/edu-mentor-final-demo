import DbConnect from '@/services/DbConnect'
import { ObjectId } from 'mongodb';
import 'server-only'
export const getPopularTutorFromDb = async () => {
    const db = await DbConnect();
    const tutorsCollections = await db.collection('tutors');
    return tutorsCollections.find({}).toArray();
}

export const getSinglePopularTutorData = async (id) => {
    const db = await DbConnect();
    const singleTutorCollection = db.collection('tutors');
    const query = {_id: new ObjectId(id)}
    // return query
    return singleTutorCollection.findOne(query);
}