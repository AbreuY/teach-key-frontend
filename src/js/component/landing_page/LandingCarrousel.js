import React from "react";
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
			<div className="carousel_container">
				<div className="carousel_wrapper">
					<div className="carousel-card">
						<div className="carousel-card-thumb">
							<img src={Testimonio1} className="carousel-client-img img-fluid" alt="" />
							<span className="carousel-client-name">Marta789</span>
						</div>
						<div className="carousel-card-body">
							<p className="review">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident.
								Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?
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
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident.
								Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?
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
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident.
								Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?
							</p>
						</div>
					</div>
				</div>
				<div className="carousel_indicators">
					<button className="active"></button>
					<button></button>
					<button></button>
				</div>
			</div>
		</div>
	);
};
