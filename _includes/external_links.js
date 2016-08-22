
<script>
    var a = document.getElementsByTagName('a');
    var b = a.length;

    while(b--){
        a[b].onclick = function(){
            if(this.href.indexOf('{{ site.baseurl }}')<0){
               //They have clicked an external domain
               var confirmation = confirm("You are now departing from SecondaryCities.state.gov. External links to other Internet sites should not be construed as an endorement of the views or privacy pollicies contained therein. Are you sure you want to leave ?");
               if (!confirmation) {
                 // prevents the default event for the click
                 // which means that in this case it won't follow the link
                 event.preventDefault();
               }
            }
            //else{
              //  alert('staying in your site');
           // }
        };
    }
</script>


