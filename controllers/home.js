let projectModel = [{name:"Issue_Tracker",description:"i have in use to tack bug in project",author:"Amrit" , bug : [{title:"SPA",description:"need to make it SPA",labels:"REACT JS",author:"Prince"},{title:"DB",description:"ADD DB",labels:"mongoDB,low",author:"Vishal"}] }];
 
module.exports.home =(req,res)=>{
    return res.render('home',{
        project_list:projectModel
    });
}
module.exports.creat_project = (req,res) =>
{
    
        //console.log(req.body);
        const {name , description , author} = req.body;
        projectModel.push({name:name,description:description , author:author,bug:[]});
        return res.redirect("back");
}

module.exports.bug_home = (req, res) => {
    const id = req.params.id;
    const project = projectModel.find((i) => i.name === id);
    //console.log(id);
    if (!project) {
      // If project is not found, handle the error accordingly
      return res.status(404).send('Project not found..');
    }
    //console.log(project);
    let result=[];
    return res.render('bug', { project ,result:result});
  };

module.exports.form = (req,res)=>
{
  const name = req.query.projectName;
  //console.log(name);
  return res.render('form',{title:"form" , name});
}

module.exports.bugform = (req,res) =>
{
  
          //console.log(req.body);
          const {name, title,description,labels , author} = req.body;
          const bugObject = {
          title:title,
          description:description,
          labels:labels,
          author:author
          }
          const project1 = projectModel.find((i)=> i.name===name);
          if(project1)
          {
            project1.bug.push(bugObject);
            console.log("Bug added ");
          } else {
            console.log(`Project  not found.`);
          }
          
          let result=[];
  const project = projectModel.find((i) => i.name === name);
  return res.render('bug', { project , result});
}

module.exports.search = (req, res) => {
  const id = req.params.id;
  const project = projectModel.find((i) => i.name === id);

  const {
    label,
    author,
    search
  } = req.body;
  let haveLabel = label.split(",");
  let result = [];

  for (let i = 0; i < project.bug.length; i++) {
    const bug = project.bug[i];

    let lab = bug.labels;
    lab = lab.split(",");

    let a = 1,
      b = 0,
      c = 1,
      d = 1;

    if (author !== "" && author !== bug.author) {
      a = 0;
    }

    for (let j = 0; j < lab.length; j++) {
      if (lab[j] === label) {
        b = 1;
        break;
      }
    }

    if (search !== bug.title) {
      c = 0;
    }

    if (!bug.description.includes(search)) {
      d = 0;
    }

    if (a === 1 || b === 1 || c === 1 || d === 1) {
      result.push(bug);
    }
  }

  console.log("result is ", result);
  return res.render('bug', {
    project,
    result: result
  });
}
