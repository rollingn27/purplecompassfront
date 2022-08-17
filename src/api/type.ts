export type Project = {
  
  id: string,
  name: string,
  member: string[],
  issues: Issue[],
  creatdate: Date,
  duedate: Date,
  pm: string[]
};

export type Issue = {

}


// username: '',
//     email: '',
//     birthday: '',
//     password: '',
//     confirmPassword: '',


//     id*	프로젝트id
// name	프로젝트이름
// member	프로젝트참가멤버
// issue	이슈
// createdate	생성일
// duedate	프로젝트마감일
// pm	프로젝트 매니저