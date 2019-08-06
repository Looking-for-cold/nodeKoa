import {getRepository} from "typeorm";
import { macro } from './macro';
export  const up={
    update:async(userdata:object)=>{
        const userRepository = getRepository(macro); 
        const user = await userRepository.findOne(1);
        user.title = "失败";
        user.type = 2000;
        return await userRepository.save(user);
    },
}
