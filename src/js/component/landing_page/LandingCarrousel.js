import React from "react";
import Testimonio1 from "../../../img/testimonio1.jpeg";
import Testimonio2 from "../../../img/testimonio2.jpeg";
import Testimonio3 from "../../../img/testimonio3.jpeg";
const wrapper = document.querySelector(".wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];

export const LandingCarrousel = () => {
	let currentTestimonial = 0; // Default 0

	indicators.forEach((item, i) => {
		item.addEventListener("click", () => {
			indicators[currentTestimonial].classList.remove("active");
			wrapper.style.marginLeft = `-${100 * i}%`;
			item.classList.add("active");
			currentTestimonial = i;
		});
	});
	return (
		<div className="container">
			<div className="mycarousel wrapper">
				<div className="mycarousel card">
					<div className="mycarousel card-thumb">
						<img src={Testimonio1} className="mycarousel client-img" alt="" />
						<span className="mycarousel client-name">client one</span>
					</div>
					<div className="mycarousel card-body">
						<p className="mycarousel review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident.
							Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?
						</p>
					</div>
				</div>
				<div className="mycarousel card">
					<div className="mycarousel card-thumb">
						<img src={Testimonio2} className="mycarousel client-img" alt="" />
						<span className="mycarousel client-name">client two</span>
					</div>
					<div className="mycarousel card-body">
						<p className="mycarousel review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident.
							Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?
						</p>
					</div>
				</div>
				<div className="mycarousel card">
					<div className="mycarousel card-thumb">
						<img src={Testimonio3} className="mycarousel client-img" alt="" />
						<span className="mycarousel client-name">client three</span>
					</div>
					<div className="mycarousel card-body">
						<p className="mycarousel review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident.
							Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?
						</p>
					</div>
				</div>
			</div>
			<div className="mycarousel indicators">
				<button className="mycarousel active"></button>
				<button></button>
				<button></button>
			</div>
		</div>
	);
};
