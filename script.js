const container = document.querySelector('#container');
const button = document.querySelector('#reset');
    
    function createSquares() { 
        for(let i = 0; i < 256; i++) { 
        let divs = document.createElement('div');
        divs.id =  i;
        divs.className = 'box';
        divs.style.backgroundColor = "#F0F0F0";
        container.appendChild(divs);

        function hover() { 
           divs.style.backgroundColor = "#373737";
    }

        divs.addEventListener('mouseenter', hover);
    
    }  
    };

    button.addEventListener('click',resize);
    
    
        function resize() {   
            removeAllChildNodes(container);       
            let sizePixels = prompt("Choose a new size for the pad!");
            if (sizePixels > 100 ){
                alert("It has to be less than 100, sorry!");
            }
            let j = sizePixels;
            let k = j*j; 
        
    
            for(let i = 0; i < k; i++) { 
                let divs = document.createElement('div');
                divs.id =  i;
                divs.className = 'box';
                divs.style.backgroundColor = "#F0F0F0";
                container.style.setProperty('--px-size',j);
                container.appendChild(divs);
    
            function hover() { 
                divs.style.backgroundColor = "#373737";
            }
     
            divs.addEventListener('mouseenter', hover);
            
      
        }
    
    }
    createSquares();

    function removeAllChildNodes(parent) {
            while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
        
    
     

















    

