/** @format */

import Heading from "../../components/Heading";
import Transition from "../../components/Transition";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <>
      <Transition>
        <Heading>Blog</Heading>
        <p>
          This website is the professional portfolio of Muhammad Sahal Nurdin, a
          skilled web developer. It highlights his work, skills, and
          achievements in web development, showcasing various projects he has
          created. Through this portfolio, Muhammad Sahal Nurdin shares his
          expertise in designing and building user-centered applications and
          websites, reflecting his passion for technology and commitment to
          continuous learning.
        </p>
      </Transition>
    </>
  );
}