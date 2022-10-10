import './App.css';

function Header() {
  return (
    <div className="Header">
		<nav>
			<h3 className="bd-dark">l_OGO</h3>
			
			<ol>
				<li><a href="#">Home</a></li>
				<li><a href="#">Content</a></li>
				<li><a href="#">Footer</a></li>
				
				<button className="btn">Subscribe</button>
			</ol>
		</nav>
		
		<div>
			<h1 className="text">We provide Web app <br/>and Design services</h1>
			<p className="description">Lorem Ipsum is simply dummy textof the printing 
			and<br/> typesetting industry. Lorem Ipsum has been the industry's <br/>standard dummy 
			o ever since the , when an unknown printer <br/>took a galley type and scrambled
			it to make a type specimen book.</p>
			
			<button className="btn btn2">See more</button>
		</div>
		
		<div id="about">
		<div>
			<h2 className="about">About us</h2>
			<img className="images" src={require("../src/bg.jpg")}/>
			<p className="about-des">Lorem Ipsum is simply dummy textof the printing 
			and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
			o ever since the , when an unknown printer took a galley type and scrambled
			it to make a type specimen book.</p>
			</div>
		</div>
		

    </div>

  );
}

export default Header;
