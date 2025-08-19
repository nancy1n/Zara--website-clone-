import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <>
 
     <Navi/>
     <Images/>
<Header/>
<Images2/>
<Image3/>
<Image4/>
<Header1/>
<Image5/>
<Image6/>
<Card/>
<Image7/>
<Card1/>

<Paragraph/>
<Form/>
<Finalform/>
     </>

  );
}

function Navi(){

  return(
      <>
    
      <div className="fixed-top">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h5 className="text-white h4">Collapsed content</h5>
      <span className="text-muted">Toggleable via the navbar brand.</span>

    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <img height="50" src="data:image/png;base64,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"></img>
    <nav className="nav" >
  <a className="nav-link active" href="#">LOG IN</a>
  <a className="nav-link" href="#">HELP</a>
  <a className="nav-link" href="#">SHOPPING BAG</a>

</nav>

 <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
    </form>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>    
    </button>
  </nav>
</div> 

  </>
  )

}

function Images(){
  return(
    <>
    <div className ="myclass">
<nav className="nav" >
  <a className="nav-link active" href="#">VIEW ALL </a>
  <a className="nav-link" href="#">FLORAL</a>
  <a className="nav-link" href="#">WODDY</a>
    <a className="nav-link" href="#">SWEET</a>
      <a className="nav-link" href="#">BASIC</a>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <a className="nav-link" href="#">View</a>
<a className="nav-link" href="#">1</a>
<a className="nav-link" href="#">2</a>

<img src="https://static.zara.net/assets/public/6dc6/6882/d0544cf19c79/84ad6d448fbc/20110603999-H/20110603999-H.jpg?ts=1753894480033&w=1366"></img>
</nav>
</div>
    
    
    </>
  )
}
function Header(){
  return(
    <h1>RED ZARA TEMPTATION</h1>

  )
}

function Images2(){

  return(
    <>
    <div className="card-group">
  <div className="card">
   <img src="https://static.zara.net/assets/public/a74a/1622/aad046d68a79/3fdc98e6179a/20110604999-e1/20110604999-e1.jpg?ts=1739439006632&w=378" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">RED ZARA TEMPTATION</h5>
      <p className="card-text">red zara temptation tobacco extrait de parfum 50ml    2000 EGP
    </p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static.zara.net/assets/public/3ebc/cdde/a9d445f79de9/91d13b36904f/20110603999-e1/20110603999-e1.jpg?ts=1728899199144&w=378"></img>
    <div className="card-body">
      <h5 className="card-title">RED ZARA TEMPTATION</h5>
      <p className="card-text">red zara temptation Vanille  extrait de parfum 50ml    2000 EGP
    </p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static.zara.net/assets/public/3008/608a/b1d9434fb8e0/b449ad6132fb/20110606999-e1/20110606999-e1.jpg?ts=1728899201864&w=378" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">RED ZARA TEMPTATION</h5>
      <p className="card-text">red zara temptation Sandalwood  extrait de parfum 50ml    2000 EGP</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

    
    </>
  )
}

