import { getRepository,getManager } from 'typeorm';
import { macro } from './macro';
export  const de={
    delete:async(userdata:object)=>{
        let text = new macro();
        const deleteList = await getRepository(macro).findOne({ id:1});
        return await getManager().remove(deleteList);
    },
}