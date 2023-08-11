function createNavigationBar(){
  var mainDiv = document.querySelector("#main");

  var parentNavDiv =  document.createElement("div");
  parentNavDiv.setAttribute("class","row");
  parentNavDiv.style.height = 70;
  parentNavDiv.style.backgroundColor = "black"
  
  var logoDiv = document.createElement("div");
  logoDiv.setAttribute("class","col-md-3");
  logoDiv.style.height = 70;
  logoDiv.style.marginLeft = 20;

  var logoText = document.createElement("h3");
  logoText.innerHTML = "<span class='text-danger'>Do</span> <span class='text-white'>shopping</span>";
  
  var labelText = document.createElement("label");
  labelText.innerHTML = "By seating at your home";
  labelText.setAttribute("class","text-white");

  logoDiv.appendChild(logoText);
  logoDiv.appendChild(labelText);

  var searchDiv = document.createElement("div");
  searchDiv.setAttribute("class","col-md-6 d-flex align-items-center");
  searchDiv.setAttribute("style","height:70px;");
  
  var searchInput = document.createElement("input");
  searchInput.setAttribute("type","text");
  searchInput.setAttribute("class","form-control");
  searchInput.setAttribute("placeholder","Search products");
  searchDiv.appendChild(searchInput);

  parentNavDiv.appendChild(logoDiv);
  parentNavDiv.appendChild(searchDiv);
  mainDiv.appendChild(parentNavDiv); 
}