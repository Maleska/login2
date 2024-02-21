import { useState} from "react";
import { Container,Content, ClosedSideBar, OpenSideBar} from "./Style";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { RiLogoutCircleRLine } from "react-icons/ri";
import NavBar from "./NavBar";

// import logoImg from "../assets";
// import userImg from "../assets/images/eu.jpg";

const SideBar =()=>{
    const [sideBar, setSideBar] = useState(false);

    function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}

    return (
		<Container>
			<NavBar/>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
						<nav>
							<button onClick={handleChangeSideBar} >
								< BsArrowRight />
							</button>

							<img src={"/"} alt="Menu" />

							{/* Links principais do app */}
							{/* <ul>
								<a href="/" title="Pedidos">
									<DiReact />
								</a>
								<a href="/" title="Cotizaciones">
									<DiReact />
								</a>
								<a href="/" title="Historial">
									<DiReact />
								</a>
								<a href="/" title="Clientes">
									<DiReact />
								</a>
							</ul> */}
						</nav>
						<div>
							{/* Icones que pode não ser tão principais no app */}
							<ul>
								<a href="/" title="Notificaciones">
									<IoNotificationsSharp />
								</a>
								<a href="/" title="Configuracion">
									<IoMdSettings />
								</a>
								<a href="/" title="Salir">
									<RiLogoutCircleRLine />
								</a>
							</ul>

							{/* <span>
								<img src={"/"} alt="Eu" />
							</span> */}
						</div>
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
										<BsArrowLeft />
									</button>
								</span>
								{/* <div>
									<img src={"/"} alt="ConsulSoftware" />
									<h6>Mi logo </h6>
								</div> */}

								{/* Icones principais do app */}
								<ul>
									<a href="/" title="Cotizaciones">
										<DiReact />
										<p>Cotizaciones</p>
									</a>
									<a href="/" title="Pedidos">
										<DiReact />
										<p>Pedidos</p>
									</a>
									<a href="/" title="Clientes">
										<DiReact />
										<p>Clientes</p>
									</a>
									<a href="/" title="Historico">
										<DiReact />
										<p>Historico</p>
									</a>
								</ul>
							</nav>
							<div>
								{/* Icones que pode não ser tão principais no app */}
								<ul>
									<a href="/">
										<IoNotificationsSharp />
										<p>Notificaciones</p>
									</a>
									<a href="/">
										<IoMdSettings />
										<p>Configuraciones</p>
									</a>
									<a href="/">
										<RiLogoutCircleRLine />
										<p> Salir  </p>
									</a>
								</ul>

								{/* <span>
									<img src={"/"} alt="Eu" />
									<p>Tiago Gonçalves de Castro</p>
								</span> */}
							</div>
						</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}

export default SideBar;