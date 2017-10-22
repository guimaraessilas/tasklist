import { Meteor } from 'meteor/meteor';

if (Meteor.isServer){
    Meteor.startup(() => {
   
        Meteor.publish("tarefas", function(){
            return Tarefas.find({usuario: this.userId});
        });
   
        process.env.MAIL_URL="smtp://guimaraes.silas2013%40gmail.com:minhasenha@smtp.gmail.com:465/";
    });
}

