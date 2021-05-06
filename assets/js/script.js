const app = new Vue({

  el:'#app',

  data:{
    // variabile booleana che mi attiva l'alert solo se è true
    alertActive: false,
    testo:'',
    
    messaggi:[

      {
        messaggio:'Nasci',
        // per sapere se l'utente ha checkato il testo creo un flag
        checked: true,
      },

      {
        messaggio:'Cresci',
        checked: false,
      },

      {
        messaggio:'Vivi',
        checked: false,
      },

      {
        messaggio:'Muori',
        checked: false,
      },
      {
        messaggio:'Risorgi',
        checked: false,
      }
      
    ]

  },
  
  methods:{

    clearMsg(index){
      //punto il mio checked dentro messaggi, se è false lo faccio diventare true cosi da poterlo cancellare
      if(this.messaggi[index].checked === false){
        this.messaggi[index].checked = true
      }else{
        this.messaggi.splice(index,1)
      }
    },

    addMsg(){
      //inserisco il testo solo se la sua lunghezza è superiore a 2 caratteri
      if(this.testo.length > 2){
          this.messaggi.push({
          messaggio:this.testo,
          checked: false,
        })
        this.testo = '';
      }
      else{
        this.alertActive = true;
        setTimeout(()=>{
          this.alertActive = false;
        },3000)
      }
    },
    
  }

})