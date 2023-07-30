let projectModel = [{name:"Issue_Tracker",description:"i have in use to tack bug in project",author:"Amrit" , bug : [{title:"SPA",description:"need to make it SPA",labels:"REACT JS",author:"Prince"},{title:"DB",description:"ADD DB",labels:"mongoDB",author:"Vishal"}] }];

module.exports.home =(req,res)=>{
    return res.render('home',{
        project_list:projectModel
    });
}
module.exports.creat_project = (req,res) =>
{
    
        console.log(req.body);
        const {name , description , author} = req.body;
        projectModel.push({name:name,description:description , author:author,bug:[]});
        return res.redirect("back");
}

module.exports.bug_home = (req, res) => {
    const id = req.params.id;
    const project = projectModel.find((i) => i.name === id);
    console.log(id);
    if (!project) {
      // If project is not found, handle the error accordingly
      return res.status(404).send('Project not found..');
    }
  
    return res.render('bug', { project });
  };

module.exports.form = (req,res)=>
{
  const name = req.query.projectName;
  //console.log(name);
  return res.render('form',{title:"form" , name});
}

module.exports.bugform = (req,res) =>
{
  
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
          
  
  const project = projectModel.find((i) => i.name === name);
  return res.render('bug', { project });
}
