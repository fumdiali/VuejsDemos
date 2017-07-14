var card = new Vue({
  el: "#card",
  data: {
    title: "Never forget things TuDu",
    items: [
      { text: "Buy soap"},
      { text: "Go to computer village"}    
    ]  
  },
  methods: {
    addItem: function () {  
      var input = document.getElementById('itemForm');
      
      if (input.value !== '') {
      	this.items.push({
           text: input.value      	
      	})
      	input.value = "";
                              }
  
  },//endof addItem f/unc
  
  deleteItem: function(index){
    	
      this.items.splice(index,1);  
        
    }//endof cancelItem f/unc
  
          }//endof methods
  

});
