const generateManager = function(manager) {
    console.log(manager,'<---------------');
    return `
    <div class="card m-3  shadow p-3 mb-5 bg-body rounded mx-auto " style="max-width: 90%;">
    <div class="row g-0 ">
        <div class="col-md-5 ">
            <img src="./images/Man.png" alt="..." class="img-fluid">
        </div>
        <div class="col-md-7 ">
            <div class="card-body ">
                <h5 class="card-title mt-3 mb-3">Manager</h5>
                <p class="card-text">
                    Name: ${manager[0].name}<br>
                    ID: ${manager[0].id}<br>
                    Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a><br>
                    Office number: <a href="tel:${manager[0].number}">${manager[0].number}</a><br>
                </p>
                <a href="tel:${manager[0].number}" target="_blank"><img src="./images/phone.png" alt="..." class="img-thumbnail"
                    style="width: 40px; height: 40px; display: inline-block;"></a>

                    <a href="mailto:${manager[0].email}" target="_blank"><img src="./images/email.png" alt="..." class="img-thumbnail"
                    style="width: 40px; height: 40px; display: inline-block;"></a>
            </div>
        </div>
    </div>
</div>
    `
}

const generateEngineers = function(Engineers){
    console.log('this is the engineers :', Engineers);
    let output = '';
    Engineers.forEach(element => {
        output += `
        <div class="col">
        <div class="card mb-3 shadow p-3 mb-5 bg-body rounded mx-auto " style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="./images/man.png" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Engineer</h5>
              <p class="card-text">
              Name: ${element.name}<br>
              ID: ${element.id}<br>
              Email: ${element.email}<br>
              Office number: ${element.github}<br>
          </p>
            </div>
          </div>
        </div>
      </div>
      </div>
        `
    });

    console.log(output)
    return output;
}



const createHtml = function(members){
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">

    
        <title>Hello, world!</title>
    </head>
    
    <body>
        <h1>Hello, world!</h1>
        <div class="container">
        ${generateManager(members.filter(member => member.title == 'Manager'))}
        <div class="row row-cols-1 row-cols-md-3 g-4">
        
 
        ${generateEngineers(members.filter(member => member.title == 'Engineer'))}
        </div>
        </div>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
}

module.exports = createHtml;





