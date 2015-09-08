var helloGreeterPrototype = {
   greet : function ( name ) {
      alert('Hello, ' + name + '!');
   },
   createdCallback : function () {
      var greeter = this;
      var input = document.createElement('input');
      input.addEventListener("change", function () {
         var name = input.value;
         greeter.greet( name );
      });
      var button = document.createElement('button');

      button.innerHTML = 'Sag Hallo!'; 
      button.onclick = function () {
         var name = input.value;
         greeter.greet( name );
      };
       
      var shadowRoot = greeter.createShadowRoot();
      shadowRoot.appendChild( input );
      shadowRoot.appendChild( button );
   }
};

Object.setPrototypeOf( helloGreeterPrototype, HTMLElement.prototype );

document.registerElement('hello-greeter', {
    prototype : helloGreeterPrototype
});