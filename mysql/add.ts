import { getRepository,getManager } from 'typeorm';
import { macro } from './macro';
export  const operatingNote={
    addMacro:async(userdata:object)=>{
        let text = new macro();
        text.title = userdata['title'];
        text.type = userdata['type'];
        return await getManager().save(macro,text);
    },
}