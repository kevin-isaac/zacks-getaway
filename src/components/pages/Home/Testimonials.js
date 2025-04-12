import customer1Image from "../../../assets/customer1.jpg";
import customer2Image from "../../../assets/customer2.jpg";
import customer3Image from "../../../assets/customer3.jpg";

import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Denise",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `A fabulous venue. We had a great time, especially at the disco! And the kids loved the pool and backyard space.`,
  },
  {
    fullName: "Louis",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Is a real nice place to go and lime. My son enjoyed running around the place. A lot of fun.`,
  },
  {
    fullName: "Gail",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I like up here. It's nice to be around all the colorful plants and sounds by the ocean, and spend quality time with family.`,
  },

];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
