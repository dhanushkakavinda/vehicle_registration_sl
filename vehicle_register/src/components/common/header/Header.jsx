import React from 'react';
import Navbar from '../../common/navbar';


import './Header.css';

function Header (){
		return(
			<section className="header">
				<section className="header-top">   
					<section className="header-top_logo">   
						<a href="/" className="header-logo">SLVR</a> 
				
					</section>
					<section className="header-top_navbar">   
						<Navbar />
					
				
					</section>
				
				</section>
			</section>
		)
}

export default Header;