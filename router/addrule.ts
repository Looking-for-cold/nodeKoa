import * as Rourter from 'koa-router'
// import {operatingNote} from '../mysql/add'
import {de} from '../mysql/delete'
const router = new Rourter();
interface Userdata {
    title: string;
    type:number;
}
router.post('/adduser',async(ctx,next)=>{
    const data : object = ctx.request.body;
    // data['type'] =1;
    // data['title'] = "成功";
    // let userdata = await operatingNote.addMacro(data);
    console.log(1)
    await de.delete(data);
    ctx.body={
        code:401,
        data:'用户名或密码不能为空'
    }
})

export {
    router,
}