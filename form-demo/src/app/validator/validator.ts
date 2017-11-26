
//表单校验
import {FormControl, FormGroup} from "@angular/forms/src/model";

export function  mobileValidator(control:FormControl):any{
  var myrea = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myrea.test(control.value);
  console.log("mobile的校验结果是："+valid);
  return valid?null :{mobile:true};
}

export function  equalValidator(group:FormGroup):any{
  let password:FormControl = group.get("password") as FormControl;
  let pconfirm:FormControl = group.get("password") as FormControl;
  let valid :boolean = (password.value == pconfirm.value);
  console.log("密码校验通过："+valid);
  return valid ? null :{equal:true}
}