function Image3(){
  return(
<>
<div   className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
<img width="400"height="500" src="https://static.zara.net/assets/public/3008/608a/b1d9434fb8e0/b449ad6132fb/20110606999-e1/20110606999-e1.jpg?ts=1728899201864&w=378" className="card-img-top" alt="..."></img>

    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">THE EXTRAIT RED TEMPTATION </h5>
        <p className="card-text">Temptation elevated to its maximum expression  RED TEMPTATION EXTRACT is the most concentrated and potent version of our iconic red temptation extract , design for those who want a more intense , richer  and long lasting offactory experience . this extract intensitfies the perfect duality between sweetness and mysterious depth</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

</>

  )
}
function Image4(){
  return(
    <>
   <img src="https://static.zara.net/assets/public/8d44/562e/d64b4276afba/4b1c978e5699/20110873999-ult27/20110873999-ult27.jpg?ts=1753778425070&w=1366"></img>
    </>
  )
}
function Header1(){
  return(
    <>
    <h2>GOLDEN DECADE </h2>
    </>
  )

}
function Image5(){
  return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.zara.net/assets/public/f700/dba0/d1774750a387/60cfac875d6f/20110873999-ult11/20110873999-ult11.jpg?ts=1753804370449&w=324" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://static.zara.net/assets/public/ee3f/a3d3/744d4f888f5a/71f479890188/20110652999-ult11/20110652999-ult11.jpg?ts=1753804367317&w=324" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://static.zara.net/assets/public/d50f/48e6/fd664b038db0/e50a291948c9/20110762999-ult11/20110762999-ult11.jpg?ts=1753869297399&w=324" className="d-block w-100" alt="..."></img>
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </>
  )
}
function Image6(){
  return(
  <img src="https://static.zara.net/assets/public/8690/374a/7c964d289d45/ac0beecf4165/20110553999-H/20110553999-H.jpg?ts=1753892080535&w=1366"></img>

)}
function Card(){
  return(
<>
<div className="card-group">
  <div className="card">
    <img src="https://static.zara.net/assets/public/5d4b/f35c/dc50412daf72/bc53c44e5793/20120948999-ult11/20120948999-ult11.jpg?ts=1753864880595&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">

    </div>
  </div>
  <div className="card">
    <img src="https://static.zara.net/assets/public/21e9/a296/40cf4b009faf/1c4cafaeaeaa/20120947999-ult11/20120947999-ult11.jpg?ts=1753864879940&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">
     
    </div>
  </div>


  <div className="card">
    <img src="https://static.zara.net/assets/public/9273/3fea/ab8c4df29297/dcc14ccc886e/20120807999-ult11/20120807999-ult11.jpg?ts=1753864879878&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">
     
    </div>
  </div>

  <div className="card">
    <img src="https://static.zara.net/assets/public/bd4e/b153/481247f9a238/a9e27a749bad/20120804999-ult11/20120804999-ult11.jpg?ts=1753864880457&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">
     
    </div>
  </div>
</div>
</>


  )
}
function Image7(){
  return(
    <img src="https://static.zara.net/assets/public/7289/0f92/5c624af8bfbb/797114c0ad58/20120943999-ult28/20120943999-ult28.jpg?ts=1753690561685&w=1366"></img>
  )
}
function Card1(){
  return(
<>
<div className="card-group">
  <div className="card">
    <img src="https://static.zara.net/assets/public/5653/475d/7fd04c27959b/7232b48ef4bb/20120943999-ult25/20120943999-ult25.jpg?ts=1750667582914&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Vibrant Caramel</h5>
      <p className="card-text">3000 EGP</p>
    
    </div>
  </div>
  <div className="card">
    <img src="https://static.zara.net/assets/public/1a1a/5530/34a54538a998/cc378a1d576e/20120942999-ult21/20120942999-ult21.jpg?ts=1750667583217&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Red Vanilla Candy</h5>
      <p className="card-text">3500 EGP.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://static.zara.net/assets/public/f9d2/f975/805542e1befc/3fbc6b6873a9/20120944999-ult25/20120944999-ult25.jpg?ts=1750667583327&w=324" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Violet blossem </h5>
      <p className="card-text">4000 EGP</p>
   
    </div>
  </div>
</div>


</>

  )
}
function Paragraph(){
  return(
    <p><b>join our newsletter</b></p>
  )
}

function Form(){
  return(
    <>
    <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>
  )
}
function Finalform(){
return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<a className="nav-link active" href="#"> TIKTOK</a>
  <a className="nav-link" href="#">INSTAGRAM</a>
  <a className="nav-link" href="#">FACEBOOK</a>
    <a className="nav-link" href="#">X</a>
      <a className="nav-link" href="#">PINTEREST</a>

  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="#">HELP <span className="sr-only">(current)</span></a>
      <a className="nav-link active" href="#">FOLLOW US</a>
      <a className="nav-link active" href="#">COMPANY</a>
      <a className="nav-link active " href="#" >POLICIES</a>
    </div>
  </div>
</nav>

</>

)
}