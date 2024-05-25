const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch:{
    name(value){
      this.fullname = value+ ' '+ "hassan";
    }
  },
  computed:{
    // fullname(){
    //   if(this.name===''){
    //     return '';
    //   }
    //   return this.name+ ' ' +'Hassan';
    // }
  },
  methods:{
    resetInput(){
      this.name='';
    },
    submitForm(){
      alert("Submited");

    },
    setName(event){
      this.name =  event.target.value;
    },

    add(){
     this.counter ++;
    },
    reduce(){
     this.counter --;

    }
  }
});

app.mount('#events');
