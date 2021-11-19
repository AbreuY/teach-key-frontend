import React from "react";
import { Link } from "react-router-dom";
import Testimonio1 from "../../../img/testimonio1.jpeg";
import Testimonio2 from "../../../img/testimonio2.jpeg";
import Testimonio3 from "../../../img/testimonio3.jpeg";

export const LandingCarrousel = () => {
	window.onload = () => {
		const wrapper = document.querySelector(".carousel_wrapper");
		const indicators = [...document.querySelectorAll(".carousel_indicators button")];
		let currentTestimonial = 0; // Default 0

		indicators.forEach((item, i) => {
			item.addEventListener("click", () => {
				indicators[currentTestimonial].classList.remove("active");
				wrapper.style.marginLeft = `-${100 * i}%`;
				item.classList.add("active");
				currentTestimonial = i;
			});
		});
	};

	return (
		<div className="row">
			<div className="carousel_container rounded-corners-card">
				<div className="carousel_wrapper">
					<div className="carousel-card">
						<div className="carousel-card-thumb">
							<img src={Testimonio1} className="carousel-client-img img-fluid" alt="" />
							<span className="carousel-client-name">Marta789</span>
						</div>
						<div className="carousel-card-body">
							<p className="review">
								Tenía dificultades para poder contactar a un profesor en particular en la materia que
								estaba interesada. Muchas páginas solo ofrecían servicios pre-grabados y realmente no
								aprendía mucho con ellos. ¡Con Teach Key eso cambió totalmente!
							</p>
						</div>
					</div>
					<div className="carousel-card">
						<div className="carousel-card-thumb">
							<img src={Testimonio2} className=" carousel-client-img img-fluid pt-3" alt="" />
							<span className=" carousel-client-name">Ernestom24</span>
						</div>
						<div className="carousel-card-body">
							<p className=" review">
								Me parece genial poder contactar con el profesor que ofrece el servicio y poder acordar
								el horario y el método de pago personalmente. Y también acordar en como nos conectaremos
								para que me pueda dar clases. ¡Maravilloso!
							</p>
						</div>
					</div>
					<div className="carousel-card">
						<div className=" carousel-card-thumb">
							<img src={Testimonio3} className=" carousel-client-img img-fluid " alt="" />
							<span className=" carousel-client-name">Bryan56</span>
						</div>
						<div className="carousel-card-body">
							<p className="review">
								Crear tu cuenta es súper fácil y sin ninguna complicación. Ser profesor es genial ya que
								apenas creas tu cuenta, puedes empezar a subir los servicios que ofreces. ¡Te ahorra
								muchísimo tiempo!
							</p>
						</div>
					</div>
				</div>
				<div className="carousel_indicators">
					<button className="active" style={{ buttonActive: "#E14F3F !important" }}></button>
					<button></button>
					<button></button>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-3"></div>
				<div className="col-6 text-center " data-aos="zoom-in" data-aos-duration="3000">
					<h2 className="fw-bold shadow-sm py-2 ">¿Quieres empezar a ver clases o subir tus servicios?</h2>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 mt-5 text-center " data-aos="zoom-in" data-aos-duration="2000">
					<Link to="/signup/professor" className="btn cinnabar-outline-btn">
						Empieza como profesor!
					</Link>
					<Link to="/signup/student" className="btn cinnabar-outline-btn ms-2">
						Empieza como estudiante!
					</Link>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
};
