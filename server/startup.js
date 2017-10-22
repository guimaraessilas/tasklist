Meteor.startup(function(){

    process.env.ROOT_URL = 'https://fasttasks.herokuapp.com:3000';    
    Meteor.publish("tarefas", function(){
        return Tarefas.find({usuario: this.userId});
    });
});